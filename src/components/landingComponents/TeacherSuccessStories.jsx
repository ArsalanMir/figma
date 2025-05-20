import React from "react";
import Image from "../../assets/bgimage.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Ms. Emily Zhang",
    title: "Onsite Curriculum",
    location: "High School Teacher — Canada",
    quote:
      "Integrating YoLearn into my classroom has been a game-changer. It provides resources to each student's needs.",
    img: "", 
  },
  {
    name: "Mr. David Ncube",
    title: "CARS Curriculum",
    location: "Middle School Teacher — South Africa",
    quote:
      "YoLearn's AI tutor supports my teaching by offering additional explanations and practice for students.",
    img: "",
  },
  {
    name: "Mrs. Fatima Al-Mansouri",
    title: "Brian Curriculum",
    location: "Elementary Teacher - UAE",
    quote:
      "The platform's interactive tools have made it easier to engage my diverse classroom effectively.",
    img: "",
  },
  {
    name: "Mr. John Roberts",
    title: "Online Learning",
    location: "High School Teacher — USA",
    quote:
      "YoLearn transformed my online classroom into a more interactive and engaging environment. My students love it!",
    img: "",
  },
  {
    name: "Ms. Aisha Khan",
    title: "Blended Learning",
    location: "Secondary School Teacher — Pakistan",
    quote:
      "With YoLearn, I can track student progress efficiently and adjust lessons accordingly. It’s a powerful tool.",
    img: "",
  },
  {
    name: "Mr. Carlos Ramirez",
    title: "Custom Curriculum",
    location: "Primary Teacher — Mexico",
    quote:
      "I appreciate how YoLearn supports multilingual content, making learning inclusive for all my students.",
    img: "",
  },
];

const TeacherSuccessStories = () => {
  return (
    <section
      className="py-16 relative"
      style={{
        background: `linear-gradient(rgba(0, 119, 182, 0.9), rgba(0, 119, 182, 0.9)), url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
            Discover how educators around the world are transforming
            <br /> their classrooms with YoLearn.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 4000, // 4 seconds per slide
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100 mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {t.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{t.title}</p>
                    <p className="text-gray-500 text-xs">{t.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{t.quote}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Achievements Section */}
        <div className="text-center mt-20">
          <h3 className="text-4xl font-bold text-white mb-8">
            What We've Achieved Together
          </h3>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-6 justify-items-center">
            {[
              ["240,000+", "Lessons Created"],
              ["1,200,000+", "Teacher Hours Saved"],
              ["3,500+", "Schools Onboarded"],
              ["52,000+", "AI Companions Deployed"],
              ["95%", "Academic Improvement"],
              ["93%", "Increased Engagement"],
            ].map(([count, label], i) => (
              <div
                key={i}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-30 min-h-[150px] w-[230px] flex flex-col justify-center items-center"
              >
                <p className="text-3xl font-bold text-emerald-500 mb-2">
                  {count}
                </p>
                <p className="text-black text-opacity-90">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSuccessStories;
