import React, { useState } from "react";
import { Check, X } from "lucide-react";
import teachers from "../assets/techers.png";

const PricingSection = () => {
  const [selectedRegion, setSelectedRegion] = useState("Global");

  return (
    <section className="py-16 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-black mb-4">
            Teach Better. Less Effort.
            <br /> More Impact.
          </h2>
          <p className="text-emerald-500 mb-8">
            Join thousands of educators across who enhance their <br/>teaching with AI-powered tools on YoLearn.
          </p>
          <div className="flex justify-center mb-8">
            <img
              src={teachers}
              alt="Group of teachers using YoLearn"
              className="w-full max-w-lg rounded-xl shadow-lg object-cover"
            />
          </div>
          <p className="text-gray-600">
            Educators across subjects and languages are streamlining planning, instruction, and assessment with YoLearn.
          </p>
        </div>

        {/* Region Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-gray-200 rounded-full p-1 inline-flex shadow-sm w-full max-w-xs">
            {["Global", "India"].map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-10 py-2 rounded-full text-sm font-medium transition flex-1 ${
                  selectedRegion === region
                    ? "bg-teal-500 text-white shadow"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl justify-center">
          {/* Basic Plan */}
          <PlanCard
            title="Basic Plan"
            description="Teachers exploring the platform or with minimal usage needs."
            price="FREE"
            features={[
              { text: "Resource Hub (Limited)", included: true },
              { text: "Teaching Studio", included: true },
              { text: "Content Lab", included: false },
              { text: "Command desk", included: false },
              { text: "Growth Hub", included: false },
              { text: "Avatar Hub", included: false },
              { text: "5 images/month, 5 min video", included: true },
              { text: "10x/5 lesson plans & quizzes/month", included: false },
              { text: "No content report", included: false },
            ]}
          />

          {/* Pro Plan */}
          <PlanCard
            title="Pro Plan"
            description="Subject teachers managing weekly content needs for their classes"
            price="$5/month or $50/year"
            features={[
              { text: "Planning Studio", included: true },
              { text: "Teaching Studio", included: true },
              { text: "Content Lab", included: false },
              { text: "Command desk", included: false },
              { text: "Growth Hub", included: false },
              { text: "Avatar Hub", included: false },
              { text: "20 images/month, 5 min video", included: true },
              { text: "Addon: $1 per 10 extra images, $2 per extra video minute", included: true },
            ]}
          />

          {/* Master Plan */}
          <PlanCard
            title="Master Plan"
            description="Full-departmental teachers using AI extensively"
            price="$10/month or $100/year"
            subtext="or $300/year"
            features={[
              { text: "Planning Studio", included: true },
              { text: "Teaching Studio", included: true },
              { text: "Content Lab", included: true },
              { text: "Command desk", included: true },
              { text: "Growth Hub", included: true },
              { text: "Avatar Hub", included: true },
              { text: "60 images/month, 15 min video", included: true },
              { text: "Addon: $1 per 10 extra images, $2 per extra video minute", included: true },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({ title, description, price, subtext, features }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-teal-300 hover:-translate-y-1 flex flex-col h-full">
    <div className="p-6 flex flex-col flex-grow">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-black text-sm">{description}</p>
      </div>

      <div className="my-5 py-4 border-t border-b border-gray-100">
        <p className="text-2xl font-bold text-black">{price}</p>
        {subtext && <p className="text-gray-400 text-sm">{subtext}</p>}
      </div>

      <ul className="space-y-3 mb-6 flex-grow">
        {features.map(({ text, included }, index) => (
          <li key={index} className="flex items-start">
            {included ? (
              <Check className="h-4 w-4 mr-3 mb-2 text-green-500 mt-0.5 flex-shrink-0" />
            ) : (
              <X className="h-4 w-4 mr-3 mb-2 text-red-500 mt-0.5 flex-shrink-0" />
            )}
            <span className={`text-sm ${included ? "text-gray-700" : "text-gray-400"}`}>{text}</span>
          </li>
        ))}
      </ul>

      <button className="w-full py-3 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600 transition text-sm mt-auto">
        See Plan
      </button>
    </div>
  </div>
);

export default PricingSection;
