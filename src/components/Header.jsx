import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-yolearn-dark flex items-center">
          <span className="text-yolearn-blue">Y</span>
          <span className="text-emerald-500">o</span>
          Learn.ai
        </a>

        <div className="hidden md:flex items-center flex-1 justify-center space-x-10">
          <a href="#" className="font-medium text-gray-700 hover:text-yolearn-blue">For Teachers</a>
          <a href="#" className="font-medium text-gray-700 hover:text-yolearn-blue">Resources</a>
          <a href="#" className="font-medium text-gray-700 hover:text-yolearn-blue">About Us</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-green-400 font-medium hover:underline">Login</a>
          <a 
            href="#" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-md font-medium px-4 py-2"
          >
            Get started for free →
          </a>
        </div>

        {/* for Mobiles */}
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
  )
}

export default Header;
