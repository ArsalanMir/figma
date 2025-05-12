import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-yolearn-dark flex items-center">
          <span className="text-yolearn-blue">Y</span>
          <span className="text-emerald-500">o</span>
          Learn.ai
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center flex-1 justify-center space-x-10">
          {/* For Teachers Dropdown */}
          <div className="relative group">
            <a href="#" className="font-medium text-black hover:text-yolearn-blue flex items-center space-x-1">
              <span>For Teachers</span>
              <svg className="w-4 h-4 transform transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-10">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Teacher Dashboard</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Lesson Plans</a>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <a href="#" className="font-medium text-black hover:text-yolearn-blue flex items-center space-x-1">
              <span>Resources</span>
              <svg className="w-4 h-4 transform transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-10">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">eBooks</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tutorials</a>
            </div>
          </div>

          {/* About Us Dropdown */}
          <div className="relative group">
            <a href="#" className="font-medium text-black hover:text-yolearn-blue flex items-center space-x-1">
              <span>About Us</span>
              <svg className="w-4 h-4 transform transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-10">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Careers</a>
            </div>
          </div>
        </div>

        {/* Login & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-green-400 font-medium hover:underline">Login</a>
          <a 
            href="#" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-md font-medium px-4 py-2"
          >
            Get started for free →
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden flex items-center"
          aria-label="Toggle Menu"
        >
          <svg 
            className="w-6 h-6 text-gray-800" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-gray-50 border-t">
          <nav className="flex flex-col space-y-3">
            <a href="#" className="font-medium text-gray-700 hover:text-yolearn-blue">For Teachers</a>
            <a href="#" className="font-medium text-gray-700 hover:text-yolearn-blue">Resources</a>
            <a href="#" className="font-medium text-gray-700 hover:text-yolearn-blue">About Us</a>
            <a href="#" className="text-yolearn-blue font-medium">Login</a>
            <a 
              href="#" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-md font-medium text-center py-2"
            >
              Get started for free →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
