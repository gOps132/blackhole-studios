import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import Lightbox from '../components/Lightbox';

import { getImageUrl } from '../components/ImportHelper';

const projects: Project[] = [
  {
    id: '1',
    title: 'City of Dreams - Digital Wallpaper',
    description: "I made this image of a city in night time to represent the romanticization of a big city. Lots of people romanticize moving to a place where they can find opportunity, a place they name a 'city of dreams'. Where bright neon lights outshine the brightest star and the darkest alleys where the sun can't reach. A city where a person can live out their dreams, may be the same one that can consume them.",
    images: [getImageUrl('./assets/1. wallpaper/Epilan_act1.png')],
    type: 'design'
  },
  {
    id: '2',
    title: 'Blackhole Studios - Moodboard & Inspiration',
    description: "This 'OnlyPICS' design represents the initial spark for what would become Blackhole Studios. The goal was always to capture fleeting moments, and this first concept explored that through the lens of pure, celebratory energy. The core elements—capturing light, energy, and time—were all present. The development process was about refining that raw energy. The brand evolved to a more sophisticated identity, 'Blackhole Studios,' which could encapsulate not just parties, but the entire universe of significant life events. The initial vibrant palette was distilled into a single, powerful accent of gold/orange, symbolizing the light that is preserved from the moment. This shows the journey from a simple idea to a comprehensive brand world.",
    images: [getImageUrl('./assets/2. branding/EPILAN_ACT2.png')],
    type: 'branding'
  },
  {
    id: '3a',
    title: 'Logo Design Concepts',
    description: "A showcase of initial logo sketches and concepts for different brands, including 'Celeb Snap,' 'Blackhole Studios,' and 'Snap Party.' This demonstrates the creative process from ideation to final design.",
    images: [getImageUrl('./assets/3. logo design wireframe/Epilan_act3.png')],
    type: 'design'
  },
  {
    id: '3b',
    title: 'Blackhole Studios - Logo Construction',
    description: "The architectural blueprint of the Blackhole Studios brand. This wireframe reveals the geometric precision and grid systems used to construct the iconic, eye-like black hole symbol. It highlights the mathematical approach taken to ensure perfect symmetry and visual balance, forming the foundation of the final rendered logo.",
    images: [
      getImageUrl('./assets/4. logo design/1.png'),
      getImageUrl('./assets/4. logo design/2.png'),
      getImageUrl('./assets/4. logo design/3.png')
    ],
    type: 'branding'
  },
  {
    id: '3c',
    title: 'Blackhole Studios - Final Identity',
    description: "The final logo for Blackhole Studios is a powerful visual metaphor. It fuses the technical precision of a camera aperture with the artistic perspective of the human eye. Surrounding this core are sweeping lines that mimic the gravitational rings of a black hole, symbolizing the studio's power to 'capture every moment.' Paired with a sleek, futuristic typeface, the identity is modern, memorable, and perfectly aligned with the brand's cosmic and creative ethos.",
    images: [getImageUrl('./assets/4. logo design/logo.png')],
    type: 'branding'
  },
  {
    id: '4',
    title: 'Corporate Brochure',
    description: "A comprehensive brochure designed for Blackhole Studios. This layout leverages the brand's atmospheric use of negative space to organize complex information into a clean, readable hierarchy. The result is a sophisticated and compelling piece, perfect for client presentations and marketing.",
    images: [
      getImageUrl('./assets/5. Brochure/inside.png'),
      getImageUrl('./assets/5. Brochure/outside.png')
    ],
    type: 'branding'
  },
  {
    id: '5',  
    title: 'Promotional Flyers',
    description: "A versatile promotional flyer designed to showcase the core photography services of Blackhole Studios. The design uses bold, impactful typography and a dynamic, collage-style layout to effectively communicate a wide range of offerings, from weddings and family portraits to corporate events. The 'Capture Every Moment' tagline is brought to life through a compelling visual narrative that is both energetic and professional, inviting clients to preserve their most cherished memories.",
    images: [getImageUrl('./assets/6. Flyers/black hole studios flyer.png')],
    type: 'design'
  },
  {
    id: '6',
    title: 'Business Card Design',
    description: "Distinct business card concepts created for Blackhole Studios. The 'Galaxy' design embraces the dark, cosmic theme of the brand, while the 'Watercolor' variant offers a creative, artistic alternative. Both cards feature premium typography and layout designed to leave a lasting impact.",
    images: [
      getImageUrl('./assets/7. Business Card/1.png'),
      getImageUrl('./assets/7. Business Card/2.png'),
      getImageUrl('./assets/7. Business Card/3.png'),
      getImageUrl('./assets/7. Business Card/4.png'),
      getImageUrl('./assets/7. Business Card/5.png'),
      getImageUrl('./assets/7. Business Card/6.png')
    ],
    type: 'branding'
  },
  {
    id: '7',
    title: '2026 Studio Calendar',
    description: "This calendar grounds the cosmic theme of Blackhole Studios by focusing on human connection. It functions as a year-long portfolio, showcasing striking portraits that represent the core of our services. The modern design ensures it is not just a calendar, but a statement piece reflecting the studio's quality and aesthetic.",
    images: [getImageUrl('./assets/8. 2026 Calendar/EPILAN_CALENDAR.png')],
    type: 'design'
  },
  {
    id: '8',
    title: 'Mobile App Prototype',
    description: "A prototype for a mobile application designed in Figma. The app is designed to streamline the client booking and gallery viewing process for Blackhole Studios.",
    images: [], 
    type: 'prototype',
    embedUrl: 'https://embed.figma.com/proto/3hrRGKLAStvlhU7z0pmSPl/Untitled?node-id=1-3&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A6&embed-host=share'
  }
];

