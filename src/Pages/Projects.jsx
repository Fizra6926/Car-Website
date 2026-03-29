// import React from 'react'
// import Projectimg from '../Components/projects/Projectimg'
// import { useGSAP } from '@gsap/react'
// // import gsap from 'gsap'
// import  { useRef } from "react"
// // import Projectimg from "../Components/projects/Projectimg"

// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// const Projects = () => {
//   const project =[{
//  img1:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0nfR0y10o-u-D4j983Jsx4d0yJQ-kUcuDQ&s',
//    img2: 'data:image/jpeg;base64,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',
//   },{
//    img1:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSheFSXPuX1DsALcYdYurc8xEv62WeyhcYA&s',
//       img2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8A9Nojn1llMBd6th0IxwMd2tFQ482HRVcxw&s'},{
   
//     img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEXOLfnLjWuceKDm9sJ6Fmd09ObYgzPFmww&s',
//     img2: 'data:image/jpeg;base64,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',
//   },{
//    img1:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcfqOO2uEQQD9DMLpS5K6CdRIHbccxArTnQ&s',
//    img2: 'data:image/jpeg;base64,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',
//   }
// ]
// // gsap.registerPlugin('ScrollTrigger')

// // useGSAP(function(){
// //   gsap.from('.hero',
// //     {height:'100px',
// //       stagger:{
// //         amount:0.4
// //  },
// //  scrollTrigger:{
// //   trigger:'.lol',
// //   markers:true,
// //   start:'top 100%',
// //   end:'top-150%',
// //   scrub:true
// //  }

// //     }
// //   )
// // })




// // gsap.registerPlugin(ScrollTrigger)



// //   const containerRef = useRef(null)

// //   useGSAP(() => {

// //     gsap.from(".hero",{
// //       y: 150,
// //       opacity: 0,
// //       duration: 1,
// //       stagger: 0.3,
// //       ease: "power3.out",
// //       scrollTrigger: {
// //         trigger: ".lol",
// //         start: "top 80%",
// //         toggleActions: "play none none reverse",
// //         markers: true // remove after testing
// //       }
// //     })

// //   }, { scope: containerRef }





// // gsap.registerPlugin(ScrollTrigger)

// // useGSAP(() => {
// //   gsap.from(".hero", {
// //     height: 100,
// //     stagger: 0.3,
// //     ease: "power2.out",
// //     scrollTrigger: {
// //       trigger: ".lol",
// //       start: "top 80%",
// //       end: "top 30%",
// //       scrub: true,
// //       markers: true
// //     }
// //   })
// // })

// const container = useRef(null);

//   // Register plugin correctly
//   gsap.registerPlugin(ScrollTrigger);

//   useGSAP(() => {
//     gsap.from(".hero", {
//       height: "100px",
//       stagger: {
//         amount: 0.4,
//       },
//       scrollTrigger: {
//         trigger: ".lol",
//         start: "top 100%",
//         end: "top -150%",   // fixed syntax
//         scrub: true,
//         markers: true,
//       },
//     });
//   }, { scope: container });


//   return (
//     <div className='p-4 md-[100vh]'>
//       <div className=' pt-[45vh]'>
//         <h2 className='font[font2] text-[9.5vw]  uppercase'> Project</h2>
//       </div>
//       <div className='mt-20 lol'>
      
//         {project.map(function(elem,idx){
//           // return <div id={idx} className=' hero w-full  h-[700px] flex gap-4 mb-4 '>
//              <div id={idx}  className='w-full hero h-[700px] flex g ap-4 mb-4 '>
//           <Projectimg  img1={elem.img1}
//           img2={elem.img2}/></div>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Projects




// import R 



//  import React, { useState, useEffect } from "react";

// const Projects = () => {
//   // Shopping Cart State (Local Storage se load hoga)
//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("myCart");
//     return saved ? JSON.parse(saved) : [];
//   });

//   // Category selection state
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Jab bhi cart change ho, use save karein (Delete nahi hoga refresh par)
//   useEffect(() => {
//     localStorage.setItem("myCart", JSON.stringify(cart));
//   }, [cart]);

