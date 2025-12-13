import React from 'react';
import { Mail, Phone, Globe, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Let's Create Something Timeless</h1>
          <p className="text-xl text-gray-300">
            Ready to bring your universe to life? Reach out to Blackhole Studios today.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-star-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-1">Epilan Gian Cedrick</h2>
                        <p className="text-star-gold font-medium">CEO / Blackhole Studios</p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                <Phone className="w-5 h-5 text-star-gold" />
                            </div>
                            <span className="text-lg">63+992-860-8725</span>
                        </div>

                        <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-star-gold" />
                            </div>
                            <span className="text-lg">gianepilan@bhstudios.com</span>
                        </div>

                        <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                <Globe className="w-5 h-5 text-star-gold" />
                            </div>
                            <span className="text-lg">blackholestudios.ph</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center space-y-8 md:border-l md:border-white/10 md:pl-12">
                    <h3 className="text-xl font-bold text-white">Connect on Socials</h3>
                    <p className="text-gray-400">Follow our journey through the cosmos of creativity.</p>
                    
                    <div className="flex gap-6">
                        <a 
                            href="#" 
                            className="flex flex-col items-center justify-center w-24 h-24 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-star-gold transition-all group"
                        >
                            <Instagram className="w-8 h-8 text-gray-300 group-hover:text-pink-500 mb-2 transition-colors" />
                            <span className="text-xs text-gray-400 group-hover:text-white">Instagram</span>
                        </a>
                        <a 
                            href="#" 
                            className="flex flex-col items-center justify-center w-24 h-24 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-star-gold transition-all group"
                        >
                            <Facebook className="w-8 h-8 text-gray-300 group-hover:text-blue-500 mb-2 transition-colors" />
                            <span className="text-xs text-gray-400 group-hover:text-white">Facebook</span>
                        </a>
                    </div>
                    <div className="text-sm text-gray-500">
                        @blackholestudios.ph
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;