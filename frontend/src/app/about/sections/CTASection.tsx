'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
          Ready to Take the First Step?
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/referral">
            <button className="bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors w-full md:w-auto">
              Request Support for My Child
            </button>
          </Link>
          
          <Link href="/career">
            <button className="border-2 border-teal-700 text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors w-full md:w-auto">
              Join Our Team
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
