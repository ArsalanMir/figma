import React from "react";
import mainImage from "../assets/img1.png";
import { ArrowRight } from "lucide-react";

const WorkspaceCard = ({ icon, title, description, features, type }) => {
  const getIconColor = () => {
    const colors = {
      grow: "text-green-500",
      design: "text-blue-500",
      create: "text-purple-500",
      manage: "text-indigo-500",
      earn: "text-emerald-500",
      reflect: "text-yellow-500",
    };
    return colors[type] || "text-teal-500";
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-2xl ${getIconColor()}`}>{icon}</span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <span className="mr-2 font-bold">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 space-y-1">
        <button
          type="button"
          className="flex items-center text-teal-600 hover:underline text-sm font-medium"
        >
          Explore Workspace <ArrowRight className="h-4 w-4 ml-1" />
        </button>
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          See features
        </button>
      </div>
    </div>
  );
};

const Hero = () => {
  const workspaces = [
    {
      icon: "🌱",
      title: "Grow",
      description: "Everything you need to plan smarter",
      features: ["Curriculum Mapper", "Calendar Planner"],
      type: "grow",
    },
    {
      icon: "🎨",
      title: "Design",
      description: "Tools to help you design engaging learning",
      features: ["Lesson Planner", "Quiz Builder"],
      type: "design",
    },
    {
      icon: "✏️",
      title: "Create",
      description: "Turn ideas into educational resources",
      features: ["Worksheet Generator", "Slideshow Builder"],
      type: "create",
    },
    {
      icon: "📊",
      title: "Manage",
      description: "Organize your class and gain insights",
      features: ["Completion Analytics", "Report Card Generator"],
      type: "manage",
    },
    {
      icon: "🔄",
      title: "Reflect",
      description: "Track personal progress and grow professionally",
      features: ["Self Assessment", "Certifications"],
      type: "reflect",
    },
    {
      icon: "💰",
      title: "Earn",
      description: "Share, scale, and monetize your expertise",
      features: ["Create your AI Co-teacher", "Teach at Scale"],
      type: "earn",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex flex-col bg-white">
        <div className="container mx-auto px-4 md:px-8 py-16 flex-1 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Column */}
            <div className="w-full md:w-1/2 max-w-md p-2">
              <p className="text-emerald-500 font-bold text-sm md:text-base">
                PLAN
              </p>
              <h1 className="text-2xl md:text-4xl font-bold text-yolearn-dark mt-2 leading-tight">
                Your AI Teaching <br /> Assistants Team
              </h1>
              <p className="text-emerald-400 text-sm md:text-base mt-4">
                Smarter planning. Effortless teaching. <br /> Exponential
                impact.
              </p>
              <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
                Unlock the power of AI for personalized lesson planning, <br />
                resource creation, classroom management, <br />
                and student support — all in one intelligent workspace.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href="#"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm py-2 px-4 rounded-md font-medium text-center"
                >
                  Get started →
                </a>
                <a
                  href="#"
                  className="border border-emerald-500 text-emerald-500 hover:bg-emerald-50 text-sm py-2 px-4 rounded-md font-medium text-center"
                >
                  Explore
                </a>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[350px] h-[350px]">
                <img
                  src={mainImage}
                  alt="Teacher with AI assistant"
                  className="rounded-full border-4 border-white shadow-xl w-full h-full object-cover"
                />
                {/* Floating labels */}
                {[
                  {
                    style: "top-[-10px] left-1/2 -translate-x-1/2",
                    icon: "🎨",
                    label: "Create",
                  },
                  {
                    style: "top-1/4 right-[-20px] translate-y-[-50%]",
                    icon: "📝",
                    label: "Manage",
                  },
                  {
                    style: "top-1/2 left-[-20px] -translate-y-1/2",
                    icon: "🎯",
                    label: "Design",
                  },
                  {
                    style: "bottom-1/4 right-[-20px] translate-y-[50%]",
                    icon: "🌱",
                    label: "Grow",
                  },
                  {
                    style: "bottom-[-10px] left-1/2 -translate-x-1/2",
                    icon: "💰",
                    label: "Earn",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`absolute ${item.style} bg-white rounded-full py-1.5 px-3 shadow-md flex items-center space-x-2`}
                  >
                    <span className="text-teal-500 text-sm">{item.icon}</span>
                    <span className="text-yolearn-dark text-sm font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave Background Section */}
        <div className="relative z-20">
          {/* Top Flipped Wave */}
          <div className="absolute top-0 left-0 right-0 z-0 w-full rotate-180">
            <svg
              className="w-full h-[250px] md:h-[400px]"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMax slice"
            >
              <path
                fill="#34d399"
                d="M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,192C1120,171,1280,213,1360,234.7L1440,256V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
              />
            </svg>
          </div>
          {/* Content Inside Wave */}
          <div className="relative z-10 px-4 sm:px-8 pt-32 pb-16 text-black max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Built for Teachers. Powered by AI. Trusted by Schools.
              </h2>
              <p className="text-sm md:text-base text-black">
                Any Country, Any curriculum/board, Any Language — Global
                Platform — Localized solution
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-wrap justify-center gap-10">
                {[
                  "Global Platform",
                  "Localized Content",
                  "K-12 Coverage",
                  "All Curriculums",
                  "Multilingual Support",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="bg-white bg-opacity-20 text-black text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-10 ">
                {[
                  "Works in Your Language",
                  "Save hours",
                  "School-ready",
                  "Student-safe",
                  "Global Curriculum",
                  "No Training",
                ].map((feature, index) => (
                  <span
                    key={index}
                    className="text-black text-xs font-normal px-3 py-1 "
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Workspace Section with Rounded Waves */}
<section className="relative bg-[#9EF0E9] py-16 overflow-hidden">
  {/* Top Seamless Wave */}
  <div className="absolute top-0 left-0 right-0 h-20 flex">
    {[...Array(4)].map((_, i) => (
      <svg
        key={`top-wave-${i}`}
        viewBox="0 0 360 80"
        className="h-full"
        style={{
          width: '25%',
          marginLeft: i === 0 ? 0 : 0, // No overlap needed
        }}
        preserveAspectRatio="none"
      >
        <path
          fill="#34d399"
          d="M0,30 
             C90,60 270,0 360,30 
             L360,0 L0,0 Z"
        />
      </svg>
    ))}
  </div>

  {/* Content Container */}
  <div className="container mx-auto px-4 md:px-8 relative z-10 pt-10">
    <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-12">
      Your AI-Powered Teaching Workspaces
    </h2>

    {/* Workspace Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {workspaces.map((workspace, index) => (
        <WorkspaceCard
          key={index}
          {...workspace}
          className="transform transition-transform hover:scale-105 duration-300"
        />
      ))}
    </div>

    {/* CTA Button */}
    <div className="mt-12 flex justify-center">
      <button
        type="button"
        className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
      >
        Explore Plan Workspace →
      </button>
    </div>
  </div>

  {/* Bottom Seamless Wave (Flipped) */}
  <div className="absolute bottom-0 left-0 right-0 h-20 flex rotate-180">
    {[...Array(4)].map((_, i) => (
      <svg
        key={`bottom-wave-${i}`}
        viewBox="0 0 360 80"
        className="h-full"
        style={{
          width: '25%',
          marginLeft: i === 0 ? 0 : 0,
        }}
        preserveAspectRatio="none"
      >
        <path
          fill="#34d399"
          d="M0,30 
             C90,60 270,0 360,30 
             L360,0 L0,0 Z"
        />
      </svg>
    ))}
  </div>
</section>


    </>
  );
};

export default Hero;
