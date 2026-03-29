import React from 'react'
import logo from "../images/logo.png"

export default function Footer() {
    return (
        <div className='max-w-[1400px] mx-auto bg-[#06091A] pt-30 md:pt-90'>
            <div>
                {/* image div */}
                <div>
                    <img src={logo} alt="" className='mx-auto' />
                </div>
                {/* about div */}
                <div>

                </div>
            </div>
        </div>
    )
}