const Portfolio: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const allDisplayImages = useMemo(() => {
    return projects.flatMap(p => 
      p.images.map(img => ({
        src: img,
        title: p.title
      }))
    );
  }, []);

  const projectStartIndices = useMemo(() => {
    const indices: number[] = [];
    let count = 0;
    projects.forEach(p => {
        indices.push(count);
        count += p.images.length;
    });
    return indices;
  }, []);

  const handleNext = () => {
    setLightboxIndex(prev => (prev + 1) % allDisplayImages.length);
  };

  const handlePrev = () => {
    setLightboxIndex(prev => (prev - 1 + allDisplayImages.length) % allDisplayImages.length);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Selected Works</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Explore a collection of my latest projects, ranging from brand identity to digital illustration and UI/UX design.
            </p>
        </div>

        <div className="space-y-32 px-4 md:px-0">
          {projects.map((project, projectIndex) => (
            <div key={project.id} className={`flex flex-col ${projectIndex % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
              
              {/* Visual Asset Container */}
              <div className="w-full lg:w-3/5">
                {project.type === 'prototype' && project.embedUrl ? (
                    <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                         <iframe 
                            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
                            width="100%" 
                            height="100%" 
                            src={project.embedUrl} 
                            allowFullScreen
                            title={project.title}
                        ></iframe>
                    </div>
                ) : project.images.length > 1 ? (
                    <div className="grid grid-cols-2 gap-4">
                        {project.images.map((img, i) => (
                            <div 
                                key={i} 
                                className={`rounded-xl overflow-hidden border border-white/10 shadow-lg hover:border-star-gold/50 transition-colors cursor-pointer ${i === 0 ? 'col-span-2' : ''} aspect-[16/9]`}
                                onClick={() => setLightboxIndex(projectStartIndices[projectIndex] + i)}
                            >
                                <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div 
                        className="rounded-xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer aspect-[16/9]"
                        onClick={() => setLightboxIndex(projectStartIndices[projectIndex])}
                    >
                        <img 
                            src={project.images[0]} 
                            alt={project.title} 
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                        />
                    </div>
                )}
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-2/5 sticky top-24">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-star-gold border border-star-gold/30 rounded-full mb-4 uppercase">
                    {project.type === 'prototype' ? 'UI/UX Design' : project.type === 'branding' ? 'Brand Identity' : 'Graphic Design'}
                </span>
                <h2 className="text-3xl font-display font-bold text-white mb-6">{project.title}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-star-gold to-nebula-orange mb-8"></div>
                <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxIndex !== -1 && (
        <Lightbox
            isOpen={lightboxIndex !== -1}
            imageSrc={allDisplayImages[lightboxIndex].src}
            title={allDisplayImages[lightboxIndex].title}
            onClose={() => setLightboxIndex(-1)}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={true}
            hasPrev={true}
        />
      )}
    </div>
  );
};

export default Portfolio;