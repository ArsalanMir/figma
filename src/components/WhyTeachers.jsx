import { Check } from "lucide-react"

const WhyTeachers = () => {
  const benefits = [
    { icon: '⏱️', title: 'Save time across lesson prep, content, communication' },
    { icon: '📚', title: 'Improve instructional quality with research-aligned templates' },
    { icon: '🧠', title: 'Create engaging, differentiated content in minutes' },
    { icon: '👥', title: 'Multiply your presence with a co-teacher avatar' },
    { icon: '📊', title: 'Get actionable analytics + smart student reports' },
    { icon: '💬', title: 'Better emotional connection with students' },
    { icon: '🧰', title: 'All-in-one toolset: planner, designer, communicator' },
    { icon: '🌐', title: 'Available 24/7, from any device' }
  ];

  const features = [
    'Works in your language',
    'Save hours every week',
    'School-ready',
    'Student-safe',
    'Aligned to global curriculum',
    'No training needed',
    'Works in all subjects'
  ];

  return (
    <section className="bg-emerald-100 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yolearn-dark mb-4">
          Why Teachers <span className="text-red-500">❤️</span> YoLearn.ai
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Explore the AI-powered tools that simplify your day, spark engagement, and save hours of effort.
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center bg-white/70 px-4 py-2 rounded-full text-sm shadow-sm">
              <Check className="h-4 w-4 mr-2 text-green-600" />
              <span className="text-gray-800">{feature}</span>
            </div>
          ))}
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-200">
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
  )
}

export default WhyTeachers;
