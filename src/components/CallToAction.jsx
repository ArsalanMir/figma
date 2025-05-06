import { useState } from 'react'
import aiBackground from '../assets/Aiimage.jpg'

const CallToAction = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative text-white py-16 md:py-24 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-green-300 bg-gradient-to-r from-green-300/90 to-blue-900/90"
        style={{
          backgroundImage: `url(${aiBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.8)'
        }}
      ></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center"> {/* Centered container */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Join The Yovolution
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Ready to Teach Smarter?
          </p>
          <button 
            className={`bg-green-700 text-white rounded-md font-semibold px-6 py-3 text-lg transition-all duration-300 ${
              isHovered ? 'bg-blue-50 transform -translate-y-1 shadow-lg' : 'shadow-md'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Start Now with Your AI Assistant →
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction;