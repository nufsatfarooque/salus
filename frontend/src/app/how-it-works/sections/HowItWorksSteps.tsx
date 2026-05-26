// frontend/src/app/how-it-works/sections/HowItWorksSteps.tsx

import { Phone, ClipboardList, Users, CalendarCheck, MessageCircle, RefreshCw } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Initial Inquiry',
    description: 'Reach out to us by phone, WhatsApp, or through our contact form. Tell us a little about your loved one and what kind of support you are looking for. There is no obligation at this stage — just a conversation.',
    icon: Phone,
  },
  {
    id: 2,
    title: 'Home Assessment',
    description: 'We arrange a visit to your home. Our team will spend time with your loved one and your family to understand their needs, daily routines, communication style, and personal goals. This helps us design the right care plan and choose the right caregiver.',
    icon: ClipboardList,
  },
  {
    id: 3,
    title: 'Caregiver Matching',
    description: 'Based on the assessment, we carefully select a caregiver from our trained team whose skills, personality, and approach are a strong match for your loved one. We believe the right match makes all the difference.',
    icon: Users,
  },
  {
    id: 4,
    title: 'Sessions Begin',
    description: 'Your assigned caregiver begins their regular home visits — typically 3–4 times per week, each session lasting 2 hours. From the very first session, the focus is on building a safe, trusting relationship.',
    icon: CalendarCheck,
  },
  {
    id: 5,
    title: 'WhatsApp Session Reports',
    description: 'After every single session, you receive a written WhatsApp report from your caregiver. This covers what was done during the session, how your loved one responded, any observations, and what is planned for the next visit. You are always in the loop.',
    icon: MessageCircle,
  },
  {
    id: 6,
    title: 'Ongoing Review',
    description: 'We regularly review progress with the family and adjust the care plan as needed. Our goal is continuous improvement in your loved one\'s communication, confidence, and well-being.',
    icon: RefreshCw,
  },
];

export default function HowItWorksSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={step.id} className="relative">
                    <div className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}>
                      {/* Content */}
                      <div className="flex-1">
                        <div className={`${isEven ? 'text-right' : 'text-left'}`}>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{step.description}</p>
                        </div>
                      </div>

                      {/* Circle and Icon */}
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10 relative bg-white border-4 border-blue-600">
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-20">
                          <span className="text-white font-bold text-lg">{step.id}</span>
                        </div>
                      </div>

                      {/* Content (opposite side) */}
                      <div className="flex-1"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="relative pl-12">
            {/* Left Vertical Line */}
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-blue-200"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div key={step.id} className="relative">
                    {/* Circle and Icon */}
                    <div className="absolute -left-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-20">
                      <span className="text-white font-bold">{step.id}</span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
