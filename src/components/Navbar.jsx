import React from 'react'

function Navbar() {
  return (
    <div className='bg-white'>
        
<nav class="bg-white">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://" class="flex items-center">
      <img src="./images/logo.png" class="mr-3 h-6 sm:h-9" alt="meta-bnb Logo" />
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-[#A02279] hover:bg-[#A02279] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Connect wallet</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 hover:text-blue gap-[48px]">
      <li>
        <a href="#a" class="block py-2 pr-4 pl-3 text-[#434343] rounded md:p-0 font-[400] text-[20px] leading-[25px] hover:text-[#A02279]" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#a" class="block py-2 pr-4 pl-3 text-[#434343] rounded md:p-0 font-[400] text-[20px] leading-[25px] hover:text-[#A02279]">Place to stay</a>
      </li>
      <li>
        <a href="#a" class="block py-2 pr-4 pl-3 text-[#434343] rounded md:p-0 font-[400] text-[20px] leading-[25px] hover:text-[#A02279]">NFTs</a>
      </li>
      <li>
        <a href="#a" class="block py-2 pr-4 pl-3 text-[#434343] rounded md:p-0 font-[400] text-[20px] leading-[25px] hover:text-[#A02279]">Community</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar