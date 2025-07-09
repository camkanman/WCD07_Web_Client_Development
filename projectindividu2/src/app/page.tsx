'use client';
import dynamic from 'next/dynamic';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Hero from './components/Hero';

const FeaturedProjects = dynamic(
  () => import('./components/FeaturedProjects'),
  {
    loading: () => (
      <div className="max-w-7xl mx-auto animate-pulse">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16">
          <div className="w-full md:w-1/2">
            <div className="h-16 bg-neutral-800 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-neutral-800 rounded w-full max-w-lg mb-2"></div>
            <div className="h-4 bg-neutral-800 rounded w-5/6 max-w-lg"></div>
          </div>
          <div className="mt-8 md:mt-0 h-12 bg-neutral-800 rounded w-full md:w-1/3"></div>
        </div>

        {/* Project Card Skeleton (diulang 2x) */}
        <div className="space-y-28">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              {/* Image Skeleton */}
              <div className="w-full md:w-1/2">
                <div className="aspect-[488/347] bg-neutral-800 rounded-lg"></div>
              </div>
              {/* Text Skeleton */}
              <div className="w-full md:w-1/2">
                <div className="h-10 bg-neutral-800 rounded w-3/4 mb-6"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-neutral-800 rounded"></div>
                  <div className="h-4 bg-neutral-800 rounded"></div>
                  <div className="h-4 bg-neutral-800 rounded w-5/6"></div>
                </div>
                <div className="mt-8 pt-6">
                  <div className="h-4 bg-neutral-800 rounded w-1/4 mb-4"></div>
                  <div className="mt-3 border-t border-neutral-700"></div>
                  <div className="mt-4 space-y-4">
                    <div className="h-5 bg-neutral-800 rounded"></div>
                    <div className="h-5 bg-neutral-800 rounded"></div>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-8">
                  <div className="h-6 bg-neutral-800 rounded w-1/3"></div>
                  <div className="h-6 bg-neutral-800 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    ssr: false, // Memastikan loading state terlihat di client-side
  }
);

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
