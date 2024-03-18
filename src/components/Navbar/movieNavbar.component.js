import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiChevronLeft, BiShareAlt, BiMenu } from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          
        </div>
        <div className="w-8 h-8">
       <BiShareAlt className="w-full h-full"/>
       </div>
      </div>
    </>
  );
};



const NavLg = () => {
  return (<>
    <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center w-1/2 ">
            
           <div className="w-12 h-12">
           <img src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="logo" className="w-full h-full" /> 
           </div>
           
             <div className="w-full bg-white flex items-center gap-3 px-3 py-2 rounded-sm ">
        <BiSearch/>
      <input
        type="search" className="w-full focus:outline-none"
        // className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Search for movies, events, plays, sports and activities"
      />
    </div>
          
        </div>
             
           <div className="flex items-center gap-3">
           <span className="text-gray-400 text-xs hover:text-white flex items-center cursor-pointer">
            Kolkata <BiChevronDown /> 
         </span>
          <button className="bg-red-600  text-sm rounded  px-2 py-1 text-white whitespace-nowrap">
            Sign in
            </button>
            <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full"/>
            </div>
            </div>
      {/* Add content for large screen */}
    </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg-relative bg-navCol-900 p-4">
        <div className="md:hidden">
          {/* Mobile screen */}
          <NavSm />
        </div>

        {/* <div className="hidden md:flex lg:hidden"> */}
        <div className="hidden lg:hidden md:block ">
          {/* Tablet screen */}
          <NavSm />
        </div>

        <div className="hidden lg:flex">
          {/* Desktop screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
