   // src/components/page-nav.tsx
   import React, { useState } from "react";

   const PageNav = () => {
     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => {
       setIsOpen(!isOpen);
     };

     return (
       <>
         <div className="w-full bg-black text-white text-center py-2">
           <span>Discount 60% off for first-time buyers!</span>
         </div>

         <nav className="bg-white text-black font-mono relative">
           <div className="flex justify-between items-center h-16 px-4 md:px-12">
             <span className="text-lg font-bold">Exclusive Brand</span>
             <div className="md:hidden">
               <button onClick={toggleMenu} className="focus:outline-none">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                 </svg>
               </button>
             </div>
             <ul className="hidden md:flex space-x-4">
               <li><a href="/" className="p-2">Home</a></li>
               <li><a href="/Contact" className="p-2">Contact</a></li>
               <li><a href="/About" className="p-2">About</a></li>
               <li><a href="/login" className="p-2">signUp</a></li>
             </ul>
             <input type="text" placeholder="Search..." className="hidden md:block p-2 border border-gray-300 rounded-md ml-4" />
           </div>
           <div className={`fixed inset-0 bg-white z-10 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
             <div className="flex justify-end p-4">
               <button onClick={toggleMenu} className="focus:outline-none">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                 </svg>
               </button>
             </div>
             <ul className="flex flex-col space-y-2 p-4">
               <li><a href="/" className="p-2">Home</a></li>
               <li><a href="/Contact" className="p-2">Contact</a></li>
               <li><a href="/About" className="p-2">About</a></li>
               <li><a href="/signUp" className="p-2">signUp</a></li>
             </ul>
             <input type="text" placeholder="Search..." className="p-2 border border-gray-300 rounded-md mt-2" />
           </div>
         </nav>
       </>
     );
   };

   export default PageNav;