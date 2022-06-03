import React from 'react'

function Header() {
    return (
        <header>
            <div className='py-1'>
                <div className='mx-auto px-4 max-w-full w-full'>
                    <div className='flex justify-between items-center max-w-screen-xl mx-auto '>
                        <a href='#' className='py-5'>
                            <img className='h-24 hidden lg:block' src='https://dreamcareers.in/img/logo.png' />
                        </a>
                        <div className='my-auto flex justify-evenly flex-1 flex-col items-center sm:flex-row'>
                            <a href='mailto:alvvion@gmail.com' className='flex my-1'>
                                <img className='w-12 h-12 mt-2 sm:w-14 sm:h-auto sm:mt-0 lg:w-16 lg:h-auto lg:mt-0' src='https://dreamcareers.in/img/email-icon.png' />
                                <div className='mt-2 lg:mt-1'>
                                    <p className='text-base lg:text-lg font-medium' style={{ color: '#111' }}>director@dream-careers.in</p>
                                    <p className='text-base lg:text-lg font-medium' style={{ color: '#111' }}>deepak.kumar@dreamcareers.in</p>
                                </div>
                            </a>
                            <a href='#' className='flex self-start ml-5'>
                                <img className='w-11 sm:w-14 lg:w-16' src='https://dreamcareers.in/img/mobile-icon.png' />
                                <div className='mt-2 lg:mt-1'>
                                    <p className='text-sm lg:text-base font-normal' style={{ color: '#111' }}>(+91) 9886540250</p>
                                    <p className='text-sm lg:text-base font-normal' style={{ color: '#111' }}>(+91) 9663388674</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
