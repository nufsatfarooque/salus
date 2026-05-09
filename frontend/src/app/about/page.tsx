import AboutHero from '@/app/about/sections/AboutHero';
import OurStory from '@/app/about/sections/OurStory';
import OurMission from '@/app/about/sections/OurMission';
import OurValues from '@/app/about/sections/OurValues';
import AustraliaToFBangladesh from '@/app/about/sections/AustraliaToFBangladesh';
import OurVision from '@/app/about/sections/OurVision';
import CTASection from '@/app/about/sections/CTASection';

export const metadata = {
  title: 'About Us - Salus Care Group',
  description: 'Learn about Salus Care Group - supporting children with autism and disabilities across Bangladesh with compassion and dignity.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <OurStory />
      <OurMission />
      <OurValues />
      <AustraliaToFBangladesh />
      <OurVision />
      <CTASection />
    </main>
  );
}
