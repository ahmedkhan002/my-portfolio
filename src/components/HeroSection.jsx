import React from 'react';
import profile from '../images/profile.png';

const HeroSection = () => {
  return (
    <section id='home' className="relative h-[610px] w-full overflow-hidden  text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-4 z-0 pointer-events-auto">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="border border-gray-700/50 hover:bg-blue-500/30 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-700 hover:rounded-2xl hover:z-100 hover:scale-110 transition-all duration-200"
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative h-full w-full flex flex-col lg:flex-row gap-8 items-center justify-center p-8 z-10 pointer-events-none">
        {/* Text Section */}
        <div className="flex flex-col gap-6 text-center select-none lg:text-left bg-slate-800/70 p-6 rounded-xl backdrop-blur-sm pointer-events-auto">
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent'>
            Ahmed Khan
          </h1>
          <p className='text-xl md:text-2xl lg:text-3xl font-medium'>
            I'm a <span className='ml-2 pb-1 border-b-2 border-blue-400/50'>Developer</span>
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative z-10 pointer-events-auto">
          <img
            className='h-60 lg:h-72 rounded-2xl border-2 border-blue-400/30 shadow-xl shadow-blue-700/20 hover:shadow-blue-700 hover:scale-125 duration-300 transition-all'
            src={profile}
            alt="Ahmed Khan"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
