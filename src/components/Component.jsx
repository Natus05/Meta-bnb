import React from 'react'

function Component() {
  return (
    <div>
      <p className='text-black mt-[39px] mx-auto text-[20px] lg:text-[48px] lg:font-[700]'></p>

        <section className='flex flex-col gap-[24px]'>
        <div className='flex flex-col lg:flex-row gap-[24px] justify-center'>
            <div className='flex flex-col justify-center md:flex-row gap-[24px]'>
                <img className='w-[292px] h-[372px] flex justify-center' src='./images/one.png' alt='one' />
                <img className='w-[292px] h-[372px] flex justify-center' src='./images/two.png' alt='two' />
            </div>
            <div className='flex flex-col justify-center md:flex-row gap-[24px]'>
                <img className='w-[292px] h-[372px] flex justify-center' src='./images/three.png' alt='three' />
                <img className='w-[292px] h-[372px] flex justify-center' src='./images/four.png' alt='four' />
            </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-[24px] justify-center'>
            <div className='flex flex-col justify-center md:flex-row gap-[24px]'>
                <img className='w-[292px] h-[372px] flex justify-center' src='./images/five.png' alt='five' />
                <img className='w-[292px] h-[372px] flex justify-center' src='./images/six.png' alt='six' />
            </div>
            <div className='flex flex-col justify-center md:flex-row gap-[24px]'>
                <img className='w-[292px] h-[372px] flex justify-center' src='./images/seven.png' alt='seven' />
                <img className='w-[292px] h-[372px] flex justify-center' src='./images/eight.png' alt='eight' />
            </div>
        </div>
        </section>
    </div>
  )
}

export default Component