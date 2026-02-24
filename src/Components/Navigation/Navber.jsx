// import React, { useRef } from 'react'

// const Navber = () => {
//     const navgreenraf = useRef(null)
//   return (
//     <div className=' z-4 flex fixed top-0 w-full items-start justify-between  '>
//         <img  className='"top-0 lg:w-26 h-44  w-10 ' src="public/car-fotor-bg-remover-20260209022.png" alt="" />
        
//         <div   onMouseEnter={() => {
//                 navgreenraf.current.style.height = '100%'
//             }}
//              onMouseLeave={() =>
//             {
//                 navgreenraf.current.style.height = '0%'
//             }
//         }
//          className=' h-10 bg-black  relative w-[16vw] '>
         
//             <div   ref={navgreenraf} className="bg-[#D3FD50] translate-all absolute top-0 h-0 w-full"></div>
//        <div className="relative"></div>
//         </div>
//     </div>
//   )
// }

// export default Navber
import React, { useRef } from 'react'

const Navber = ({ toggleNav, isNavOpen }) => {
    const navgreenraf = useRef(null)

    return (
        <nav className='z-[110] flex fixed top-0 w-full items-center justify-between px-6 md:px-12 py-4'>
            {/* Logo */}
            <div className="logo">
                <img 
                    className='w-20 md:w-28 object-contain' 
                    src="/car-fotor-bg-remover-20260209022.png" 
                    alt="Logo" 
                />
            </div>
            
            {/* Clickable Menu Button */}
            <div 
                onClick={toggleNav} // Click karne par menu khulega/band hoga
                onMouseEnter={() => {
                    navgreenraf.current.style.height = '100%'
                }}
                onMouseLeave={() => {
                    navgreenraf.current.style.height = '0%'
                }}
                className='h-10 md:h-12 bg-black relative w-[30vw] md:w-[12vw] cursor-pointer overflow-hidden flex items-center justify-center rounded-sm transition-all duration-300'
            >
                {/* Green Hover Background */}
                <div 
                    ref={navgreenraf} 
                    className="bg-[#D3FD50] transition-all duration-300 absolute top-0 h-0 w-full pointer-events-none"
                ></div>

                {/* Text: Changes color on hover via CSS Group or simple logic */}
                <h2 className='relative z-10 font-bold uppercase text-xs md:text-sm tracking-widest text-white transition-colors duration-300 group-hover:text-black'>
                    <div className="flex items-center gap-2">
                        {/* Dot indicator */}
                        <div className={`w-2 h-2 rounded-full ${isNavOpen ? 'bg-red-500' : 'bg-[#D3FD50]'}`}></div>
                        {isNavOpen ? "Close" : "Menu"}
                    </div>
                </h2>
            </div>
        </nav>
    )
}

export default Navber