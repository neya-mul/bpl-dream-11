import React from 'react'

export default function Form() {
  return (
    <div className='text-white mx-auto max-w-[300px] space-y-3'>

      <h1 className='text-2xl'>Subscribe</h1>
      <p>Subscribe to our newsletter for the latest updates.</p>

      <div className='flex w-full gap-5 items-center'>
        <input type="email" name="" id="" className='bg-white p-3 border border-gray-200 rounded-xl w-full text-gray-500' placeholder='Enter your email' />
        <button className=' btn  bg-linear-to-r py-6 rounded-2xl from-pink-300 to-orange-400'>Subscribe</button>
      </div>
    </div>
  )
}
