import React from 'react';

const StarBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <div className="absolute inset-0 star-bg animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-blue/30 to-space-black"></div>
    </div>
  );
};

export default StarBackground;