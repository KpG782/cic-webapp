'use client'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <span className="text-xs font-metropolis font-bold text-umak-blue uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-marcellus text-umak-blue mb-8 leading-tight">
              Communication
              <br />
              & Information
              <br />
              Center
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-metropolis leading-relaxed">
              <p>
                The Center for Integrated Communications is the University's primary media and publications arm, implementing processes and policies that safeguard the UMak visual identity and brand.
              </p>
              <p>
                Working hand-in-hand with different units of the University and City Government of Makati, CIC facilitates, supports, and promotes university-wide initiatives and projects through professional creative services.
              </p>
              <p>
                Our core functions include content media management, visual identity and branding, facilitation of traditional and digital publications, involvement in university-wide initiatives, and visit management.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="https://bit.ly/UMakBrandKit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-umak-yellow text-umak-blue rounded-lg hover:bg-yellow-400 transition-all font-bold font-metropolis text-sm uppercase tracking-wider"
              >
                UMak Brand Resource Center
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-umak-blue to-blue-600 rounded-2xl p-8 h-48 flex items-center justify-center shadow-xl">
                  <div className="text-center text-white">
                    <div className="text-3xl font-marcellus mb-2">Fast</div>
                    <div className="text-xs font-metropolis uppercase tracking-wider opacity-80">
                      Processing
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-umak-yellow to-yellow-500 rounded-2xl p-8 h-64 flex items-center justify-center shadow-xl">
                  <div className="text-center text-umak-blue">
                    <div className="text-3xl font-marcellus mb-2">Secure</div>
                    <div className="text-xs font-metropolis uppercase tracking-wider opacity-80">
                      Platform
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-white border-2 border-umak-blue rounded-2xl p-8 h-64 flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-marcellus text-umak-blue mb-2">
                      Professional
                    </div>
                    <div className="text-xs font-metropolis text-gray-600 uppercase tracking-wider">
                      Quality
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 h-48 flex items-center justify-center shadow-xl">
                  <div className="text-center text-white">
                    <div className="text-3xl font-marcellus mb-2">Reliable</div>
                    <div className="text-xs font-metropolis uppercase tracking-wider opacity-80">
                      Service
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
