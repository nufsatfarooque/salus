import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every service is designed around one goal: creating a consistent, trusting, and enriching experience for your loved one.
          </p>
        </div>
      </section>

      {/* Featured Service: Home Companion Care */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-blue-600">
            {/* Badge */}
            <div className="bg-blue-50 px-8 pt-8">
              <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                Core Service
              </div>
            </div>

            {/* Content */}
            <div className="px-8 py-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Home Companion Care
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our trained companion caregivers visit your loved one at home, building a consistent relationship through structured 2-hour sessions, 3–4 times per week.
              </p>

              <p className="text-gray-700 font-semibold mb-4">
                Each session is tailored to your loved one's needs and may include:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Structured activities to build communication and emotional skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Play-based engagement and sensory activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Routine building and social skill development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Reading, creative activities, or outdoor time in the home garden</span>
                </li>
              </ul>

              {/* Info Callout */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-gray-800">
                  <span className="font-semibold">After each visit,</span> you receive a WhatsApp session report summarising the session and your loved one's progress.
                </p>
              </div>

              <p className="text-sm text-gray-600">
                Monthly subscription package. Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services 2 & 3: Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 2: Supervised Social Outings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Supervised Social Outings
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Beyond the home, our caregivers can accompany your loved one on supervised outings — to parks, community spaces, or other appropriate environments. These outings build social confidence, expose participants to new experiences, and reduce isolation in a safe, supported way.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Fully supervised by a trained caregiver</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Pre-planned and communicated with the family</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Flexible frequency — add-on to your home care package</span>
                  </li>
                </ul>

                <p className="text-sm text-gray-600">
                  Add-on fee. Contact us for details.
                </p>
              </div>
            </div>

            {/* Service 3: Initial Home Assessment */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Initial Home Assessment
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Before we begin, our team conducts a thorough home assessment to understand your loved one's needs, routines, preferences, and goals. This allows us to match the right caregiver and design the right approach for your family.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Conducted in your home by a trained assessor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Covers communication style, sensory preferences, routines, and goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Forms the basis of the personalised care plan</span>
                  </li>
                </ul>

                <p className="text-sm text-gray-600">
                  Assessment fee applies. Contact us to confirm current offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not sure which service is right for you?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch and we'll guide you through the options.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
