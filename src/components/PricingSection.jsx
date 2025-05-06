import React, { useState } from "react";
import { Check, X } from "lucide-react"
import teachers from '../assets/techers.png'

const PricingSection = () => {
  const pricingTiers = [
    {
      name: "Basic Plan",
      description: "Teachers exploring the platform or with minimal usage needs.",
      price: "FREE",
      period: "",
      features: [
        { name: "Resource Hub (Limited)", included: true },
        { name: "Teaching Studio", included: true },
        { name: "Content Lab", included: true },
        { name: "Command desk", included: true },
        { name: "Growth Hub", included: true },
        { name: "Avatar Hub", included: true },
        { name: "5 images/month, 5 min video", included: true },
        { name: "10x/5 lesson plans & quizzes/month", included: true },
        { name: "No content report", included: false },
      ],
    },
    {
      name: "Pro Plan",
      description: "Subject teachers managing weekly content needs for their classes",
      price: "$10/month",
      period: "or $100/year",
      features: [
        { name: "Planning Studio", included: true },
        { name: "Teaching Studio", included: true },
        { name: "Content Lab", included: true },
        { name: "Command desk", included: true },
        { name: "Growth Hub", included: true },
        { name: "Avatar Hub", included: true },
        { name: "20 images/month, 5 min video", included: true },
        { name: "Addon: $1 per 10 extra images, $2 per extra video minute", included: true },
      ],
    },
    {
      name: "Master Plan",
      description: "Full-departmental teachers using AI extensively",
      price: "$30/month",
      period: "or $300/year",
      features: [
        { name: "Planning Studio", included: true },
        { name: "Teaching Studio", included: true },
        { name: "Content Lab", included: true },
        { name: "Command desk", included: true },
        { name: "Growth Hub", included: true },
        { name: "Avatar Hub", included: true },
        { name: "60 images/month, 15 min video", included: true },
        { name: "Addon: $1 per 10 extra images, $2 per extra video minute", included: true },
      ],
    },
  ];

  const [selectedRegion, setSelectedRegion] = useState("Global");

  return (
    <section className="py-16 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yolearn-dark mb-4">
            Teach Better. Less Effort. More Impact.
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of educators who enhance their teaching with AI-powered tools on YoLearn.
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

        {/* Region switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-gray-200 rounded-full p-1 inline-flex shadow-sm">
            {["Global", "India"].map(region => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
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

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{tier.description}</p>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-teal-600">{tier.price}</p>
                  <p className="text-gray-400">{tier.period}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      {feature.included ? (
                        <Check className="h-5 w-5 mr-2 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 mr-2 text-gray-300" />
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition">
                  See Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection;
