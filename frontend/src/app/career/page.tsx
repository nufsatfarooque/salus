export default function Career() {
  const positions = [
    {
      title: 'Care Coordinator',
      department: 'Operations',
      location: 'Dhaka',
      type: 'Full-time',
    },
    {
      title: 'Behavioral Therapist',
      department: 'Clinical',
      location: 'Dhaka',
      type: 'Full-time',
    },
    {
      title: 'Educational Specialist',
      department: 'Education',
      location: 'Dhaka, Chattogram',
      type: 'Full-time',
    },
    {
      title: 'Administrative Officer',
      department: 'Administration',
      location: 'Dhaka',
      type: 'Full-time',
    },
    {
      title: 'Community Outreach Coordinator',
      department: 'Outreach',
      location: 'Multiple Locations',
      type: 'Full-time',
    },
    {
      title: 'Program Manager',
      department: 'Management',
      location: 'Dhaka',
      type: 'Full-time',
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Career Opportunities</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Join our team and make a meaningful difference in the lives of children and families
          </p>
        </div>
      </section>

      {/* Positions List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {positions.map((position) => (
              <div
                key={position.title}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-600 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-700">
                      <span className="flex items-center gap-1">
                        <span className="font-semibold">Department:</span> {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-semibold">Location:</span> {position.location}
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Join Salus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Meaningful Work</h3>
              <p className="text-gray-700">Make a real difference in the lives of children and families</p>
            </div>
            <div>
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-700">Professional development and career advancement pathways</p>
            </div>
            <div>
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Supportive Team</h3>
              <p className="text-gray-700">Work with passionate professionals in a collaborative environment</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
