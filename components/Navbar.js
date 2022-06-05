import React, { Fragment } from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedin, FaPinterest } from 'react-icons/fa'
import { Popover, Transition } from '@headlessui/react'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

function Navbar() {
    return (
        <Popover className='sticky top-0 z-1100'>
            <nav className=' max-w-full w-full text-white py-2 lg:py-5 border-b-orange-300 border-b-4' style={{ backgroundColor: "#0A325A" }}>
                <div className='max-w-screen-xl mx-auto flex justify-between'>
                    <div className='w-full'>
                        <div className='md:flex lg:w-2/3 justify-between font-bold gap-1 ml-2 hidden w-full'>
                            <a href='#' className='hover:text-orange-400 uppercase'>Home</a>
                            <a href='#' className='hover:text-orange-400 uppercase'>About Us</a>
                            <a href='#' className='hover:text-orange-400 uppercase'>Services</a>
                            <a href='#' className='hover:text-orange-400 uppercase'>Sectors</a>
                            <a href='#' className='hover:text-orange-400 uppercase'>Jobs</a>
                            <a href='#' className='hover:text-orange-400 uppercase'>Contact Us</a>
                        </div>
                        <div className='md:hidden '>
                            <Popover.Button className="bg-inherit rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-orange-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open main menu</span>
                                <BiMenu className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                    </div>
                    <div className='lg:w-1/3 md:w-2/3 w-full '>
                        <div className='w-1/2 gap-2 mx-auto flex justify-between mt-2 lg:mt-1'>
                            <a href='#' className='hover:text-cyan-500'><FaFacebookF /></a>
                            <a href='#' className='hover:text-cyan-500'><FaTwitter /></a>
                            <a href='#' className='hover:text-cyan-500'><FaGooglePlusG className='w-7' /></a>
                            <a href='#' className='hover:text-cyan-500'><FaLinkedin /></a>
                            <a href='#' className='hover:text-cyan-500'><FaPinterest /></a>
                        </div>
                    </div>
                </div>
            </nav>
            <Transition as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Popover.Panel
                    focus
                    className="absolute md:top-16 z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                <img
                                    className="h-8 w-auto"
                                    src="https://dreamcareers.in/img/logo.png"
                                    alt=""
                                />
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close menu</span>
                                    <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-3">
                            <a href='#' className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                Home
                            </a>
                            <a href='#' className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                About Us
                            </a>
                            <a href='#' className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                Services
                            </a>
                            <a href='#' className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                Contact Us
                            </a>
                        </div>

                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Navbar
