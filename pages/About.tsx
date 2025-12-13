import React from 'react';
import { Camera, PenTool, Star, Award } from 'lucide-react';
import { getImageUrl } from '../components/ImportHelper';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Text Section */}
          <div className="order-1 lg:order-1 space-y-8 lg:max-w-3xl">
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
          {/* Image Section */}
          <div className="relative group order-2 lg:order-2 lg:max-w-2xl lg:mx-auto w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-star-gold to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] border border-white/10 shadow-2xl">
              {/* Placeholder for professional headshot */}
              <img
                src={getImageUrl('./assets/myfacelol/me.png')}
                alt="Gian Cedrick Epilan"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                <h3 className="text-2xl font-display font-bold text-white">Gian Cedrick Epilan</h3>
                <p className="text-star-gold">CEO & Creative Director</p>
              </div>
            </div>
          </div>
        </div>
        {/* Credentials Section */}
        <div className="order-3 border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 mb-4">
              <Award className="w-6 h-6 text-star-gold" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Certifications</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Continuous learning and mastery of modern design tools allow me to deliver world-class results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Decorative Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition duration-700"></div>
              <div className="relative bg-space-black/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                <a
                    href="https://www.canva.com/design-school/certification-award/3bb74dc0-2c9c-4022-922b-2a3d1ee96391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full md:w-1/2 aspect-[4/3] bg-black/40 rounded-lg overflow-hidden border border-white/5 relative group-hover:border-white/20 transition-colors cursor-pointer"
                >
                  <img
                      src={getImageUrl('./assets/certificate.png')}
                    alt="Canva Certification"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md border border-white/10 group-hover:bg-star-gold group-hover:text-black transition-colors">
                      View Certificate
                    </span>
                  </div>
                </a>
                {/* Certificate Details */}
                <div className="w-full md:w-1/2 text-left space-y-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white">Canva Certified Creative</h3>
                    <p className="text-star-gold text-sm font-medium mt-1">Issued by Canva</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    If there's one thing these projects have shown me, it's that design is about building bridges to an audience through a solid game plan and a simple approach. Everything you see here is the end result of that discovery, and it really maps out my journey in finding my own creative voice. I owe a huge thanks to my mentor, Professor Patrick L. Bacalso, who was a key player in helping me build up my technical skills and trust my own instincts.
                  </p>
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-md text-xs text-gray-400 border border-white/5 mr-2">Visual Design</span>
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-md text-xs text-gray-400 border border-white/5 mr-2">Brand Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div >
  );
};

export default About;