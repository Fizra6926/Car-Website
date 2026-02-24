
   import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP ScrollTrigger ko register karna zaroori hai
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {{
  // GSAP Animations ke liye Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    // GSAP Context (React 18 ke liye best practice)
    let ctx = gsap.context(() => {
      
      // 1. Heading Animation (Upar se niche fade in)
      gsap.from(headingRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Jab section screen ke 80% hisse par aaye tab chale
        },
      });

      // 2. Left Side Info Animation (Left se right slide)
      gsap.from(leftSideRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // 3. Right Side Form Animation (Right se left slide)
      gsap.from(rightSideRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

    }, sectionRef); // Scope for GSAP

    return () => ctx.revert(); // Component unmount hone par memory clear kare
  }, []);

  // Form Submit Function
  const handleSubmit = (e) => {
    e.preventDefault(); // Page refresh hone se roke
    alert("Shukriya! Aapka message hamein mil gaya hai. Hum jald aapse rabta karenge.");
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-50 flex items-center justify-center p-6 md:p-12 font-sans overflow-hidden">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Heading */}
        <div ref={headingRef} className="text-center py-10 bg-black text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Get In Touch</h1>
          <p className="text-gray-400 text-lg">We would love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* LEFT SIDE: Contact Information */}
          <div ref={leftSideRef} className="p-10 md:p-16 bg-gray-100 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Kya aapko apni pasandeeda gaari ke baare mein kuch poochna hai? Ya test drive book karni hai? Form fill karein ya humein direct call karein!
            </p>

            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <span className="text-3xl">📍</span>
                <span className="text-gray-700 font-medium">123 Car Street, Auto City, PK</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl">📞</span>
                <span className="text-gray-700 font-medium">+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl">✉️</span>
                <span className="text-gray-700 font-medium">info@carshowroom.com</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div ref={rightSideRef} className="p-10 md:p-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ali Khan" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="ali@example.com" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </div>

              {/* Message Box */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                <textarea 
                  rows="4" 
                  required
                  placeholder="I want to buy the Honda Civic..." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button (Hover Animation Tailwind se) */}
              <button 
                type="submit" 
                className="w-full bg-black text-white font-bold text-lg py-4 rounded-lg hover:bg-gray-800 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                Send Message 🚀
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>

  );
};}

export default Contact;
