import { ArrowRight } from "lucide-react"

const WorkspaceCard = ({ icon, title, description, features, type }) => {
  const getIconColor = () => {
    switch (type) {
      case 'grow': return 'text-green-500';
      case 'design': return 'text-blue-500';
      case 'create': return 'text-purple-500';
      case 'manage': return 'text-indigo-500';
      case 'earn': return 'text-emerald-500';
      case 'reflect': return 'text-yellow-500';
      default: return 'text-teal-500';
    }
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
      <div className="mt-4">
        <button className="flex items-center text-teal-600 hover:underline text-sm font-medium">
          Explore Workspace <ArrowRight className="h-4 w-4 ml-1" />
        </button>
        <button className="text-gray-500 hover:text-gray-700 text-sm mt-1">
          See features
        </button>
      </div>
    </div>
  );
};

const WorkspaceSection = () => {
  const workspaces = [
    {
      icon: '🌱',
      title: 'Grow',
      description: 'Everything you need to plan smarter',
      features: ['Curriculum Mapper', 'Calendar Planner'],
      type: 'grow',
    },
    {
      icon: '🎨',
      title: 'Design',
      description: 'Tools to help you design engaging learning',
      features: ['Lesson Planner', 'Quiz Builder'],
      type: 'design',
    },
    {
      icon: '✏️',
      title: 'Create',
      description: 'Turn ideas into educational resources',
      features: ['Worksheet Generator', 'Slideshow Builder'],
      type: 'create',
    },
    {
      icon: '📊',
      title: 'Manage',
      description: 'Organize your class and gain insights',
      features: ['Completion Analytics', 'Report Card Generator'],
      type: 'manage',
    },
    {
      icon: '🔄',
      title: 'Reflect',
      description: 'Track personal progress and grow professionally',
      features: ['Self Assessment', 'Certifications'],
      type: 'reflect',
    },
    {
      icon: '💰',
      title: 'Earn',
      description: 'Share, scale, and monetize your expertise',
      features: ['Create your AI Co-teacher', 'Teach at Scale'],
      type: 'earn',
    },
  ];

  return (
    <section className="bg-[#9EF0E9] py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-yolearn-dark mb-12">
          Your AI-Powered Teaching Workspaces
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workspaces.map((workspace, index) => (
            <WorkspaceCard key={index} {...workspace} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium px-6 py-3">
            Explore Plan Workspace →
          </button>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="h-24 mt-16 bg-emerald-100"
        style={{
          borderTopLeftRadius: '50% 80%',
          borderTopRightRadius: '50% 80%',
          transform: 'scale(1.2, 0.6) translateY(40%)',
        }}
      ></div>
    </section>
  )
}

export default WorkspaceSection;
