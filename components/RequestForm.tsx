'use client'

import React from 'react'
import { FormData, FormErrors } from '@/lib/types'
import FormField from './FormField'

interface RequestFormProps {
  formData: FormData
  errors: FormErrors
  isSubmitting: boolean
  onInputChange: (name: keyof FormData, value: string) => void
  onSubmit: (e: React.FormEvent) => void
  onCancel: () => void
}

export default function RequestForm({
  formData,
  errors,
  isSubmitting,
  onInputChange,
  onSubmit,
  onCancel
}: RequestFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-8 sm:space-y-10">
      {/* Personal Information Section */}
      <div>
        <h3 className="text-xl sm:text-2xl font-marcellus text-umak-blue mb-4 sm:mb-6 pb-3 border-b border-gray-200 leading-snug">
          Requestor Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <FormField
            label="Full Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(value) => onInputChange('name', value)}
            error={errors.name}
            required
            placeholder="Juan Dela Cruz"
          />

          <FormField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={(value) => onInputChange('email', value)}
            error={errors.email}
            required
            placeholder="juan.delacruz@umak.edu.ph"
          />

          <FormField
            label="Contact Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(value) => onInputChange('phone', value)}
            error={errors.phone}
            required
            placeholder="09XX XXX XXXX"
          />

          <FormField
            label="Department/Office"
            name="department"
            type="text"
            value={formData.department}
            onChange={(value) => onInputChange('department', value)}
            error={errors.department}
            required
            placeholder="e.g., College of Engineering"
          />
        </div>
      </div>

      {/* Request Details Section */}
      <div>
        <h3 className="text-xl sm:text-2xl font-marcellus text-umak-blue mb-4 sm:mb-6 pb-3 border-b border-gray-200 leading-snug">
          Request Details
        </h3>
        <FormField
          label="Detailed Description"
          name="requestDetails"
          type="textarea"
          value={formData.requestDetails}
          onChange={(value) => onInputChange('requestDetails', value)}
          error={errors.requestDetails}
          required
          rows={6}
          placeholder="Please provide comprehensive details about your request, including specific requirements, dimensions, format preferences, and any other relevant information..."
        />
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs sm:text-sm text-gray-500 font-metropolis">
            {errors.requestDetails ? (
              <span className="text-red-500">{errors.requestDetails}</span>
            ) : (
              `${formData.requestDetails.length}/1000 characters (min. 50)`
            )}
          </p>
        </div>
      </div>

      {/* Timeline & Priority Section */}
      <div>
        <h3 className="text-xl sm:text-2xl font-marcellus text-umak-blue mb-4 sm:mb-6 pb-3 border-b border-gray-200 leading-snug">
          Timeline & Priority
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <FormField
            label="Target Deadline"
            name="deadline"
            type="date"
            value={formData.deadline}
            onChange={(value) => onInputChange('deadline', value)}
            error={errors.deadline}
            required
            min={new Date().toISOString().split('T')[0]}
            helpText="Standard processing time is 5-7 business days"
          />

          <FormField
            label="Priority Level"
            name="priority"
            type="select"
            value={formData.priority}
            onChange={(value) => onInputChange('priority', value as 'Low' | 'Medium' | 'High')}
            required
            options={[
              { value: 'Low', label: 'Low Priority - Flexible timeline (1-2 weeks)' },
              { value: 'Medium', label: 'Medium Priority - Standard processing (5-7 days)' },
              { value: 'High', label: 'High Priority - Urgent request (2-3 days)' }
            ]}
          />
        </div>
      </div>

      {/* File Upload Section */}
      <div>
        <h3 className="text-xl sm:text-2xl font-marcellus text-umak-blue mb-4 sm:mb-6 pb-3 border-b border-gray-200 leading-snug">
          Supporting Documents
        </h3>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-2 sm:mb-3 font-metropolis uppercase tracking-widest">
            Attach Files (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-8 sm:p-12 text-center hover:border-umak-blue hover:bg-blue-50 transition-all cursor-pointer">
            <div className="text-gray-400 mb-3 sm:mb-4">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-gray-700 font-metropolis font-medium mb-2 text-sm sm:text-base">
              Click to browse or drag and drop files here
            </p>
            <p className="text-xs sm:text-sm text-gray-500 font-metropolis font-normal">
              Supported formats: PDF, DOC, DOCX, JPG, PNG • Maximum file size: 10MB
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center pt-6 sm:pt-8 border-t-2 border-gray-100 gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-600 rounded-md hover:bg-gray-50 transition-all font-metropolis font-semibold text-xs uppercase tracking-widest order-2 sm:order-1"
        >
          Cancel Request
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 sm:px-12 py-3 sm:py-4 bg-umak-blue text-white rounded-md hover:bg-umak-blue-2 transition-all font-metropolis font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit Request'
          )}
        </button>
      </div>
    </form>
  )
}
