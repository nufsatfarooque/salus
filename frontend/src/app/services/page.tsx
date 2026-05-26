export default function Services() {
  const services = [
    {
      title: 'Educational Support',
      description: 'Comprehensive educational assistance tailored to each child\'s needs',
      icon: '📚',
    },
    {
      title: 'Behavioral Therapy',
      description: 'Evidence-based behavioral interventions and therapeutic support',
      icon: '🎯',
    },
    {
      title: 'Social Development',
      description: 'Programs designed to enhance social interaction and communication skills',
      icon: '👥',
    },
    {
      title: 'Family Counseling',
      description: 'Support services for families to help them manage and thrive',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: 'Specialized Training',
      description: 'Customized training programs for different developmental stages',
      icon: '🎓',
    },
    {
      title: 'Care Coordination',
      description: 'Holistic coordination of all support services for seamless care',
      icon: '🤝',
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Comprehensive support services designed to meet the unique needs of every child
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-600 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
