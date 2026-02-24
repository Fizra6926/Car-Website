// import React, { useRef } from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'

// const Agence = () => {
//   gsap.registerPlugin(ScrollTrigger)
// const imageDivRef = useRef(null)
// const imageRef = useRef(null)

// const imageArray = [
//   'https://www.shutterstock.com/image-photo/women-human-face-business-260nw-292552883.jpg',
//   'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
//   'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
//   'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
//   'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
//   'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
// ]

// //  useGSAP(function () {

// //   gsap.to(imageDivRef.current, {
 
// //     scrollTrigger: {
// //       trigger: imageDivRef.current,
// //         markers:true,
// //       start: "top 28%",
// //       end: "top -100%",
// // pin:true,

  

// // onUpdate:(elem) =>{
// // let imageIndex
// // if(elem.progress<1){
// //    imageIndex = Math.floor(elem.progress * imageArray.length)
// // }else{
// //   imageIndex = imageArray.length-1
// // }
// //   imageRef.current.src = imageArray[imageIndex]
// // }
// // onUpdate: (elem) => {
// //   const imageIndex = Math.min(
// //     imageArray.length - 1,
// //     Math.floor(elem.progress * imageArray.length)
// //   )

// //   imageRef.current.src = imageArray[imageIndex]
// // }

// //   console.log(hi);
  
// // }
  
  
//     //   if (!imageRef.current) return

//     //   const imageIndex = Math.min(
//     //     imageArray.length - 1,
//     //     Math.floor(self.progress * imageArray.length)
//     //   )

//     //   imageRef.current.src = imageArray[imageIndex]
//     // }








// useGSAP(() => {
//   ScrollTrigger.create({
//     trigger: imageDivRef.current,
//     start: "top 30%",
//     end: "top -100%",
//     scrub: true,
//     pin: true,

//     onUpdate: (self) => {
//       if (!imageRef.current) return

//       const index = Math.min(
//         imageArray.length - 1,
//         Math.floor(self.progress * imageArray.length)
//       )

//       imageRef.current.src = imageArray[index]
//     }
//   })
// })


   
 
//   return (
//     <div>
//     <div className='section1'>  
//       <div ref={imageDivRef} className='h-[20vw] overflow-hidden w-[15vw] rounded-3xl  left-80 absolute top-60 '>
//         <img className='h-full w-full' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
//       </div>
//     <div  className='  relative font-[font2]'>
//       <div className=' mt-[50vh]'>
//       <h1 className='text-[19vw] text-center uppercase leading-[15vw]'>SEVEN7Y <br />
// TWO</h1>
//     </div>
//          <div className='pl-[40%] mt-20'>
//           <p className='text-[20px] font-bold  w-1/2 h-2  '> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We are a trusted car agency dedicated to delivering quality, comfort, and performance. Our wide range of vehicles is designed to meet modern driving needs, offering smooth rides, easy handling, and advanced safety features. From city drives to long journeys, we ensure reliability, style,and customer satisfaction at every step. Choose us for a smarter, safer, and more enjoyable driving experience.
// </p>  </div></div></div>

 
//  <div className="section2 clear-both-screen"></div>
//  </div> )
// }

// export default Agence


// second

// import React, { useRef } from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'

// gsap.registerPlugin(ScrollTrigger)

// const Agence = () => {
//   const imageDivRef = useRef(null)
//   const imageRef = useRef(null)

//  const imageArray = [
//   // 'https://www.shutterstock.com/image-photo/women-human-face-business-260nw-292552883.jpg',
//   'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
//   'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
//   'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
//   'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
//   'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
//   'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
//   'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
//   'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6'
// ]

//   useGSAP(() => {
//     ScrollTrigger.create({
//       trigger: imageDivRef.current,
//       start: "top 30%",
//       end: "top -150%",
//       scrub: true,
//       pin: true,
    

//       onUpdate: (self) => {
//         if (!imageRef.current) return

//         const index = Math.min(
//           imageArray.length - 1,
//           Math.floor(self.progress * imageArray.length)
//         )

//         imageRef.current.src = imageArray[index]
//       }
//     })
//   })

//   return (
//     <div>
//       <div className="section1 relative">
//         <div
//           ref={imageDivRef}
//           className="h-[20vw] overflow-hidden w-[15vw] rounded-3xl  left-60 absolute top-[-60%]"
//         >


//           <img
//             ref={imageRef}
//             src={imageArray[0]}
//             className="h-full w-full object-cover"
//             alt=""
//           />
//         </div>

