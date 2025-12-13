import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black/50 border-t border-white/5 pt-12 pb-8">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <Logo className="h-8 w-auto text-white" />
                <span className="font-display font-bold text-lg tracking-wider text-white">
                BLACKHOLE <span className="text-star-gold">STUDIOS</span>
                </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Capturing moments, creating universes. Timeless design and photography by Gian Cedrick Epilan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#/" className="hover:text-star-gold transition-colors">Home</a></li>
              <li><a href="#/about" className="hover:text-star-gold transition-colors">About Me</a></li>
              <li><a href="#/portfolio" className="hover:text-star-gold transition-colors">Portfolio</a></li>
              <li><a href="#/contact" className="hover:text-star-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-star-gold transition-colors transform hover:scale-110 duration-200">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-star-gold transition-colors transform hover:scale-110 duration-200">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              @blackholestudios.ph
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Blackhole Studios. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed in the stars.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;