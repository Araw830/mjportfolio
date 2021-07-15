import React from "react";


function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-white-700 p-3 shadow-lg ">
    <div class="flex items-center flex-shrink-0 text-black mr-6">
      {/* <svg class="fill-current h-8 w-8 mr-2 text-black" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
      <span class="grey-color text-2xl"> &lt; </span>
      <a class="font-semibold text-xl tracking-tight text-black font-extrabold text-purple-600 ">&nbsp;🅼🅰🆈🅰🅽🅺&nbsp; </a>
      <span class="grey-color text-2xl"> /&gt;</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow ">
          
        <a href="#responsive-header" class="block text-base mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-400 mr-4 uppercase font-extrabold hover:">
          Skills
        </a>
        <a href="#responsive-header" class="block text-base mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-400 mr-4 uppercase font-extrabold">
          Achivements
        </a>
        <a href="#responsive-header" class="block text-base mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-400 uppercase font-extrabold">
          Talks
        </a>

        
      </div>
      <div>
        <button href="#" class="inline-block text-base px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black hover:font-bold hover:text-black mt-4 lg:mt-0 rounded-2xl">HIRE ME</button>
      </div>
    </div>
  </nav>
  );
}

export default Header;
