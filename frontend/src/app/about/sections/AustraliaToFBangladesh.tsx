export default function AustraliaToFBangladesh() {
  const stats = [
    'Est. in Australia',
    'Now serving Bangladesh',
    'Trained local providers',
    'Families supported'
  ];

  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">
          From Australia, For Bangladesh
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-lg text-neutral-800 leading-relaxed mb-6">
              Salus Care Group was born in Australia with a deep commitment to supporting children with disabilities and their families. When we saw the need in Bangladesh, we knew we had to act.
            </p>
            <p className="text-lg text-neutral-800 leading-relaxed">
              Our Bangladesh branch brings the same international standards of care and training to local providers who understand the culture, speak the language, and live in the communities we serve. This combination of global expertise and local knowledge is what sets us apart.
            </p>
          </div>
          
          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat}
                className="bg-white border-2 border-teal-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-sm font-semibold text-teal-700">
                  {stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
