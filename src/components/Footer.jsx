import React from 'react'
import assets from '../assets/assets'

function Footer({ theme }) {
    return (
        <div className='bg-slate-50 dark:bg-gray-900 pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>

            <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>

                {/* Left Section */}
                <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                    <img
                        src={theme === 'dark' ? assets.logo_dark : assets.logo}
                        alt='ZekeTech Logo'
                        className='w-32 sm:w-44'
                    />
                    <p className='max-w-md'>
                        From strategy to execution, we craft digital solutions that move your business forward.
                    </p>

                    <ul className='flex flex-wrap gap-8'>
                        <li><a className='hover:text-primary transition' href="#hero">Home</a></li>
                        <li><a className='hover:text-primary transition' href="#services">Services</a></li>
                        <li><a className='hover:text-primary transition' href="#our-work">Our Work</a></li>
                        <li><a className='hover:text-primary transition' href="#contact-us">Contact Us</a></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className='text-gray-600 dark:text-gray-400 max-w-md'>
                    <h3 className='font-semibold'>Subscribe to our newsletter</h3>
                    <p className='text-sm mt-2 mb-6'>
                        The latest news, articles, and resources, sent to your inbox weekly.
                    </p>

                    <div className='flex gap-2 text-sm'>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            className='w-full p-3 rounded bg-transparent border border-gray-300 dark:border-gray-600 
                                    outline-none focus:ring-2 focus:ring-primary 
                                    dark:text-gray-200'
                        />
                        <button className='bg-primary text-white rounded px-6 hover:opacity-90 transition'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <hr className='my-10 border-gray-200 dark:border-gray-700' />

            {/* Bottom Footer */}
            <div className='pb-6 text-sm text-gray-500 flex items-center justify-center sm:justify-between gap-4 flex-wrap'>
                <p>© 2026 ZekeTech. All Rights Reserved.</p>

                <div className='flex items-center gap-4'>
                    <img src={assets.facebook_icon} alt="Facebook" className='cursor-pointer hover:opacity-70 transition' />
                    <img src={assets.instagram_icon} alt="Instagram" className='cursor-pointer hover:opacity-70 transition' />
                    <img src={assets.twitter_icon} alt="Twitter" className='cursor-pointer hover:opacity-70 transition' />
                    <img src={assets.linkedin_icon} alt="LinkedIn" className='cursor-pointer hover:opacity-70 transition' />
                </div>
            </div>
        </div>
    )
}

export default Footer
