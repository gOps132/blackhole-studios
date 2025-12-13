import React from 'react';
import { Camera, PenTool, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div className="relative group order-2 lg:order-1 lg:max-w-2xl lg:mx-auto w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-star-gold to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] border border-white/10 shadow-2xl">
              {/* Placeholder for professional headshot */}
              <img 
                src="assets/myfacelol/me.png" 
                alt="Gian Cedrick Epilan" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                <h3 className="text-2xl font-display font-bold text-white">Gian Cedrick Epilan</h3>
                <p className="text-star-gold">CEO & Creative Director</p>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2 space-y-8 lg:max-w-3xl">
            <div>
              <h2 className="text-sm font-semibold text-star-gold tracking-widest uppercase mb-2">About The Creator</h2>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                The Gravity of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Moments</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am Gian Cedrick Epilan, a passionate designer and the CEO of Blackhole Studios. My work is driven by the idea that life's most important moments have a gravity of their own.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                From intimate portraits to dynamic corporate events, I aim to pull these moments from the rush of time and make them timeless. At Blackhole Studios, we don't just take pictures or design logos; we build visual universes that orbit around your unique story.
              </p>
            </div>

            {/* Skills / Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="p-6 bg-white/5 rounded-lg border border-white/5 hover:border-star-gold/50 transition-colors">
                <Camera className="w-8 h-8 text-star-gold mb-4" />
                <h4 className="text-white font-bold mb-2">Photography</h4>
                <p className="text-sm text-gray-400">Capturing the raw emotion and light of every event.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-lg border border-white/5 hover:border-star-gold/50 transition-colors">
                <PenTool className="w-8 h-8 text-nebula-orange mb-4" />
                <h4 className="text-white font-bold mb-2">Graphic Design</h4>
                <p className="text-sm text-gray-400">Creating modern, sleek, and memorable visual identities.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-lg border border-white/5 hover:border-star-gold/50 transition-colors">
                <Star className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="text-white font-bold mb-2">Branding</h4>
                <p className="text-sm text-gray-400">Building cohesive brands that leave a lasting impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;