//        <div  className='  relative font-[font2]'>
//       <div className=' mt-[50vh]'>
//       <h1 className='text-[19vw] text-center uppercase leading-[15vw]'>SEVEN7Y <br /> TWO</h1>
//    </div>
//         <div className='pl-[40%] mt-20'>
//           <p className='text-[20px] font-bold  w-[40%] h-2  '> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We are a trusted car agency dedicated to delivering quality, comfort, and performance. Our wide range of vehicles is designed to meet modern driving needs, offering smooth rides, easy handling, and advanced safety features. From city drives to long journeys, we ensure reliability, style,and customer satisfaction at every step. Choose us for a smarter, safer, and more enjoyable driving experience.
//  </p>  </div></div></div>

//   <div className="section2 clear-both-screen"></div>
// </div>
   
//   )
// }

// export default Agence








// third


// import React, { useRef } from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'

// gsap.registerPlugin(ScrollTrigger)

// const Agence = () => {
//   const sectionRef = useRef(null) // Puri section ke liye ref
//   const imageRef = useRef(null)

//   const imageArray = [
//     'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
//     'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
//     'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
//     'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
//     'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
//     'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
//     'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
//     'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6'
//   ]

//   useGSAP(() => {
//     // ScrollTrigger instance
//     ScrollTrigger.create({
//        trigger: sectionRef.current, // Poore container ko trigger banaya
//       // start: "top top",            // Jab section top pe aaye
//       // end: "+=300%",               // Kitna lamba scroll chalega (300% matlab 3 screen height)
  
//       start: "top 30%",
//       end: "top -200%",
    
    
//       scrub: true,                    // Smooth scroll
//       pin: true,                   // Poori section ko lock kar diya

//       onUpdate: (self) => {
//         if (!imageRef.current) return

//         // Behtar calculation index ke liye
//         const totalImages = imageArray.length
//         let index = Math.floor(self.progress * totalImages)
        
//         // Safety check taaki last index se bahar na jaye
//         if (index >= totalImages) index = totalImages - 1

//         // Photo tabhi change hogi jab index badlega (performance ke liye)
//         if (imageRef.current.src !== imageArray[index]) {
//             imageRef.current.src = imageArray[index]
//         }
//       }
//     })
//   }, { scope: sectionRef })

//   return (
//     <div ref={sectionRef} className="w-full bg-white">
//       {/* Wrapper jo content ko center ya position karega */}
//       <div className="section1 relative h-screen w-full flex items-center">
        
//         {/* Image Div: Absolute rakha hai par container ke hisab se */}
//         <div className=
//         // absolute left-[15%] top-[15%] h-[25vw] w-[18vw] overflow-hidden rounded-3xl shadow-2xl z-20"
//      "h-[20vw] overflow-hidden w-[15vw] rounded-3xl  left-60 absolute top-[-10%] "  >
//           <img
//             ref={imageRef}
//             src={imageArray[0]}
//             className="h-full w-full object-cover"
//             alt="Team"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="w-full relative font-[font2]">
//           <div className="mt-[-10vh]">
//             <h1 className="text-[19vw] text-center uppercase leading-[15vw] font-bold">
//               SEVEN7Y <br /> TWO
//             </h1>
//           </div>
          
//           <div className="flex justify-end pr-20 mt-10">
//             {/* <p className="text-[20px] font-bold w-[40%] leading-tight">
//               We are a trusted car agency dedicated to delivering quality, comfort, and performance. Our wide range of vehicles is designed to meet modern driving needs...
//             </p> */}


//                    <p className='text-[20px] font-bold  w-[40%] leading-tight '> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We are a trusted car agency dedicated to delivering quality, comfort, and performance. Our wide range of vehicles is designed to meet modern driving needs, offering smooth rides, easy handling, and advanced safety features. From city drives to long journeys, we ensure reliability, style,and customer 
//             satisfaction at every step. Choose us for a smarter, safer, and more enjoyable driving experience  </p>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Agence




// four



// import React, { useRef, useEffect } from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'

// gsap.registerPlugin(ScrollTrigger)

// const Agence = () => {
//   const sectionRef = useRef(null) 
//   const imageDivRef = useRef(null) 
//   const imageRef = useRef(null)    

//   const imageArray = [
//     'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
//     'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
//     'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
//     'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
//     'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
//     'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
//     'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
//     'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6'
//   ]

//   // IMPORTANT: Images ko pehle hi load kar lo taaki scroll par white na dikhe
//   useEffect(() => {
//     imageArray.forEach((src) => {
//       const img = new Image();
//       img.src = src;
//     });
//   }, []);

