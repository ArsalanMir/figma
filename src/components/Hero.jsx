import React from "react";
import mainImage from "../assets/img1.png"

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 md:pr-8 z-10 text-left">
            <p className="text-emerald-500 font-bold mb-4">PLAN</p>
            <h1 className="text-3xl md:text-5xl font-bold text-yolearn-dark leading-tight mb-6">
              Your AI Teaching<br />Assistants Team
            </h1>
            <p className="text-emerald-400 text-xl mb-4">
              Smarter planning. Effortless teaching. Exponential impact.
            </p>
            <p className="text-gray-600 mb-8">
              Unlock the power of AI for personalized lesson planning, resource creation, classroom management, and student support — all in one intelligent workspace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#"
                className="bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-md font-medium"
              >
                Get started for free →
              </a>
              <a
                href="#"
                className="border border-emerald-500 text-emerald-500 hover:bg-emerald-50 py-4 px-6 rounded-md font-medium"
              >
                Explore Now
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative w-fit mx-auto">
              <img
                src={mainImage}
                alt="Teacher with AI assistant"
                className="rounded-full border-4 border-white shadow-xl"
                style={{
                  width: "350px",
                  height: "350px",
                  objectFit: "cover",
                }}
              />
              <div className="absolute top-0 left-1/4 -translate-x-1/2 bg-white rounded-full py-2 px-4 shadow-md flex items-center justify-start space-x-2 text-left">
                <span className="text-teal-500">🎨</span>
                <span className="text-yolearn-dark font-medium">Create</span>
              </div>

              <div className="absolute top-1/4 right-0 bg-white rounded-full py-2 px-4 shadow-md flex items-center justify-start space-x-2 text-left">
                <span className="text-teal-500">📝</span>
                <span className="text-yolearn-dark font-medium">Manage</span>
              </div>

              <div className="absolute top-1/2 left-0 -translate-x-1/2 bg-white rounded-full py-2 px-4 shadow-md flex items-center justify-start space-x-2 text-left">
                <span className="text-teal-500">🎯</span>
                <span className="text-yolearn-dark font-medium">Design</span>
              </div>

              <div className="absolute bottom-1/4 right-0 translate-x-1/4 bg-white rounded-full py-2 px-4 shadow-md flex items-center justify-start space-x-2 text-left">
                <span className="text-teal-500">🌱</span>
                <span className="text-yolearn-dark font-medium">Grow</span>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 bg-white rounded-full py-2 px-4 shadow-md flex items-center justify-start space-x-2 text-left">
                <span className="text-teal-500">💰</span>
                <span className="text-yolearn-dark font-medium">Earn</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-emerald-400"
        style={{
          borderTopLeftRadius: "50% 80%",
          borderTopRightRadius: "50% 80%",
          transform: "scale(1.2, 0.6) translateY(50%)",
        }}
      ></div>
    </section>
  )
}

export default Hero;
