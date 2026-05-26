// frontend/src/app/how-it-works/page.tsx

import Link from 'next/link';
import HowItWorksSteps from './sections/HowItWorksSteps';

export default function HowItWorksPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Getting started with Salus Care Group is straightforward. Here is what to expect from the moment you reach out.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <HowItWorksSteps />

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Your first step is just a conversation. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors text-center"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-gray-800 font-semibold transition-colors text-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
