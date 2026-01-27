'use client'

import { Plus, Type, Image as ImageIcon } from 'lucide-react'
import { TextElement } from '@/types/certificates'

interface TextControlsProps {
  element: TextElement
  onUpdate: (updates: Partial<TextElement>) => void
}

export default function TextControls({ element, onUpdate }: TextControlsProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700 font-metropolis mb-2">
          Text Content
        </label>
        <input
          type="text"
          value={element.text}
          onChange={(e) => onUpdate({ text: e.target.value })}
          placeholder="Use {{name}}, {{title}}, {{date}}"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-umak-blue font-metropolis text-sm"
        />
        <p className="text-xs text-gray-500 font-metropolis mt-1">
          Placeholders: {`{{name}}, {{title}}, {{date}}, {{email}}`}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-bold text-gray-700 font-metropolis mb-2">
            Font Size
          </label>
          <input
            type="number"
            value={element.fontSize}
            onChange={(e) => onUpdate({ fontSize: parseInt(e.target.value) })}
            min={12}
            max={200}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-umak-blue font-metropolis text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 font-metropolis mb-2">
            Color
          </label>
          <input
            type="color"
            value={element.color}
            onChange={(e) => onUpdate({ color: e.target.value })}
            className="w-full h-10 border-2 border-gray-300 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 font-metropolis mb-2">
          Font Family
        </label>
        <select
          value={element.fontFamily}
          onChange={(e) => onUpdate({ fontFamily: e.target.value })}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-umak-blue font-metropolis text-sm"
        >
          <option value="Georgia">Georgia</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-bold text-gray-700 font-metropolis mb-2">
            Weight
          </label>
          <select
            value={element.fontWeight}
            onChange={(e) => onUpdate({ fontWeight: e.target.value as 'normal' | 'bold' })}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-umak-blue font-metropolis text-sm"
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 font-metropolis mb-2">
            Align
          </label>
          <select
            value={element.textAlign}
            onChange={(e) => onUpdate({ textAlign: e.target.value as 'left' | 'center' | 'right' })}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-umak-blue font-metropolis text-sm"
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>
    </div>
  )
}
