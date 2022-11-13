import React from 'react'

function Hero() {
  return (
    <div className='grid grid-rows-2 md:grid-cols-2 gap-[99px] mt-[33px] mx-[20px] md:mx-[90px]'>
        <div className='h-[400.08px] w-[646px] p-0 gap-[48px] flex flex-col items-start'>
          <p className='font-[700] text-[56px] leading-[78.4px] text-[#434343]'>Rent a <span className='text-[#A02279]'>Place</span> away from <span className='text-[#A02279]'>Home</span> in the <span className='text-[#A02279]'>Metaverse</span></p>
          <p className='text-[#434343] font-[400] text-[24px] leading-[35px]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          
<form className='w-[618px] h-[54px]'>   
    <label for="default-search" class="mb-2text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <input type="search" id="default-search" class="block p-0 w-[390px] h-[54px] pl-10 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-[#A02279] focus:border-[#A02279]" placeholder="Search for location" required="" />
        <button type="submit" class="text-white h-[54px] w-[230px] absolute right-0 bottom-0 bg-[#A02279] font-medium rounded-lg text-sm px-0 py-0">Search</button>
    </div>
</form>

        </div>
        <div className='h-[459px] w-[476px]'>
          <img className='w-[234px] h-[176px] rounded-[15px] mt-[0px] ml-[242px]' src='./images/image 3.png' alt='3' />
          <img className='w-[234px] h-[176px] rounded-[15px] mt-[-88px] ml-[0px]' src='./images/image 4.png' alt='4' />
          <img className='w-[234px] h-[176px] rounded-[15px] mt-[-80px] ml-[242px]' src='./images/image 5.png' alt='5' />
          <img className='w-[234px] h-[176px] rounded-[15px] mt-[-80px] ml-[0px]' src='./images/image 6.png' alt='6' />
        </div>
    </div>
  )
}

export default Hero