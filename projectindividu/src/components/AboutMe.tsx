import React from 'react';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <section className="bg-black text-white border-t border-neutral-800 pt-20 pb-0 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">
        <div className="md:col-span-2">
          <h2 className="text-[43px] md:text-[101px] font-[Bebas_Neue] leading-[90%] tracking-normal">
            ABOUT ME
          </h2>
        </div>
        <div className="md:col-span-3">
          <p className="text-2xl md:text-3xl leading-snug">
            I am a software developer passionate about building impactful digital experiences.
          </p>
          <p className="mt-8 text-gray-400 leading-relaxed">
            I&apos;m a bootcamp graduate specializing in backend development using Java, Spring Boot, and databases like MySQL, PostgreSQL and Oracle. I enjoy building efficient, scalable, and maintainable systems. While my main focus is backend, I&apos;m also exploring front-end technologies like React and Next.js to grow as a well-rounded developer. Outside of coding, I enjoy playing football, photography, and traveling. I&apos;m always learning and improving every day.
          </p>
          <div className="mt-12">
            <div className="mt-8">
              <Link href="/about" className="text-[#D3E97A] font-semibold border-b-2 border-[#D3E97A] pb-1 hover:text-white hover:border-white transition-colors">
                MORE ABOUT ME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;