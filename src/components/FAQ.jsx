import { useState } from 'react';
import teacher from '../assets/teacher.jpg'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What's the difference between Plan and Design workspaces?",
      answer: "The Plan Workspace helps you map your academic year, curriculum, and weekly teaching flow. The Design Workspace lets you create specific assignments like quizzes, homework, and worksheets using your AI Teaching Assistant.",
      category: "Workspaces & Tools"
    },
    {
      question: "How do I use the Lesson Planner?",
      answer: "The Lesson Planner allows you to create structured lesson plans by selecting objectives, activities, and assessments.",
      category: "Workspaces & Tools"
    },
    {
      question: "Is YoLearn.ai free for teachers?",
      answer: "YoLearn.ai offers a free basic plan with limited features. Premium features are available through subscription plans.",
      category: "Pricing & Payments"
    },
    {
      question: "Can my school pay for my access?",
      answer: "Yes, we offer school licensing. Contact sales for bulk discounts.",
      category: "Pricing & Payments"
    }
  ]

  const categories = ['Workspaces & Tools', 'Pricing & Payments'];

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id)
  }

  return (
    <section className="py-12 bg-[#3366FF] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-white/80 mb-8">Find answers to common questions about YoLearn.ai</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="hidden lg:block">
            <img 
              src={teacher}
              alt="Smiling teacher in a classroom setting"
              className="rounded-xl shadow-xl w-full h-[600px] object-cover"
            />
          </div>

          {/* content */}
          <div className="lg:col-span-2 space-y-10">
            {categories.map(category => (
              <div key={category} className="bg-white text-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-blue-700 mb-4">{category}</h3>
                {faqs
                  .filter(faq => faq.category === category)
                  .slice(0, 2)
                  .map((faq) => (
                    <div key={faq.question} className="border-b last:border-0">
                      <button
                        onClick={() => toggleAccordion(faq.question)}
                        className="w-full py-4 flex justify-between items-center focus:outline-none"
                      >
                        <span className="text-sm font-medium">{faq.question}</span>
                        <span className="text-xl">
                          {openIndex === faq.question ? '−' : '+'}
                        </span>
                      </button>
                      {openIndex === faq.question && (
                        <p className="text-sm text-gray-600 pb-4">{faq.answer}</p>
                      )}
                    </div>
                  ))}
              </div>
            ))}

            <div className="flex justify-end">
              <button className="bg-teal-400 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-500 transition">
                View All FAQs →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
