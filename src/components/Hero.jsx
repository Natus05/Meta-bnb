import React from 'react'

function Hero() {
  return (
    <div className='flex justify-center grid grid-rows-2 lg:grid-cols-2 gap-[0px] lg:gap-[99px] mt-[33px] mx-auto lg:mx-[90px]'>
        <div className='w-[320px] lg:w-[646px] p-0 gap-[15px] lg:gap-[48px] flex flex-col items-start'>
          <p className='font-[700] text-[20px] lg:text-[56px] lg:leading-[78.4px] text-[#434343]'>Rent a <span className='text-[#A02279]'>Place</span> away from <span className='text-[#A02279]'>Home</span> in the <span className='text-[#A02279]'>Metaverse</span></p>
          <p className='text-[#434343] font-[400] text-[12px] lg:text-[24px] lg:leading-[35px]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          
<form className='w-[300px] lg:w-[618px] h-[54px]'>   
    <div class="relative flex flex-col">
        <input type="search" id="default-search" class="block p-0 w-[200px] lg:w-[390px] h-[54px] pl-10 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-[#A02279] focus:border-[#A02279]" placeholder="Search for location" required="" />
        <button type="submit" class="text-white h-[54px] w-[100px] lg:w-[230px] absolute right-0 bottom-0 bg-[#A02279] font-medium rounded-lg text-sm px-0 py-0">Search</button>
    </div>
</form>

        </div>
        <div className='h-[459px] w-[310px] mt-[-120px] md:mt-0 lg:w-[476px]'>
          <img className='w-[150px] md:w-[234px] h-[176px] rounded-[15px] mt-[0px] ml-[160px] md:ml-[242px]' src='./images/image 3.png' alt='3' />
          <img className='w-[150px] md:w-[234px] h-[176px] rounded-[15px] mt-[-88px] ml-[0px]' src='./images/image 4.png' alt='4' />
          <img className='w-[150px] md:w-[234px] h-[176px] rounded-[15px] mt-[-80px] ml-[160px] md:ml-[242px]' src='./images/image 5.png' alt='5' />
          <img className='w-[150px] md:w-[234px] h-[176px] rounded-[15px] mt-[-80px] ml-[0px]' src='./images/image 6.png' alt='6' />
        </div>
    </div>
  )
}

export default Hero