//   const categories = [
//     { id: 1, name: "Electronics", items: ["Laptop", "Phone", "Watch"] },
//     { id: 2, name: "Fashion", items: ["Shirt", "Shoes", "Jeans"] }
//   ];

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   return (
//     <div className="p-10">
//       <div className="flex justify-between items-center bg-gray-100 p-5 rounded-lg mb-10">
//         <h1 className="text-2xl font-bold">My Store</h1>
//         <div className="bg-blue-600 text-white px-4 py-2 rounded-full">
//           🛒 Shopping: {cart.length} Items
//         </div>
//       </div>

//       {!selectedCategory ? (
//         // Main Cards
//         <div className="grid grid-cols-2 gap-5">
//           {categories.map((cat) => (
//             <div 
//               key={cat.id}
//               onClick={() => setSelectedCategory(cat)}
//               className="p-10 bg-black text-white rounded-xl cursor-pointer hover:scale-105 transition-transform text-center"
//             >
//               <h2 className="text-xl">{cat.name}</h2>
//               <p>Click to see items</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         // Sub-cards (Jab card click ho jaye)
//         <div>
//           <button 
//             onClick={() => setSelectedCategory(null)}
//             className="mb-5 text-blue-500 underline"
//           >
//             ← Back to Categories
//           </button>
//           <h2 className="text-xl mb-5">Items in {selectedCategory.name}:</h2>
//           <div className="grid grid-cols-3 gap-5">
//             {selectedCategory.items.map((item, index) => (
//               <div key={index} className="p-5 border-2 border-black rounded-lg text-center">
//                 <p className="mb-3 font-bold">{item}</p>
//                 <button 
//                   onClick={() => addToCart(item)}
//                   className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                 >
//                   Buy Item
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// export default Projects




// import React, { useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import Projectimg from './Projectimg';

// gsap.registerPlugin(ScrollTrigger);

// const Projects = () => {
//   const container = useRef<HTMLDivElement>(null);

//   const projectData = [
//     {
//       img1: 'https://picsum.photos/seed/p1/800/600',
//       img2: 'https://picsum.photos/seed/p2/800/600',
//     },
//     {
//       img1: 'https://picsum.photos/seed/p3/800/600',
//       img2: 'https://picsum.photos/seed/p4/800/600',
//     },
//     {
//       img1: 'https://picsum.photos/seed/p5/800/600',
//       img2: 'https://picsum.photos/seed/p6/800/600',
//     },
//   ];

//   useGSAP(() => {
//     // Animation for the project cards
//     gsap.from(".hero", {
//       height: "200px",
//       opacity: 0,
//       stagger: 0.2,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: ".lol",
//         start: "top 80%",
//         end: "bottom 20%",
//         scrub: 1,
//         // markers: true, // Uncomment for debugging
//       },
//     });

//     // Animation for the title
//     gsap.from(".project-title", {
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       ease: "power4.out",
//       scrollTrigger: {
//         trigger: ".project-title",
//         start: "top 90%",
//       }
//     });
//   }, { scope: container });

//   return (
//     <div ref={container} className="min-h-screen bg-[#f5f5f5] p-6 md:p-12 font-sans">
//       <div className="pt-[20vh] mb-20 overflow-hidden">
//         <h2 className="project-title text-[12vw] md:text-[9.5vw] font-bold uppercase leading-none tracking-tighter text-zinc-900">
//           Projects
//         </h2>
//       </div>

//       <div className="lol space-y-12 md:space-y-24">
//         {projectData.map((elem, idx) => (
//           <div 
//             key={idx} 
//             className="hero w-full h-[400px] md:h-[700px] overflow-hidden rounded-3xl shadow-lg bg-white p-2 md:p-4"
//           >
//             <Projectimg img1={elem.img1} img2={elem.img2} />
//           </div>
//         ))}
//       </div>
      
//       <div className="h-[20vh]" /> {/* Spacer for scroll */}
//     </div>
//   );
// };

// export default Projects;





// import React, { useState } from "react";

// const Projects = () => {
//   // 1. 8 Cars ka Data
//   const carsData = [
//     { id: 1, name: "Honda Civic", price: 25000, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=60" },
//     { id: 2, name: "Toyota Corolla", price: 22000, image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=500&q=60" },
//     { id: 3, name: "Ford Mustang", price: 45000, image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=500&q=60" },
//     { id: 4, name: "Tesla Model 3", price: 40000, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=500&q=60" },
//     { id: 5, name: "BMW M5", price: 85000, image: "https://images.unsplash.com/photo-1555353540-64fd1b71d999?auto=format&fit=crop&w=500&q=60" },
//     { id: 6, name: "Audi R8", price: 140000, image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=500&q=60" },
//     { id: 7, name: "Mercedes G-Class", price: 130000, image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=500&q=60" },
//     { id: 8, name: "Porsche 911", price: 110000, image: "https://images.unsplash.com/photo-1503376760367-132da84a441e?auto=format&fit=crop&w=500&q=60" },
//   ];

//   // 2. States
//   const [selectedCar, setSelectedCar] = useState(null); // Modal popup ke liye
//   const [cartCount, setCartCount] = useState(0); // Shopping Bag me kitni cars hain uske liye

//   // Submit button ka function
//   const handleSubmit = () => {
//     setCartCount(cartCount + 1); // Bag ka number 1 barha do
//     alert(`Mubarak ho! Aapne ${selectedCar.name} select kar li hai! 🎉`); // Success message
//     setSelectedCar(null); // Modal popup band karne ke liye
//   };

//   return (
//     <div className="p-10 max-w-7xl mx-auto font-sans relative">
      
//       {/* --- HEADER SECTION (Title aur Shopping Bag) --- */}
//       <div className="flex justify-between items-center mb-10">
//         {/* Title ko center mein rakhne ke liye ek empty div */}
//         <div className="w-12"></div> 
        
//         <h1 className="text-4xl font-bold text-center">Premium Car Showroom</h1>
        
//         {/* Shopping Bag Emoji aur Badge */}
//         <div className="relative text-4xl cursor-pointer">
//           🛍️
//           {/* Agar bag me kuch hai tabhi red badge show ho */}
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md border-2 border-white">
//               {cartCount}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* --- CARDS SECTION (8 Cards) --- */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {carsData.map((car) => (
//           <div key={car.id} className="group relative border rounded-xl overflow-hidden shadow-lg cursor-pointer">
//             <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h2 className="text-xl font-bold">{car.name}</h2>
//               <p className="text-gray-600 font-semibold">${car.price.toLocaleString()}</p>
//             </div>

//             {/* Hover karne par ye button show hoga */}
//             <div 
//               onClick={() => setSelectedCar(car)} 
//               className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             >
//               <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-lg hover:bg-gray-200 shadow-md">
//                 Sell
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* --- POPUP MODAL SECTION (Click hone k baad) --- */}
//       {selectedCar && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-[90%] md:w-[400px] shadow-2xl">
//             <h2 className="text-2xl font-bold mb-4 text-center">Confirm Detail</h2>
            
