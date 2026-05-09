'use client';

import { CheckCircle2, Heart, Users, Shield, Globe } from 'lucide-react';

const values = [
  {
    icon: CheckCircle2,
    title: 'Trust',
    description: 'Every provider is verified and trained before they ever meet a family.'
  },
  {
    icon: Heart,
    title: 'Dignity',
    description: 'We treat every child and every family with complete respect.'
  },
  {
    icon: Users,
    title: 'Empathy',
    description: 'We understand the emotional weight families carry every day.'
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Your child\'s physical and emotional safety is never compromised.'
  },
  {
    icon: Globe,
    title: 'Community',
    description: 'We believe in supporting families together, not in isolation.'
  }
];

export default function OurValues() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
          What We Stand For
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-neutral-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-teal-700" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
