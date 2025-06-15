import React, { useEffect } from 'react';
import profile from '../images/profile.png';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin,FaGithub } from "react-icons/fa";
import { useAppContext } from '../context/context';

const HeroSection = () => {

  const {setInternalActiveSection} = useAppContext()

   useEffect(() => {
    setInternalActiveSection("home");
  }, []);

  const getBoxCount = () => {
    if (window.innerWidth < 640) return 12;
    if (window.innerWidth < 768) return 20;
    if (window.innerWidth < 1024) return 30;
    return 40;
  };

  const boxCount = getBoxCount();

  return (
    <section id="home" className="relative h-[610px] lg:ml-2 w-full text-white bg-slate-800">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 auto-rows-fr z-0 pointer-events-auto">
        {Array.from({ length: boxCount }).map((_, i) => (
          <div
            key={i}
            className="min-h-[60px] border border-gray-700/50 hover:bg-blue-500/30 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-700 hover:rounded-2xl hover:z-10 hover:scale-110 transition-all duration-200"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full w-full flex flex-col lg:flex-row gap-8 items-center justify-center p-8 z-10 pointer-events-none">
        {/* Text Section */}
        <div className="flex flex-col gap-6 text-center select-none lg:text-left bg-slate-800/70 p-6 rounded-xl backdrop-blur-sm pointer-events-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Ahmed Khan
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-medium t">
            I'm a{' '}
            <span className="typewriter text-3xl text-cyan-300  align-middle">Developer</span>
          </p>
          <div className="flex justify-center space-x-6 ">
                    <a href="#" className=" border-none outline-none  hover:bg-white rounded-full ">
                      <FaGithub className="text-2xl hover:text-black hover:scale-150 duration-200" />
                    </a>
                    <a href="#" className="  border-none outline-none hover:bg-white">
                      <FaLinkedin className="text-2xl hover:text-cyan-700  hover:scale-150 duration-200" />
                    </a>
                  </div>
        </div>

        {/* Profile Image */}
        <div className="relative z-10 pointer-events-auto">
          <img
            className="h-60 lg:h-72 rounded-2xl border-2 border-blue-400/30 shadow-xl shadow-blue-700/20 hover:shadow-blue-700 hover:scale-125 duration-300 transition-all"
            src={profile}
            alt="Ahmed Khan"
          />
        </div>
      </div>

      {/* Typewriter CSS */}
      <style>{`
        .typewriter {
          font-family: 'Courier New', Courier, monospace;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #60a5fa;
          width: 0ch;
          animation: typing 3s steps(9, start) infinite alternate, blink 0.7s step-end infinite;
        }

        @keyframes typing {
          from { width: 0ch }
          to { width: 9ch }
        }

        @keyframes blink {
          0%, 100% { border-color: #60a5fa }
          50% { border-color: transparent }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
