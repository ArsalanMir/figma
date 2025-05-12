import React from 'react';
import Aibackground from "../../assets/Aiimage.jpg";

const CallToAction = () => {
  return (
    <section
      className="relative h-[50vh] w-full flex items-center justify-center bg-cover bg-no-repeat"
      style={{ 
        backgroundImage: `url(${Aibackground})`,
        backgroundPosition: 'center 10%',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-transparent flex flex-col justify-center items-center text-white text-center p-5 h-full w-full">
        <div className="w-full max-w-9xl px-4">
          <h1 className="text-4xl font-bold mb-2 text-white md:text-5xl sm:text-3xl">
            Join The Yovoluton
          </h1>
          <p className="text-xl font-light mb-6 md:text-2xl sm:text-lg">
            Ready to Teach Smarter?
          </p>
          <button className="bg-teal-800 text-white border-none px-7 py-3 rounded-md font-light text-lg cursor-pointer transition-colors duration-300 inline-block text-center mx-auto hover:bg-teal-100 hover:text-teal-900 md:px-7 md:py-4 sm:px-6 sm:py-3 xs:px-5 xs:py-2 xs:text-base">
            Start Now with Your AI Assistant →
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction;