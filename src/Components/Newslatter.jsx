import React from 'react'
import banner from "../images/bg-shadow.png"

export default function Newslatter() {
    return (
        <div className="container mx-auto bg-cover md:min-h-[450px] mt-20 rounded-2xl  bg-no-repeat w-full text-center  flex justify-center items-center"
            style={{ backgroundImage: `url(${banner})` }}>
            <div className='space-y-7'>

                <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
                <p>Get the latest updates and news right in your inbox!</p>

                <div className='flex w-full gap-5 items-center'>
                    <input type="email" name="" id="" className='bg-white p-3 border border-gray-200 rounded-2xl w-full ' placeholder='Enter your email' />
                    <button className=' btn bg-linear-to-r p-3 rounded-2xl from-pink-300 to-orange-400'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
