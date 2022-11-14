import React from 'react'

function Footer() {
  return (
    <div>
     <footer class="p-4 bg-[#1D1D1E] sm:p-6">
       <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="https://" class="flex items-center">
           <img src="./images/Group.png" class="mr-3 h-6 sm:h-9" alt="meta-bnb Logo" />
          </a>
          <div className='flex flex-row mt-[50px] gap-[20px]'>
               <img className='' src='./images/facebook.png' alt='facebook' />
               <img className='' src='./images/instagram.png' alt='instagram' />
               <img className='' src='./images/twitter.png' alt='twitter' />
          </div>

        </div>
        <div class="grid grid-cols-2 gap-[60px] lg:mr-[150px] sm:gap-6 sm:grid-cols-3 ">
            <div className='lg:mr-[60px]'>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase">Community</h2>
                <ul class="text-[#F1F3F9]">
                    <li class="mb-4">
                        <a href="https://" class="hover:underline">NFT</a>
                    </li>
                    <li className='mb-4'>
                        <a href="https://" class="hover:underline">Tokens</a>
                    </li>
                    <li class="mb-4">
                        <a href="https://" class="hover:underline">Landlords</a>
                    </li>
                    <li>
                        <a href="https://" class="hover:underline">Discord</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Places</h2>
                <ul class="text-[#F1F3F9]">
                    <li class="mb-4">
                        <a href="https://" class="hover:underline ">Castle</a>
                    </li>
                    <li className='mb-4'>
                        <a href="https://" class="hover:underline">Farms</a>
                    </li>
                    <li class="mb-4">
                        <a href="https://" class="hover:underline ">Beach</a>
                    </li>
                    <li>
                        <a href="https://" class="hover:underline">Learn more</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">About Us</h2>
                <ul class="text-[#F1F3F9]">
                    <li class="mb-4">
                        <a href="#a" class="hover:underline">Road map</a>
                    </li>
                    <li className='mb-4'>
                        <a href="#a" class="hover:underline">Creators</a>
                    </li>
                    <li class="mb-4">
                        <a href="#a" class="hover:underline">Career</a>
                    </li>
                    <li>
                        <a href="#a" class="hover:underline">Contact us</a>
                    </li>
                </ul>
            </div>
    </div>
      </div>
      <span class="mt-[20px] text-sm text-[#F1F3F9] sm:text-center">© 2022 All Metabnb.
      </span>
     </footer>
    </div>
  )
}

export default Footer