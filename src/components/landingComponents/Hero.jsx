import React from "react";
import mainImage from "../../assets/img1.png";
import { ArrowRight, Check } from "lucide-react";
import curve1 from "../../assets/curve1.svg";
import curve2 from "../../assets/curve2.svg";

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
  const benefits = [
    {
      icon: "⏱️",
      title: "Save time across lesson prep, content, communication",
    },
    {
      icon: "📚",
      title: "Improve instructional quality with research-aligned templates",
    },
    { icon: "🧠", title: "Create engaging, differentiated content in minutes" },
    { icon: "👥", title: "Multiply your presence with a co-teacher avatar" },
    { icon: "📊", title: "Get actionable analytics + smart student reports" },
    { icon: "💬", title: "Better emotional connection with students" },
    {
      icon: "🧰",
      title: "All-in-one toolset: planner, designer, communicator",
    },
    { icon: "🌐", title: "Available 24/7, from any device" },
  ];

  const features = [
    "Works in your language",
    "Save hours every week",
    "School-ready",
    "Student-safe",
    "Aligned to global curriculum",
    "No training needed",
    "Works in all subjects",
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

            {/* Right Column */}
            <div className="relative w-[350px] h-[350px] mx-auto flex items-center justify-center">
              {/* Main Image (no z-10, keeps it behind) */}
              <img
                src={mainImage}
                alt="Teacher with AI assistant"
                className="rounded-full border-4 border-white shadow-xl w-[350px] h-[350px] object-cover"
              />

              {/* Rotating Icon Layer - z-10 to keep above image */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="w-full h-full relative animate-spin-slow">
                  {[
                    { angle: 0, icon: "🎨", label: "Create" },
                    { angle: 72, icon: "📝", label: "Manage" },
                    { angle: 144, icon: "🎯", label: "Design" },
                    { angle: 216, icon: "🌱", label: "Grow" },
                    { angle: 288, icon: "💰", label: "Earn" },
                  ].map((item, index) => {
                    const radius = 190;
                    const angleRad = (item.angle * Math.PI) / 180;
                    const x = radius * Math.cos(angleRad);
                    const y = radius * Math.sin(angleRad);
                    return (
                      <div
                        key={index}
                        className="absolute"
                        style={{
                          top: `calc(50% + ${y}px)`,
                          left: `calc(50% + ${x}px)`,
                          transform: `translate(-50%, -50%) rotate(-${item.angle}deg)`, // counter-rotate text
                        }}
                      >
                        <div className="bg-white rounded-full py-1.5 px-3 shadow-md flex items-center space-x-2">
                          <span className="text-teal-500 text-sm">
                            {item.icon}
                          </span>
                          <span className="text-yolearn-dark text-sm font-medium">
                            {item.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curve Image Background */}
        <div className="relative z-0 mt-[-80px]">
          <img
            src={curve1}
            alt="Wave Curve 1"
            className="w-full object-cover"
          />

          {/* Feature + Tag */}
          <div className="absolute inset-0 flex flex-col justify-end items-center px-4 sm:px-8 pb-10 text-black max-w-7xl mx-auto">
            <div className="w-full max-w-5xl text-center mb-8 px-2 sm:px-0 mx-auto">
              {/* Title & Subtitle */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 leading-tight">
                Built for Teachers. Powered by AI. Trusted by Schools.
              </h2>
              <p className="text-xs sm:text-sm md:text-base mb-6 leading-relaxed">
                Any Country, Any curriculum/board, Any Language – Global
                Platform – Localized solution
              </p>

              {/* Top Icons Row - single line scrollable */}
              <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent whitespace-nowrap justify-center gap-4 px-2 mb-4">
                {[
                  { icon: "🌐", label: "Global Platform" },
                  { icon: "💬", label: "Localized Content for Every Region" },
                  { icon: "🧑‍🏫", label: "K–12 Coverage" },
                  { icon: "📚", label: "All Major Curriculums" },
                  { icon: "🌍", label: "Multilingual Support" },
                ].map((item, index) => (
                  <span
                    key={index}
                    className="bg-white text-black text-xs sm:text-sm font-medium px-3 py-1 rounded-full shadow-sm inline-flex items-center space-x-2 min-w-max"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>

              {/* Bottom Features Row - single line scrollable */}
              <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent whitespace-nowrap justify-center gap-6 px-2 text-xs sm:text-sm md:text-sm">
                {[
                  "Works in your language",
                  "Save hours every week",
                  "School-ready",
                  "Student-safe",
                  "Aligned to global curriculum",
                  "No training needed",
                ].map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center space-x-1 min-w-max whitespace-normal sm:whitespace-nowrap"
                  >
                    <span>✔️</span>
                    <span>{feature}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace Section */}
      <section className="relative bg-[#71D9E2] py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Your AI-Powered Teaching Workspaces
          </h2>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workspaces.map((workspace, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-start justify-between hover:shadow-lg transform transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={workspace.image}
                  alt={workspace.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {workspace.title}
                </h3>
                <p className="text-sm text-gray-600">{workspace.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Plan Workspace →
            </button>
          </div>
        </div>

        {/* Bottom SVG */}
        <img
          src={curve2}
          alt="Wave Curve 2"
          className="w-full z-0 relative top-17"
        />
      </section>

      {/* Why teacher love */}

      <section className="bg-[#66DDAA] py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yolearn-dark mb-4">
            Why Teachers <span className="text-red-500">❤️</span> YoLearn.ai
          </h2>
          <p className="text-center text-gray-800 mb-10 max-w-3xl mx-auto">
            Explore the AI-powered tools that simplify your day, spark
            engagement, and save hours of effort.
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-white/80 px-4 py-2 rounded-full text-sm shadow-sm"
              >
                <Check className="h-4 w-4 mr-2 text-green-600" />
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>

          {/* Benefit Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/90 shadow-md rounded-xl p-6 hover:shadow-lg transition duration-200"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <p className="text-gray-800 font-medium">{benefit.title}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}

          <div className="mt-16 flex justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold px-8 py-4 text-lg">
              Get started for free →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
