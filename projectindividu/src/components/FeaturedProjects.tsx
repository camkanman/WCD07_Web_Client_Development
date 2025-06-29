// src/components/FeaturedProjects.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Definisikan tipe untuk properti ikon agar bisa digunakan kembali
type IconProps = React.SVGProps<SVGSVGElement>;

// Komponen Ikon GitHub
const GitHubIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Komponen Ikon Tautan Eksternal
const ExternalLinkIcon = (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

// Data untuk proyek (bisa diganti dengan data dari CMS atau API nantinya)
const projects = [
  {
    tag: 'Practice Project',
    imageUrl: '/project-pokemon-web.png', 
    title: 'Pokémon Web Explorer',
    description: 'Built an interactive Pokémon-themed website using React, Tailwind CSS, and Vite. Users can browse through various Pokémon with detailed stats and images fetched from a public API. Focused on responsive design, smooth user experience, and clean UI implementation.',
    info: { Year: '2025', Role: 'Front-end Developer' },
    liveDemoUrl: 'https://wcd-07-webpokemon.vercel.app/', 
    githubUrl: 'https://github.com/camkanman/WCD07_Web_Client_Development/tree/master/Task_6'
  },
  {
    tag: 'Practice Project',
    imageUrl: '/project-simple-landing.png', 
    title: 'Simple Landing Page with Routing',
    description: 'Created a clean and responsive landing page using React, Tailwind CSS, and Vite. The project showcases proper component structuring and routing using React Router. Designed to simulate a real-world single-page application with smooth navigation and reusable UI elements.',
    info: { Year: '2025', Role: 'Front-end Developer' },
    liveDemoUrl: 'https://wcd-07-simple-landing-page.vercel.app/', 
    githubUrl: 'https://github.com/camkanman/WCD07_Web_Client_Development/tree/master/Task_4'
  }
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="bg-black text-white border-t border-neutral-800 pt-20 pb-0 sm:py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[43px] md:text-[76px] font-[Bebas_Neue] leading-none tracking-normal">FEATURED PROJECTS</h2>
        <p className="mt-4 text-gray-400 max-w-2xl">
        Here are some selected projects that highlight my skills and passion in software development.
        </p>

        <div className="mt-20 space-y-28">
          {projects.map((project, index) => (
            <div key={project.title} className="flex flex-col md:flex-row items-center gap-12">
              {/* Sisi Gambar */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-[343px] h-[343px] md:w-[600px] md:h-[600px] bg-[#1a1a1a] rounded-lg relative flex items-center justify-center transition-all duration-[250ms] ease-in-out hover:-translate-y-4 hover:shadow-2xl hover:shadow-lime-300/10 hover:bg-[#333333]">
                  {/* Tag diposisikan absolut */}
                  <span className="absolute top-4 left-4 md:top-6 md:left-6 bg-black text-gray-300 text-sm font-mono px-3 py-1 rounded-md z-10">{project.tag}</span>
                  
                  {/* Kontainer Gambar */}
                  <div className="relative w-full max-w-[280px] md:max-w-[488px] aspect-[488/347]">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, 488px"
                    />
                  </div>
                </div>
              </div>

              {/* Sisi Teks */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl lg:text-4xl font-sans text-white leading-tight">{project.title}</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">{project.description}</p>
                
                <div className="mt-8 pt-6">
                  <h4 className="font-semibold text-gray-300 tracking-widest text-sm uppercase">Project Info</h4>
                  <div className="mt-3 border-t border-neutral-700"></div>
                  <dl className="mt-4 space-y-3">
                    {Object.entries(project.info).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-neutral-800 pb-3 text-sm">
                        <dt className="text-gray-400 font-sans">{key}</dt>
                        <dd className="text-white font-sans">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="mt-8 flex items-center gap-8">
                  {project.liveDemoUrl && (
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[#D3E97A] hover:text-white transition-colors">
                      <span className="font-mono text-sm uppercase tracking-wider pb-1 border-b-2 border-current">Live Demo</span>
                      <ExternalLinkIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[#D3E97A] hover:text-white transition-colors">
                      <span className="font-mono text-sm uppercase tracking-wider pb-1 border-b-2 border-current">See on Github</span>
                      <GitHubIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                   {project.viewProjectUrl && (
                    <a href={project.viewProjectUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[#D3E97A] hover:text-white transition-colors">
                      <span className="font-mono text-sm uppercase tracking-wider pb-1 border-b-2 border-current">View Project</span>
                      <ExternalLinkIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;