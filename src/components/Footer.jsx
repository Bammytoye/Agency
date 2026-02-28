import React from 'react'
import assets from '../assets/assets'

function Footer({ theme }) {
    return (
        <footer className='
            relative
            bg-white dark:bg-gray-950
            border-t border-gray-100 dark:border-white/6
            pt-14 sm:pt-20
            mt-20 sm:mt-32
            overflow-hidden
        '>
            {/* Subtle top glow */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-24 bg-gradient-to-b from-primary/5 to-transparent blur-2xl pointer-events-none' />

            <div className='px-4 sm:px-10 lg:px-24 xl:px-40 relative'>

                <div className='flex justify-between lg:items-start max-lg:flex-col gap-10 lg:gap-16'>

                    {/* Left Section */}
                    <div className='space-y-5 text-sm text-gray-600 dark:text-gray-400 max-w-xs'>
                        <img
                            src={theme === 'dark' ? assets.logo_dark : assets.logo}
                            alt='ZekeTech Logo'
                            className='w-32 sm:w-44'
                        />
                        <p className='leading-relaxed text-gray-500 dark:text-gray-500'>
                            From strategy to execution, we craft digital solutions that move your business forward.
                        </p>

                        {/* Nav links */}
                        <ul className='flex flex-wrap gap-x-6 gap-y-2'>
                            {[
                                { label: 'Home', href: '#hero' },
                                { label: 'Services', href: '#services' },
                                { label: 'Our Work', href: '#our-work' },
                                { label: 'Contact Us', href: '#contact-us' },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className='hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium'
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section — Newsletter */}
                    <div className='
                        relative overflow-hidden
                        w-full max-w-sm lg:max-w-md
                        rounded-2xl p-6 sm:p-8
                        bg-gradient-to-br from-primary/5 via-blue-500/5 to-indigo-500/5
                        dark:from-primary/15 dark:via-blue-500/10 dark:to-indigo-600/15
                        border border-primary/10 dark:border-primary/20
                    '>
                        {/* Decorative glow blobs (dark only) */}
                        <div className='absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 dark:bg-primary/25 blur-2xl pointer-events-none' />
                        <div className='absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-indigo-500/10 dark:bg-indigo-400/20 blur-2xl pointer-events-none' />

                        {/* Icon badge */}
                        <div className='relative mb-4 w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 border border-primary/15 dark:border-primary/30 flex items-center justify-center text-lg'>
                            📬
                        </div>

                        <h3 className='relative font-bold text-gray-800 dark:text-white text-base sm:text-lg mb-2'>
                            Subscribe to our newsletter
                        </h3>
                        <p className='relative text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed'>
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>

                        <div className='relative flex gap-2'>
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='
                                    flex-1 px-4 py-3 rounded-xl text-sm
                                    bg-white dark:bg-[#0d0f1f]
                                    border border-gray-200 dark:border-white/12
                                    text-gray-700 dark:text-gray-100
                                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                                    outline-none
                                    focus:border-primary dark:focus:border-primary/70
                                    focus:ring-2 focus:ring-primary/10 dark:focus:ring-primary/15
                                    transition-all duration-200
                                '
                            />
                            <button className='
                                relative overflow-hidden group
                                bg-primary dark:bg-primary
                                text-white
                                px-5 py-3 rounded-xl
                                text-sm font-semibold
                                shadow-md shadow-primary/30 dark:shadow-primary/40
                                hover:shadow-lg hover:shadow-primary/40 dark:hover:shadow-primary/50
                                hover:-translate-y-0.5 active:translate-y-0
                                transition-all duration-200
                                whitespace-nowrap
                            '>
                                <span className='relative z-10'>Subscribe</span>
                                <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className='my-10 border-gray-100 dark:border-white/6' />

                {/* Bottom footer */}
                <div className='pb-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <p className='text-xs sm:text-sm text-gray-400 dark:text-gray-600'>
                        © 2026 ZekeTech. All Rights Reserved.
                    </p>

                    {/* Social icons */}
                    <div className='flex items-center gap-3'>
                        {[
                            { src: assets.facebook_icon, alt: 'Facebook' },
                            { src: assets.instagram_icon, alt: 'Instagram' },
                            { src: assets.twitter_icon, alt: 'Twitter' },
                            { src: assets.linkedin_icon, alt: 'LinkedIn' },
                        ].map(({ src, alt }) => (
                            <a
                                key={alt}
                                href="#"
                                aria-label={alt}
                                className='
                                    w-9 h-9 rounded-full
                                    border border-gray-200 dark:border-white/10
                                    bg-white dark:bg-white/5
                                    flex items-center justify-center
                                    hover:border-primary/40 hover:bg-primary/8 dark:hover:bg-primary/15
                                    hover:-translate-y-0.5
                                    transition-all duration-200
                                '
                            >
                                <img src={src} alt={alt} className='w-4 h-4 opacity-60 hover:opacity-100 transition-opacity' />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer