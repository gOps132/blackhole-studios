import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nebula-orange/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-10 flex justify-center">
            {/* Logo Representation */}
            <div className="relative w-full max-w-lg mx-auto flex items-center justify-center">
                {/* Ambient glow behind the logo */}
                <div className="absolute inset-0 bg-star-gold/20 blur-[60px] rounded-full scale-75 animate-pulse"></div>
                <Logo className="w-48 md:w-80 h-auto relative z-10 drop-shadow-[0_0_25px_rgba(251,191,36,0.3)]" />
            </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 pb-2">
            Capturing Moments,
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-star-gold to-nebula-orange">
            Creating Universes.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
          Welcome to the portfolio of <span className="text-white font-semibold">Gian Cedrick Epilan</span>, the creative force behind <span className="text-star-gold">Blackhole Studios</span>. 
          Specializing in photography and graphic design, I bring a universe of creativity to every project, 
          capturing fleeting moments and preserving their light forever.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/portfolio"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:bg-star-gold hover:text-black hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-star-gold focus:ring-offset-2 focus:ring-offset-black"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-star-gold to-nebula-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all focus:outline-none"
          >
             About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;