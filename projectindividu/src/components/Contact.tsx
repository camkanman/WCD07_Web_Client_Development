import React from 'react';
import SubmitButton from './SubmitButton';

const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#D3E97A] hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const Contact = () => {
  return (
    <footer id="contact" className="bg-black text-white border-t border-neutral-800 py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Kolom Kiri */}
          <div className="space-y-8 flex flex-col">
            <div>
              <h2 className="text-[43px] md:text-[76px] font-[Bebas_Neue] leading-none tracking-normal">
                LET&apos;S CONNECT
              </h2>
              <div className="mt-8 text-gray-300 space-y-2">
                <p>Say hello at <a href="mailto:husnumulyadi055@gmail.com" className="border-b hover:text-white hover:border-white transition-colors">husnumulyadi055@gmail.com</a></p>
                <p>For more info, here&apos;s my <a href="#" className="border-b hover:text-white hover:border-white transition-colors">resume</a></p>
              </div>
              <div className="flex space-x-6 pt-8">
                <SocialIcon href="https://www.linkedin.com/in/husnu-mulyadi/">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                </SocialIcon>
                <SocialIcon href="https://github.com/camkanman">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/></svg>
                </SocialIcon>
                <SocialIcon href="https://twitter.com">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/husnu_mulyadi/">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.161 0-3.523.012-4.755.068-2.61.12-3.832 1.325-3.951 3.951-.056 1.232-.067 1.593-.067 4.755s.011 3.523.067 4.755c.119 2.626 1.34 3.832 3.951 3.951 1.232.056 1.594.067 4.755.067s3.523-.011 4.755-.067c2.61-.119 3.832-1.325 3.951-3.951.056-1.232.067-1.593.067-4.755s-.011-3.523-.067-4.755c-.119-2.626-1.34-3.832-3.951-3.951C15.523 3.616 15.161 3.604 12 3.604zm0 4.865a3.532 3.532 0 100 7.064 3.532 3.532 0 000-7.064zm0 5.622a2.09 2.09 0 110-4.18 2.09 2.09 0 010 4.18zm4.875-6.402a1.249 1.249 0 10-2.498.002 1.249 1.249 0 002.498-.002z" clipRule="evenodd"/></svg>
                </SocialIcon>
              </div>
            </div>
            <p className="hidden md:block mt-auto pt-16 text-left text-gray-500 text-[16px]">&copy; 2025 Husnu Mulyadi</p>
          </div>

          {/* Kolom Kanan */}
          <div className="flex flex-col">
            <form action="#" method="POST" className="space-y-6 flex-grow flex flex-col">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input type="text" name="name" id="name" placeholder="John Doe" className="mt-1 block w-full bg-[#1a1a1a] border-transparent rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" name="email" id="email" className="mt-1 block w-full bg-[#1a1a1a] border-transparent rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"/>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input type="text" name="subject" id="subject" className="mt-1 block w-full bg-[#1a1a1a] border-transparent rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea name="message" id="message" rows={5} className="mt-1 block w-full bg-[#1a1a1a] border-transparent rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"></textarea>
              </div>
              <div className="mt-auto pt-8 text-left">
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
        <p className="mt-auto pt-16 text-left text-gray-500 text-[16px] md:hidden">&copy; 2025 Husnu Mulyadi</p>
      </div>
    </footer>
  );
};

export default Contact;