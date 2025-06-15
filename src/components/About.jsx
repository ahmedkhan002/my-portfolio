import React, { useEffect } from 'react';
import { useAppContext } from '../context/context';

const About = () => {

  const {setInternalActiveSection} = useAppContext()

   useEffect(() => {
    setInternalActiveSection("about");
  }, []);

    const InfoItem = ({ label, value }) => (
        <div className="flex items-start gap-2">
            <span className="text-cyan-300">➤</span>
            <span>
                <span className="font-semibold text-slate-200">{label}:</span>{' '}
                <span className="text-slate-300">{value}</span>
            </span>
        </div>
    );

    return (
        <section id='about' className='text-white m-10 '>
            <div>
                <div className='overflow-hidden pb-1 mb-10'>
                    <h1 className='text-4xl lg:text-5xl font-semibold text-foreground'>
                        About Me
                        <span
                            className='block h-1 bg-cyan-300 mt-1 animate-grow'
                            style={{ animation: 'grow 2s infinite ease-in-out' }}
                        ></span>
                    </h1>
                </div>

                {/* Main Description */}
                <div className='mb-16'>
                    <p className='text-lg max-w-2xl text-slate-300 italic border-l-4 border-cyan-300 pl-4'>
                        Frontend developer specializing in React and modern JavaScript ecosystems.
                        Passionate about crafting pixel-perfect UIs with responsive design and smooth
                        interactions. Currently expanding my skills into backend development (Node.js/Express)
                        to build full-stack capabilities.
                    </p>
                </div>

                {/* Detail Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 text-base text-slate-100">
                    <InfoItem label="Birthday" value="24 Sep 2004" />
                    <InfoItem label="Age" value="20" />
                    <InfoItem label="Website" value="ahmedkhan.vercel.app" />
                    <InfoItem label="Phone" value="03098462735" />
                    <InfoItem label="Email" value="ahmedkhan81x@gmail.com" />
                    <InfoItem label="City" value="Karachi, PK" />
                </div>

                {/* Updated Footer Paragraph */}
                <p className='mt-8 text-sm text-slate-400 leading-relaxed max-w-4xl'>
                    I'm constantly driven by curiosity and a desire to improve. Whether it's refining a component or exploring new technologies,
                    I enjoy learning through challenges. My focus is not only on writing clean code but also creating meaningful user experiences
                    that feel intuitive and polished. I aim to contribute to impactful projects where creativity and performance go hand in hand.
                </p>
            </div>

            <style>{`
                @keyframes grow {
                    0% { width: 0; }
                    50% { width: 18rem; }
                    100% { width: 0; }
                }
            `}</style>
        </section>
    );
};

export default About;
