import { RequestType, FormData } from './types'

// =============================================================================
// CONSTANTS
// =============================================================================

export const REQUEST_TYPES: RequestType[] = [
  { 
    id: 'design', 
    label: 'Design Services', 
    description: 'Visual materials for your project or event. Graphic design and layout for logos, publication covers, posters, tarpaulins, plaques, medals, and related materials.',
    number: '01',
    subtypes: ['Graphic Design', 'Logos & Branding', 'Posters & Tarpaulins', 'Publication Covers', 'Plaques & Medals'],
    bgColor: 'bg-blue-50'
  },
  { 
    id: 'video', 
    label: 'Video Services', 
    description: 'Support for recording video messages and other university-related video content.',
    number: '02',
    subtypes: ['Video Recording', 'Video Messages', 'Video Editing'],
    bgColor: 'bg-white'
  },
  { 
    id: 'coverage', 
    label: 'Event Coverage', 
    description: 'Photo documentation and basic coverage for university events and activities.',
    number: '03',
    subtypes: ['Photography', 'Event Documentation', 'Photo Editing'],
    bgColor: 'bg-yellow-50'
  },
  { 
    id: 'social-media', 
    label: 'Social Media Support', 
    description: 'Posting publicly available, university-wide announcements, congratulatory messages, and similar content on official platforms.',
    number: '04',
    subtypes: ['Announcements', 'Congratulatory Messages', 'Content Posting'],
    bgColor: 'bg-white'
  },
  { 
    id: 'branding', 
    label: 'Branding Consultation', 
    description: 'Guidance to ensure your creative materials align with University brand guidelines before production or release.',
    number: '05',
    subtypes: ['Brand Review', 'Guidelines Compliance', 'Material Approval'],
    bgColor: 'bg-blue-50'
  },
  { 
    id: 'website', 
    label: 'Website Content Update', 
    description: 'Request new website entries or updates to existing pages for your office or unit.',
    number: '06',
    subtypes: ['New Entry', 'Page Updates', 'Content Management'],
    bgColor: 'bg-white'
  },
  { 
    id: 'livestream', 
    label: 'Livestreaming Services', 
    description: 'Livestreaming support for university events. Note: Currently on hold while guidelines are being updated.',
    number: '07',
    subtypes: ['Event Livestreaming', 'Technical Support'],
    bgColor: 'bg-orange-50'
  }
]

export const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  department: '',
  requestDetails: '',
  deadline: '',
  priority: 'Medium'
}
