
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Fullscreennav = () => {
  const container = useRef();

  useGSAP(() => {
    // Infinite loop animation
    gsap.to(".movex", {
      xPercent: -100,
      repeat: -1,
      duration: 6, // Mobile par thoda slow rakha hai
      ease: "none",
    });
  }, { scope: container });

  const navLinks = [
    { title: "Projects", path: "/projects" },
    { title: "Agence", path: "/agence" },
    { title: "Contact", path: "/contact" },
    { title: "Blogue", path: "/blog" },
  ];

  return (
    <div 
      ref={container}
      id='fullscreen' 
      className='fixed inset-0 h-screen w-full bg-black text-white z-[100] pt-24 md:pt-32 flex flex-col overflow-y-auto'
    >
      {navLinks.map((item, index) => (
        <Link 
          key={index}
          to={item.path}
          // Mobile par touch karte hi marquee dikhe isliye 'active' class use ki hai
          className='group relative w-full border-t border-white py-6 md:py-10 overflow-hidden block transition-colors duration-300 active:bg-[#D3FD50]'
        >
          {/* Default Text - Mobile pe text size 5xl, Desktop pe 8vw */}
          <h1 className='font-[font2] text-center text-5xl md:text-[8vw] uppercase leading-none transition-all duration-500 group-hover:opacity-0 group-active:opacity-0'>
            {item.title}
          </h1>

          {/* Hover/Active Marquee Overlay */}
          <div className='absolute inset-0 bg-[#D3FD50] text-black flex items-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none'>
            
            <div className='flex whitespace-nowrap h-full items-center'>
              
              {/* Animation Part 1 & 2 & 3 (Three parts for smaller screens loop safety) */}
              {[1, 2, 3].map((_, i) => (
                <div key={i} className='movex flex items-center gap-6 md:gap-10 pr-6 md:pr-10'>
                  <h2 className='font-[font2] text-5xl md:text-[8vw] uppercase leading-none'>Pour Tout Voir</h2>
                  <img 
                    className='h-10 w-20 md:h-[6vw] md:w-[12vw] object-cover rounded-full' 
                    src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" 
                    alt="" 
                  />
                  <h2 className='font-[font2] text-5xl md:text-[8vw] uppercase leading-none'>Pour Tout Voir</h2>
                  <img 
                    className='h-10 w-20 md:h-[6vw] md:w-[12vw] object-cover rounded-full' 
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" 
                    alt="" 
                  />
                </div>
              ))}

            </div>
          </div>
        </Link>
      ))}

      {/* Bottom Border */}
      <div className='border-t border-white w-full'></div>

      {/* Mobile Footer Info (Optional) */}
      {/* <div className='flex flex-col md:hidden p-10 gap-4 mt-auto mb-10'>
          <p className='text-gray-400 uppercase text-xs'>Follow Us</p>
          <div className='flex gap-5 text-sm'>
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
      </div> */}
    </div>
  );
};

export default Fullscreennav;