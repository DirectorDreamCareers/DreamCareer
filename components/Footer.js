import React from 'react'

function Footer() {
    return (
        <footer style={{ backgroundColor: "#0A325A" }}>
            <div className='mx-auto py-5 text-white border-b border-b-slate-100' style={{ maxWidth: "1227px" }}>
                <div className='grid grid-cols-4 gap-8'>
                    <p className='text-center'>
                        About Us
                    </p>
                    <p className='text-center'>
                        Current Openings
                    </p>
                    <p className='text-center'>
                        Quick Links
                    </p>
                    <p className='text-center'>
                        Contact Us
                    </p>
                    <p className='text-justify '>
                        Dream Careers Services is one of the Top Consuting Organisations based out from Bangalore. We act as a building bridge between the job seekers and corporate clients, and work very dedicated and hard to ensure that both gets satisfied the needs and expectations.
                    </p>
                    <div>
                        <a href='#' className='pb-3 pl-3 border-b border-dotted block hover:text-orange-400'>Java Developer</a>
                        <a href='#' className='p-3 border-b border-dotted block hover:text-orange-400'>Senior Java Developer</a>
                        <a href='#' className='p-3 border-b border-dotted block hover:text-orange-400'>Andorid Developer</a>
                        <a href='#' className='p-3 border-b border-dotted block hover:text-orange-400'>IOS Developer</a>
                    </div>
                    <div>
                        <a href='#' className='pb-3 pl-3 border-b border-dotted block hover:text-orange-400'>Home</a>
                        <a href='#' className='p-3 border-b border-dotted block hover:text-orange-400'>About Us</a>
                        <a href='#' className='p-3 border-b border-dotted block hover:text-orange-400'>Service</a>
                        <a href='#' className='p-3 border-b border-dotted block hover:text-orange-400'>Contact Us</a>
                    </div>
                    <p className=''>5th Floor - Gopalan Innovation Mall, 22, Bannerghatta Main Rd, JP Nagar, Bengaluru-560076
                        <br/>
                        <br/>
                        (+91) 9886540250 | 9663388674
                        <br/>
                        <br/>
                        contact@dreamcareers.in
                        deepak.kumar@dreamcareers.in</p>
                </div>
            </div>
            <p className='text-center text-lg font-medium my-7 pb-7 text-white'>Dream Careers © 2021-2022. Web Solutions by <span className='text-orange-400'>
            Render Infotech</span>. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
