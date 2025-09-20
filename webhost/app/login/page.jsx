import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
        <img src="/images/loginHero.svg" alt="login-Hero img" className='relative w-full h-screen z-10' />
        <div className='absolute md:top-40 top-[270px] md:right-[45%] right-[40%] z-100'>
            <img src="/images/login-logo.svg" alt="login-logo img"  className='w-[100px] md:w-full'/>
        </div>
        <div className='bg-white shadow-2xl rounded-xl absolute top-[22%] md:top-[30%] left-25 md:left-50 md:right-50 h-[350px] md:w-1/4 w-3/5 p-6 z-100 mx-auto'>
            <h1 className='text-center text-xl text-black pt-4'>Login</h1>
            <form className='flex flex-col mt-6 gap-3'>
                <input type="email" placeholder='Enter your email' className='border-2 border-gray-300 rounded-lg px-5 py-3 focus:border-[#2B1F51]' />
                <input type="password" placeholder='Enter your password' className='border-2 border-gray-300 rounded-lg px-5 py-3 focus:border-[#2B1F51]' />
                <button type='submit' className='bg-[#2B1F51] py-2 w-[10rem] text-white rounded-sm cursor-pointer block mx-auto mt-4'>Login</button>
            </form>
        </div>
          <p className='text-center text-sm mt-18'>Don't have an account? <Link href='/register' className='font-semibold'>Create new account.</Link></p> 
    </div>
  )
}

export default page

