import React from 'react'
import logo from "../images/logo.png"
import About from './About'
import Links from './Links'
import Form from './Form'

export default function Footer() {
    return (
        <div className='max-w-[1400px] mx-auto bg-[#06091A] pb-10 pt-30 md:pt-90'>
            <div className=' space-y-3.5'>
                {/* image div */}
                <div>
                    <img src={logo} alt="" className='mx-auto' />
                </div>
                {/* about div */}
                <div className='p-10 flex flex-wrap gap-10 text-center lg:text-left'>
                    <About></About>
                    <Links></Links>
                    <Form></Form>

                </div>
                <hr />

                <div className='text-center text-white'>
                    <p>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}
