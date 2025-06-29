import FeaturedProjects from '@/components/FeaturedProjects';
import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto pt-20 sm:pt-32 space-y-24">
        <Hero />
        <FeaturedProjects />
        <AboutMe />
        <Contact />
      </div>
    </main>
  );
}
