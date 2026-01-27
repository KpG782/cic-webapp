import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { BatchRecipient, BatchProgress } from '@/types/batch'
import { TextElement, ImageElement, CertificateTemplate } from '@/types/certificates'

/**
 * Parse CSV file to recipients array
 */
export function parseCSV(text: string): BatchRecipient[] {
  const lines = text.trim().split('\n')
  if (lines.length < 2) throw new Error('CSV must have header and data rows')

  const headers = lines[0].split(',').map(h => h.trim().toLowerCase())
  const nameIndex = headers.indexOf('name')
  const emailIndex = headers.indexOf('email')
  const titleIndex = headers.indexOf('title')
  const dateIndex = headers.indexOf('date')

  if (nameIndex === -1) throw new Error('CSV must have "name" column')
  if (emailIndex === -1) throw new Error('CSV must have "email" column')

  const recipients: BatchRecipient[] = []
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''))
    const name = values[nameIndex]
    const email = values[emailIndex]

    if (!name || !email) throw new Error(`Row ${i + 1}: Missing name or email`)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error(`Row ${i + 1}: Invalid email: ${email}`)
    }

    recipients.push({
      name,
      email,
      title: titleIndex !== -1 ? values[titleIndex] : '',
      date: dateIndex !== -1 ? values[dateIndex] : ''
    })
  }

  return recipients
}

/**
 * Parse JSON file to recipients array
 */
export async function parseJSON(file: File): Promise<BatchRecipient[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string
        const data = JSON.parse(content)

        if (!data.recipients || !Array.isArray(data.recipients)) {
          throw new Error('Invalid JSON structure. Expected { "recipients": [...] }')
        }

        const recipients = data.recipients.map((recipient: any, index: number) => {
          if (!recipient.name || typeof recipient.name !== 'string') {
            throw new Error(`Recipient ${index}: Missing valid "name"`)
          }
          if (!recipient.email || typeof recipient.email !== 'string') {
            throw new Error(`Recipient ${index}: Missing valid "email"`)
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient.email)) {
            throw new Error(`Recipient ${index}: Invalid email: ${recipient.email}`)
          }
          
          return {
            name: recipient.name,
            email: recipient.email,
            title: recipient.title || '',
            date: recipient.date || '',
            customFields: recipient.customFields || {}
          }
        })

        resolve(recipients)
      } catch (error) {
        reject(new Error(`Failed to parse JSON: ${error instanceof Error ? error.message : 'Unknown error'}`))
      }
    }

    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsText(file)
  })
}

/**
 * Replace placeholders in text with recipient data
 */
function replacePlaceholders(text: string, recipient: BatchRecipient): string {
  let result = text
  result = result.replace(/\{\{name\}\}/gi, recipient.name)
  result = result.replace(/\{\{title\}\}/gi, recipient.title || '')
  result = result.replace(/\{\{date\}\}/gi, recipient.date || '')
  result = result.replace(/\{\{email\}\}/gi, recipient.email)

  if (recipient.customFields) {
    Object.entries(recipient.customFields).forEach(([key, value]) => {
      const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'gi')
      result = result.replace(regex, value)
    })
  }

  return result
}

/**
 * Load image from URL
 */
async function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })
}

/**
 * Draw smart text with auto-scaling
 */
function drawSmartText(
  ctx: CanvasRenderingContext2D,
  text: string,
  element: TextElement,
  templateWidth: number
) {
  ctx.font = `${element.fontStyle} ${element.fontWeight} ${element.fontSize}px ${element.fontFamily}`
  ctx.fillStyle = element.color
  ctx.textBaseline = 'top'

  const lines = text.split('\n')

  lines.forEach((line, lineIndex) => {
    const y = element.position.y + lineIndex * element.fontSize * 1.2
    const metrics = ctx.measureText(line)
    const textWidth = metrics.width
    const maxWidth = element.maxWidth || templateWidth * 0.8
    let x = element.position.x

    if (element.textAlign === 'center') {
      ctx.textAlign = 'center'
      if (textWidth > maxWidth) {
        ctx.save()
        const scale = maxWidth / textWidth
        ctx.translate(x, y)
        ctx.scale(scale, 1)
        ctx.fillText(line, 0, 0)
        ctx.restore()
        return
      }
    } else if (element.textAlign === 'left') {
      ctx.textAlign = 'left'
    } else if (element.textAlign === 'right') {
      ctx.textAlign = 'right'
    }

    ctx.fillText(line, x, y)
  })
}

/**
 * Render single certificate to canvas
 */
async function renderCertificate(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  template: CertificateTemplate,
  textElements: TextElement[],
  imageElements: ImageElement[],
  recipient: BatchRecipient,
  loadedImages: {
    template: HTMLImageElement
    elements: Array<{ element: ImageElement; img: HTMLImageElement }>
  }
): Promise<void> {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Draw template background
  ctx.drawImage(loadedImages.template, 0, 0, template.width, template.height)

  // Draw image elements
  loadedImages.elements.forEach(({ element, img }) => {
    ctx.drawImage(img, element.position.x, element.position.y, element.width, element.height)
  })

  // Draw text elements
  textElements.forEach((element) => {
    const text = replacePlaceholders(element.text, recipient)
    drawSmartText(ctx, text, element, template.width)
  })
}

/**
 * Batch Certificate Generator Class
 */
export class BatchCertificateGenerator {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  constructor() {
    this.canvas = document.createElement('canvas')
    const ctx = this.canvas.getContext('2d')
    if (!ctx) throw new Error('Failed to get 2D context')
    this.ctx = ctx
  }

  /**
   * Download batch certificates as ZIP
   */
  async downloadBatch(
    recipients: BatchRecipient[],
    template: CertificateTemplate,
    textElements: TextElement[],
    imageElements: ImageElement[],
    onProgress: (progress: BatchProgress) => void
  ): Promise<void> {
    this.canvas.width = template.width
    this.canvas.height = template.height

    const zip = new JSZip()
    const folder = zip.folder('certificates')

    onProgress({
      total: recipients.length,
      current: 0,
      status: 'processing',
      currentName: 'Loading images...'
    })

    // Pre-load all images
    const loadedImages = {
      template: await loadImage(template.backgroundImage),
      elements: await Promise.all(
        imageElements.map(async (element) => ({
          element,
          img: await loadImage(element.src)
        }))
      )
    }

    // Generate each certificate
    for (let i = 0; i < recipients.length; i++) {
      const recipient = recipients[i]

      onProgress({
        total: recipients.length,
        current: i + 1,
        status: 'processing',
        currentName: recipient.name
      })

      await renderCertificate(
        this.canvas,
        this.ctx,
        template,
        textElements,
        imageElements,
        recipient,
        loadedImages
      )

      // Convert to blob and add to ZIP
      const blob = await new Promise<Blob>((resolve) => {
        this.canvas.toBlob((blob) => resolve(blob!), 'image/png')
      })

      const fileName = `${recipient.name.replace(/[^a-z0-9]/gi, '_')}.png`
      folder?.file(fileName, blob)
    }

    onProgress({
      total: recipients.length,
      current: recipients.length,
      status: 'processing',
      currentName: 'Creating ZIP file...'
    })

    // Generate and download ZIP
    const content = await zip.generateAsync({ type: 'blob' })
    saveAs(content, `certificates_${new Date().toISOString().split('T')[0]}.zip`)

    onProgress({
      total: recipients.length,
      current: recipients.length,
      status: 'complete'
    })
  }
}