//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "+=300%", 
//         scrub: 0.5,      // Thoda fast scrub rakha hai taaki responsive lage
//         pin: true,     
//         onUpdate: (self) => {
//           if (!imageRef.current) return;
//           const totalImages = imageArray.length;
//           const index = Math.floor(self.progress * (totalImages - 0.001));
          
//           // Sirf tab change karo jab zaroorat ho (performance)
//           if (imageRef.current.src !== imageArray[index]) {
//             imageRef.current.src = imageArray[index];
//           }
//         }
//       }
//     })

//     // Image ko top se middle-bottom tak le jayenge
//     tl.to(imageDivRef.current, {
//       y: "40vh",      
//       ease: "none"
//     })

//   }, { scope: sectionRef })

//   return (
//     <div className="w-full bg-white">
//       {/* Container */}
//       <div ref={sectionRef} className="w-full h-screen relative overflow-hidden">
        
//         {/* IMAGE BOX - Iska z-index aur position check karein */}
//         <div 
//           ref={imageDivRef}
//           className="absolute left-[15%] top-[10%] h-[30vw] w-[22vw] overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-[100] bg-gray-200"
//         >
//           <img
//             ref={imageRef}
//             src={imageArray[0]}
//             className="h-full w-full object-cover block"
//             alt="Team Sequence"
//             style={{ display: 'block' }} // Force display
//           />
//         </div>

//         {/* BACKGROUND TEXT */}
//         <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-10">
//           <h1 className="text-[19vw] text-center uppercase leading-[15vw] font-black select-none">
//             SEVEN7Y <br /> TWO
//           </h1>
          
//           <div className="flex justify-end w-full pr-20 mt-10">
//             <p className="text-[1.2vw] font-bold w-[35%] text-justify leading-snug text-black/80">
//                We are a trusted car agency dedicated to delivering quality, comfort, and performance. 
//                Our wide range of vehicles is designed to meet modern driving needs, offering smooth 
//                rides and reliability.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Neeche wali section (Zaroori hai scroll ke liye)
//       <div className="h-screen w-full bg-zinc-900 flex items-center justify-center">
//           <h2 className="text-white text-5xl font-bold">NEXT CONTENT</h2>
//       </div> */}
//     </div>
//   )
// }

// export default Agence




// sahi code
import React, { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Agence = () => {
  const sectionRef = useRef(null)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6'
  ]

  // Images ko cache mein pehle se load karna taaki scroll smooth ho
  useEffect(() => {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%", // Scroll ki lambaai
        scrub: 1,      // Smooth scroll sync
        pin: true,     // Section ko screen par rok ke rakhega
        onUpdate: (self) => {
          if (!imageRef.current) return;
          const totalImages = imageArray.length;
          // Progress ke hisab se index nikalna (0 se imageArray.length - 1)
          const index = Math.floor(self.progress * (totalImages - 0.001));
          
          if (imageRef.current.src !== imageArray[index]) {
            imageRef.current.src = imageArray[index];
          }
        }
      }
    });

    // Image ko scroll ke saath thoda niche move karne ke liye
    tl.to(imageDivRef.current, {
      y: "30vh", 
      ease: "none"
    });

  }, { scope: sectionRef });

  return (
    <div className="w-full bg-white">
      {/* Wrapper Section */}
      <div ref={sectionRef} className="relative w-full h-screen overflow-hidden flex flex-col justify-center">
        
        {/* IMAGE BOX - High Z-Index taaki text ke upar rahe */}
        <div 
          ref={imageDivRef}
          className=
          "absolute left-[20%] top-[6%] h-[28vw] w-[20vw] overflow-hidden rounded-3xl shadow-2xl z-2 bg-gray-200"
        >
          <img
            ref={imageRef}
            src={imageArray[0]}
            className="h-full w-full object-cover"
            alt="Sequence"
          />
        </div>

        {/* TEXT CONTENT - Text Black aur lower Z-Index */}
        <div className="relative z-10 w-full px-10 pointer-events-none">
          <div className="text-center  top-[30%]">
            <h1 className="text-[19vw]    font-[font2] uppercase leading-[17vw] ">
              SEVEN7Y <br /> TWO
            </h1>
          </div>
         
          <div className="flex justify-end pr-5 mt-5">
            <p className="text-[15px] font-bold w-[45%] text-black leading-tight text-justify">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    We are a trusted car agency dedicated to delivering quality, comfort, and performance. 
              Our wide range of vehicles is designed to meet modern driving needs, offering smooth 
              rides, easy handling, and advanced safety features. From city drives to long journeys, 
              we ensure reliability, style, and customer satisfaction at every step.
            </p>
          </div>
        </div>
      </div> 
</div>
        
  )
}

export default Agence