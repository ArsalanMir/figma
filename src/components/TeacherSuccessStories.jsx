import React from "react";
import Image from '../assets/bgimage.jpg';
// import EmilyImg from '../assets/emily.jpg'; 
// import DavidImg from '../assets/david.jpg';
// import FatimaImg from '../assets/fatima.jpg';

const TeacherSuccessStories = () => {
  return (
    <section 
      className="py-16 relative"
      style={{
        background: `linear-gradient(rgba(0, 119, 182, 0.9), rgba(0, 119, 182, 0.9)), url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundAttachment removed for normal scrolling behavior
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0077B6] opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Teacher Success Stories
          </h2>
          <p className="text-lg text-white opacity-90 max-w-2xl mx-auto">
            Discover how educators around the world are transforming<br/> their classrooms with YoLearn.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img 
                src="" 
                alt="Emily Zhang"
                className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100 mr-4"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-800">Ms. Emily Zhang</h3>
                <p className="text-gray-600 text-sm">Onsite Curriculum</p>
                <p className="text-gray-500 text-xs">High School Teacher — Canada</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Integrating YoLearn into my classroom has been a game-changer. It provides tailored resources that cater to each student's needs."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img 
                src="" 
                alt="David Ncube"
                className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100 mr-4"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-800">Mr. David Ncube</h3>
                <p className="text-gray-600 text-sm">CARS Curriculum</p>
                <p className="text-gray-500 text-xs">Middle School Teacher — South Africa</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "YoLearn's AI tutor supports my teaching by offering additional explanations and practice for students, enhancing their understanding."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img 
                src="" 
                alt="Fatima Al-Mansouri"
                className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100 mr-4"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-800">Mrs. Fatima Al-Mansouri</h3>
                <p className="text-gray-600 text-sm">Brian Curriculum</p>
                <p className="text-gray-500 text-xs">Elementary Teacher - UAE</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "The platform's interactive tools and multilingual support have made it easier to engage my diverse classroom effectively."
            </p>
          </div>
        </div>

    {/* Achievements Section */}
<div className="text-center">
  <h3 className="text-4xl font-bold text-white mb-8">What We've Achieved Together</h3>

  {/* First Row of Stats */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-6 justify-items-center">
    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30 min-h-[150px] w-[230px] flex flex-col justify-center items-center">
      <p className="text-3xl font-bold text-emerald-500 mb-2">240,000+</p>
      <p className="text-black text-opacity-90">Lessons Created</p>
    </div>
    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30 min-h-[150px] w-[230px] flex flex-col justify-center items-center">
      <p className="text-3xl font-bold text-emerald-500 mb-2">1,200,000+</p>
      <p className="text-black text-opacity-90">Teacher Hours Saved</p>
    </div>
    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30 min-h-[150px] w-[230px] flex flex-col justify-center items-center">
      <p className="text-3xl font-bold text-emerald-500 mb-2">3,500+</p>
      <p className="text-black text-opacity-90">Schools Onboarded</p>
    </div>
  </div>

  {/* Second Row of Stats */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-6 justify-items-center">
    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30 min-h-[150px] w-[230px] flex flex-col justify-center items-center">
      <p className="text-3xl font-bold text-emerald-500 mb-2">52,000+</p>
      <p className="text-black text-opacity-90">AI Companions Deployed</p>
    </div>
    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30 min-h-[150px] w-[230px] flex flex-col justify-center items-center">
      <p className="text-3xl font-bold text-emerald-500 mb-2">95%</p>
      <p className="text-black text-opacity-90">Academic Improvement</p>
    </div>
    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30 min-h-[150px] w-[230px] flex flex-col justify-center items-center">
      <p className="text-3xl font-bold text-emerald-500 mb-2">93%</p>
      <p className="text-black text-opacity-90">Increased Engagement</p>
    </div>
  </div>
</div>



      </div>
    </section>
  );
};

export default TeacherSuccessStories;
