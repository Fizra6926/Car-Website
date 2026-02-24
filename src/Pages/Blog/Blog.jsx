import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP ScrollTrigger ko register karna zaroori hai
gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  // 1. Blog Data
  const blogData = [
    {
      id: 1,
      title: "Top 5 Luxury Cars to Buy in 2024",
      category: "Reviews",
      date: "Oct 15, 2024",
      image: "data:image/jpeg;base64,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",
      excerpt: "Agar aap luxury aur speed dono chahte hain, toh ye top 5 cars aapki wishlist mein zaroor honi chahiye.",
      content: "Luxury cars sirf transportation nahi, balki ek lifestyle hain. 2024 mein Porsche, Mercedes, aur BMW ne apne naye models launch kiye hain jinme AI features aur hybrid engines shamil hain. In gaariyon ki performance aur comfort ka koi muqabla nahi..."
    },
    {
      id: 2,
      title: "Electric Vehicles: The Future of Driving",
      category: "Technology",
      date: "Oct 10, 2024",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80",
      excerpt: "Janiye ke kaise Electric Vehicles (EVs) humari duniya aur driving ke tareeqay ko badal rahi hain.",
      content: "Tesla aur dusri bari companies ne EV market ko badal kar rakh diya hai. Zero emission aur sasti fuel cost ki wajah se log ab petrol cars chhor kar electric cars ki taraf aa rahe hain. Fast charging stations ab har jagah dastiyab hain..."
    },
    {
      id: 3,
      title: "Apni Gaari Ka Engine Kaise Maintain Rakhein?",
      category: "Tips & Tricks",
      date: "Oct 05, 2024",
      image: "data:image/jpeg;base64,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",
      excerpt: "Kuch asaan tips jinki madad se aap apni gaari ki life aur performance ko behtar bana sakte hain.",
      content: "Time par oil change karna, air filter saaf rakhna, aur tyre pressure maintain rakhna kisi bhi gaari ke engine ki life barha sakta hai. Is article mein hum aapko 5 aisi tips batayenge jo har car owner ko pata honi chahiye..."
    }
  ];

  // 2. States & Refs
  const [selectedPost, setSelectedPost] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // 3. GSAP Animation
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", 
        },
      });
    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-50 py-20 px-6 md:px-12 font-sans relative">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Latest News & Blogs</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Automobile ki dunya ki latest news, reviews aur tips parhein hamare experts se.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogData.map((post) => (
          <div 
            key={post.id} 
            ref={addToRefs} 
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer flex flex-col"
          >
            <div className="relative overflow-hidden h-60">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                {post.category}
              </span>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <span className="text-gray-400 text-sm font-medium mb-2">{post.date}</span>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                {post.excerpt}
              </p>
              
              <button 
                onClick={() => setSelectedPost(post)}
                className="mt-auto text-left font-bold text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors"
              >
                Read More 
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-10 transition-colors"
            >
              ✕
            </button>

            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-72 object-cover" />
            <div className="p-8">
              <span className="text-blue-600 font-bold uppercase tracking-wide text-sm mb-2 block">
                {selectedPost.category} • {selectedPost.date}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                {selectedPost.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 whitespace-pre-line">
                {selectedPost.content}
              </p>
              
              <div className="border-t pt-6 flex justify-end">
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Blog;