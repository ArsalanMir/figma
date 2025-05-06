import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-2">
              <span className="text-white">Y</span>
              <span className="text-teal-400">o</span>
              <span className="text-white">learn.ai</span>
            </div>
            <p className="text-blue-200 mb-4">
              Empowering Learning with AI – For Students, Teachers & Institutions
            </p>
            <p className="text-blue-200 text-sm mb-6">
              Yolearn.ai is an AI-powered learning platform designed to enhance education for students,
              teachers, and institutions across the globe. From personalized AI tutors to school-wide
              curriculum tools – Yolearn makes education smarter and more accessible.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-teal-300 text-sm">
                <span className="mr-2">✓</span> ISO Certified
              </div>
              <div className="flex items-center text-teal-300 text-sm">
                <span className="mr-2">✓</span> NEP-Aligned
              </div>
              <div className="flex items-center text-teal-300 text-sm">
                <span className="mr-2">✓</span> Data Privacy Compliant
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sitemap</h3>
            <ul className="space-y-3 text-blue-200">
              {['Tools', 'Studios', 'Assistants'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-blue-200">
              {['About', 'Career', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3 text-blue-200">
              {['Terms & conditions', 'Privacy Policy', 'Data Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Socials</h3>
            <ul className="space-y-3 text-blue-200">
              {['X (Twitter)', 'LinkedIn', 'YouTube', 'WhatsApp Channel'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* "For Students" */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Students</h3>
            <ul className="space-y-3 text-blue-200">
              {['For Teachers', 'For Schools', 'For Organizations', 'Resources', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mb-6"></div>

        {/* Bottom section  */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0 text-center md:text-left">
            All educational content, AI tutors, and institutional tools are intended for learners of
            appropriate age groups and verified educator use. Yolearn.ai follows national and
            international education safety standards.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a href="#" className="text-blue-300 hover:text-white text-sm">
              Terms of Use
            </a>
            <span className="text-blue-700">|</span>
            <a href="#" className="text-blue-300 hover:text-white text-sm">
              Cookie Policy
            </a>
            <span className="text-blue-700">|</span>
            <a href="#" className="text-blue-300 hover:text-white text-sm">
              Contact Us
            </a>
            <span className="text-blue-700">|</span>
            <a href="#" className="text-blue-300 hover:text-white text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-blue-300 text-sm">
          © 2025 AI.Yolearn Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