//             {/* Click ki hui Gaari ki Tasveer */}
//             <img src={selectedCar.image} alt="Selected" className="w-full h-48 object-cover rounded-lg mb-4" />
            
//             <div className="flex justify-between items-center mb-8 border-b pb-4">
//               <span className="text-xl font-bold">{selectedCar.name}</span>
//               <span className="text-2xl text-green-600 font-extrabold">${selectedCar.price.toLocaleString()}</span>
//             </div>
            
//             {/* Buttons (Cancel / Submit) */}
//             <div className="flex gap-4">
//               <button 
//                 onClick={() => setSelectedCar(null)} 
//                 className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button 
//                 onClick={handleSubmit} 
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Projects;



























import React, { useState, useEffect } from "react";

const Projects = () => {
  // 1. 8 Cars ka Static Data
  const carsData = [
    { id: 1, name: "Honda Civic", price: 25000, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Toyota Corolla", price: 22000, image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=500&q=60" },
    { id: 3, name: "Ford Mustang", price: 45000, image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "Tesla Model 3", price: 40000, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=500&q=60" },
    { id: 5, name: "BMW M5", price: 85000, image: "https://images.unsplash.com/photo-1555353540-64fd1b71d999?auto=format&fit=crop&w=500&q=60" },
    { id: 6, name: "Audi R8", price: 140000, image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=500&q=60" },
    { id: 7, name: "Mercedes G-Class", price: 130000, image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=500&q=60" },
    { id: 8, name: "Porsche 911", price: 110000, image: "https://images.unsplash.com/photo-1503376760367-132da84a441e?auto=format&fit=crop&w=500&q=60" },
  ];

  // 2. States
  const [allProducts, setAllProducts] = useState(carsData); // Isme static cars + user ki banai hui dono hongi
  const [selectedCar, setSelectedCar] = useState(null); // Modal popup ke liye
  const [cartCount, setCartCount] = useState(0); // Shopping Bag me kitni cars hain uske liye

  // 3. Page load hote hi User ke banaye hue products uthana
  useEffect(() => {
    // Local storage se user ke banaye hue products la rahe hain
    const savedProducts = JSON.parse(localStorage.getItem("myProducts"));
    
    if (savedProducts && savedProducts.length > 0) {
      // CreateCard me humne properties ka naam 'title' rakha tha, 
      // yahan hum unko is file ke hisaab se 'name' me convert kar rahe hain
      const formattedUserProducts = savedProducts.map((prod, index) => ({
        id: `user-prod-${index}`, // Unique ID for keys
        name: prod.title || "User Product",
        price: Number(prod.price) || 0, // Price ko number bana diya
        image: prod.image || "https://via.placeholder.com/500?text=No+Image",
      }));

      // Puraani cars aur user ki nayi cars ko mila kar ek list bana di
      setAllProducts([...carsData, ...formattedUserProducts]);
    }
  }, []);

  // Submit button ka function
  const handleSubmit = () => {
    setCartCount(cartCount + 1); // Bag ka number 1 barha do
    alert(`Mubarak ho! Aapne ${selectedCar.name} select kar li hai! 🎉`); // Success message
    setSelectedCar(null); // Modal popup band karne ke liye
  };

  return (
    <div className="pt-24 p-10 max-w-7xl mx-auto font-sans relative min-h-screen">
      
      {/* --- HEADER SECTION (Title aur Shopping Bag) --- */}
      <div className="flex justify-between items-center mb-10">
        {/* Title ko center mein rakhne ke liye ek empty div */}
        <div className="w-12"></div> 
        
        <h1 className="text-4xl font-bold text-center">Premium Car Showroom</h1>
        
        {/* Shopping Bag Emoji aur Badge */}
        <div className="relative text-4xl cursor-pointer">
          🛍️
          {/* Agar bag me kuch hai tabhi red badge show ho */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md border-2 border-white">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* --- CARDS SECTION (All Products) --- */}
      {/* Yahan carsData ki jagah allProducts use kiya hai taake sab show ho */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((car) => (
          <div key={car.id} className="group relative border rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold line-clamp-1">{car.name}</h2>
              <p className="text-gray-600 font-semibold">${car.price.toLocaleString()}</p>
            </div>

            {/* Hover karne par ye button show hoga */}
            <div 
              onClick={() => setSelectedCar(car)} 
              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-lg hover:bg-gray-200 shadow-md transition-transform transform hover:scale-105">
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- POPUP MODAL SECTION (Click hone k baad) --- */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] md:w-[400px] shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Confirm Detail</h2>
            
            {/* Click ki hui Gaari ki Tasveer */}
            <img src={selectedCar.image} alt="Selected" className="w-full h-48 object-cover rounded-lg mb-4" />
            
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <span className="text-xl font-bold truncate pr-4">{selectedCar.name}</span>
              <span className="text-2xl text-green-600 font-extrabold">${selectedCar.price.toLocaleString()}</span>
            </div>
            
            {/* Buttons (Cancel / Submit) */}
            <div className="flex gap-4">
              <button 
                onClick={() => setSelectedCar(null)} 
                className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit} 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;