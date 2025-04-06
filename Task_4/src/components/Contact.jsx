import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-sm">@Husnu Mulyadi</div>
        <div className="flex space-x-8 text-sm">
          <Link to="/" className="hover:opacity-70">About</Link>
          <Link to="/" className="hover:opacity-70">Work</Link>
          <Link to="/contact" className="hover:opacity-70">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column */}
        <div>
          <div className="rounded-full overflow-hidden w-64 h-64 mb-12">
            <img
              src="/images/avatar.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm mb-3">Contact Details</h3>
              <p className="text-sm">husnu.mulyadi@gmail.com</p>
              <p className="text-sm">+62 812345678</p>
            </div>

            <div>
              <h3 className="text-sm mb-3">Social</h3>
              <div className="space-y-2 text-sm">
                <p><a href="#" className="hover:opacity-70">LinkedIn</a></p>
                <p><a href="#" className="hover:opacity-70">Instagram</a></p>
                <p><a href="#" className="hover:opacity-70">Twitter</a></p>
                <p><a href="#" className="hover:opacity-70">Webflow</a></p>
                <p><a href="#" className="hover:opacity-70">Figma</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-4xl font-normal mb-12">Let's build something<br />cool together</h2>

          <form className="space-y-8">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="James Robert"
                className="w-full border-b border-gray-300 pb-2 bg-transparent focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="ayush.barnwal@brightscout.com"
                className="w-full border-b border-gray-300 pb-2 bg-transparent focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Subject</label>
              <input
                type="text"
                placeholder="For web design work Enquire"
                className="w-full border-b border-gray-300 pb-2 bg-transparent focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                placeholder="Type your Message"
                className="w-full border-b border-gray-300 pb-2 bg-transparent focus:outline-none focus:border-black resize-none"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-8 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-8 mt-20">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">Built with ❤️ by Brightscout & Ayush</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:opacity-70">LinkedIn</a>
            <a href="#" className="hover:opacity-70">Twitter</a>
            <a href="#" className="hover:opacity-70">Instagram</a>
            <a href="#" className="hover:opacity-70">Webflow</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;