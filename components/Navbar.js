import React from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedin, FaPinterest } from 'react-icons/fa'

function Navbar() {
    return (
        <nav className='max-w-full w-full text-white py-5 border-b-orange-300 border-b-4' style={{ backgroundColor: "#0A325A" }}>
            <div className='max-w-screen-xl mx-auto flex justify-between'>
                <div className='w-2/3'>
                    <div className='flex w-2/3 justify-between'>
                        <a href='#'>Home</a>
                        <a href='#'>Home</a>
                        <a href='#'>Home</a>
                        <a href='#'>Home</a>
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className='w-1/2 mx-auto flex justify-between mt-1'>
                        <a href='#'><FaFacebookF/></a>
                        <a href='#'><FaTwitter/></a>
                        <a href='#'><FaGooglePlusG className='w-7'/></a>
                        <a href='#'><FaLinkedin/></a>
                        <a href='#'><FaPinterest/></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
