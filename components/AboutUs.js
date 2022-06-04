import React from 'react'

function AboutUs() {
    return (
        <div className='mt-32'>
            <div className='md:w-3/4 w-full mx-3 flex gap-16 md:mx-auto'>
                <div className='w-1/2'>
                    <img className='' src='https://dreamcareers.in/img/video-thumb.jpg' />
                </div>
                <div className='w-1/2 mr-6'>
                    <p className='text-sm font-semibold capitalize mb-3' style={{ color: '#012f5c' }}>Who We Are</p>
                    <h1 className='text-xl lg:text-4xl font-semibold capitalize mb-3' style={{ color: '#0a325a' }}>We Provide Jobs For Freshers & Experience.</h1>
                    <p className='text-base font-normal text-justify my-3' style={{ color: '#3e3e3e' }}>
                        Dreeamcareers Services is one of the Top Consuting Organisations based out from Bangalore. We act as a building bridge between the job seekers and corporate clients, and work very dedicated and hard to ensure that both gets satisfied the needs and expectations.<span className='hidden md:inline'>We ensure this by taking the time to thoroughly understand the specific needs of each of our clients, and then use the best Industry Best Resource tool and techniques to shortlist the most suitable candidates and also understand the candiate career goals requirments and then advice the suitable positions thereby ensuring corporates get the right candidates and the candidate the right opportunity to perform.</span>
                    </p>
                    <p className='hidden lg:block text-base font-normal text-justify my-3' style={{color: '#3e3e3e'}}>
                    DREAMcareers is committed to delivering a thoroughly satisfactory experience with every recruitment assignment. We hold ourselves to extremely high standards of professionalism, integrity and accuracy, and we invite you to explore and experience the same!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
