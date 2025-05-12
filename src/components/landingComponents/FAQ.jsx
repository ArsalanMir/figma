import { useState } from "react";
import Standing from "../../assets/teacher.jpg";

function FAQ() {
  const [activeId, setActiveId] = useState(null);
  const toggleFaq = (id) => setActiveId(activeId === id ? null : id);

  const faqSections = {
    "Workspaces & Tools": [
      {
        id: 1,
        question: "What's the difference between Plan and Design workspaces?",
        answer:
          "The Plan Workspace helps you map your academic year, curriculum, and weekly teaching flow. The Design Workspace lets you create specific assignments like quizzes, homework, and worksheets using your AI Teaching Assistant.",
      },
      {
        id: 2,
        question: "How do I use the Lesson Planner?",
        answer:
          "The Lesson Planner helps you organize and structure your lessons effectively.",
      },
      {
        id: 3,
        question: "Can I reuse content across multiple classes?",
        answer:
          "Yes, you can easily share and reuse content between different classes.",
      },
    ],
    "Pricing & Payments": [
      {
        id: 4,
        question: "Is YoLearn.ai free for teachers?",
        answer:
          "Currently, YoLearn.ai offers both free and paid plans depending on feature access.",
      },
      {
        id: 5,
        question: "What's included in each subscription tier?",
        answer:
          "Each tier includes different levels of AI support, lesson planning tools, and collaboration features.",
      },
      {
        id: 6,
        question: "Can my school pay for my access?",
        answer:
          "Yes, schools can sponsor teacher access through institutional plans.",
      },
    ],
    "Curriculum & Pedagogy": [
      {
        id: 7,
        question: "Is content aligned with my curriculum, board and standards?",
        answer:
          "Yes, content is designed to be customizable and standards‑aligned.",
      },
      {
        id: 8,
        question:
          "Can I customize output based on grade level and learning styles?",
        answer:
          "Yes, the AI adapts content based on grade levels and preferred instructional approaches.",
      },
      {
        id: 9,
        question: "How does the AI support differentiated instruction?",
        answer:
          "AI offers personalized recommendations, scaffolding options, and pacing controls for diverse learners.",
      },
    ],
  };

  return (
    <div className="bg-blue-600 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-start mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100">
            Find answers to common questions about YoLearn.ai
          </p>
        </div>

        {/* Content Section */}
        <div className="relative flex flex-col lg:flex-row max-w-7xl mx-auto px-6 pb-12">
          {/* Left: Image */}
          <div className="hidden lg:block lg:w-1/3 pr-6">
            <img
              src={Standing}
              alt="Teacher standing"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right: FAQ Section */}
          <div className="flex-1">
            {Object.entries(faqSections).map(([section, items]) => (
              <div key={section} className="mb-12 max-w-2xl mx-auto">
                {/* Section Heading aligned with card and no borders */}
                <h2 className="text-2xl font-bold text-white mb-4">{section}</h2>

                {/* FAQ Card */}
                <div className="bg-white rounded-xl shadow-md p-4 transition-all duration-300">
                  {items.map((item, index) => (
                    <div key={item.id}>
                      <div
                        className="py-4 cursor-pointer"
                        onClick={() => toggleFaq(item.id)}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="m-0 text-lg font-semibold text-gray-800">
                            {item.question}
                          </h3>
                          <button
                            className={`w-12 h-6 rounded-full relative border-none cursor-pointer transition-colors duration-300 ${
                              activeId === item.id
                                ? "bg-green-500"
                                : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-all duration-300 ${
                                activeId === item.id
                                  ? "left-[26px]"
                                  : "left-0.5"
                              }`}
                            ></span>
                          </button>
                        </div>
                        {activeId === item.id && (
                          <div className="mt-3 px-1 text-gray-700 text-base">
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </div>

                      {/* HR between items except after the last one */}
                      {index < items.length - 1 && <hr className="border-gray-200" />}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View All FAQ Button */}
          <button className="absolute bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg shadow-lg text-sm">
            View All FAQ →
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
