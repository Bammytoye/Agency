import React from 'react'
import { company_logos } from '../assets/assets'

function TrustedBy() {
    return (
        <div className='relative flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-8 text-gray-500 dark:text-white/50 pb-28 sm:pb-36 overflow-hidden'>

            {/* Top divider with label */}
            <div className='flex items-center gap-4 w-full max-w-2xl'>
                <div className='flex-1 h-px bg-gradient-to-r from-transparent to-gray-200 dark:to-white/10' />
                <h3 className='font-semibold text-xs sm:text-sm uppercase tracking-widest text-gray-400 dark:text-white/30 whitespace-nowrap px-2'>
                    Trusted by Leading Companies
                </h3>
                <div className='flex-1 h-px bg-gradient-to-l from-transparent to-gray-200 dark:to-white/10' />
            </div>

            {/* Marquee wrapper */}
            <div className='relative w-full overflow-hidden'>
                {/* Fade edges */}
                <div className='absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#f8f8fc] dark:from-[#060612] to-transparent z-10 pointer-events-none' />
                <div className='absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#f8f8fc] dark:from-[#060612] to-transparent z-10 pointer-events-none' />

                {/* Scrolling track */}
                <div
                    className='flex gap-16 sm:gap-20'
                    style={{
                        width: 'max-content',
                        animation: 'marquee 28s linear infinite',
                    }}
                >
                    {/* Duplicate for seamless loop */}
                    {[...company_logos, ...company_logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt=""
                            className='
                                max-h-5 sm:max-h-6
                                opacity-40 dark:opacity-30
                                hover:opacity-80 dark:hover:opacity-70
                                dark:drop-shadow-xl
                                grayscale hover:grayscale-0
                                transition-all duration-400
                                cursor-pointer
                                flex-shrink-0
                            '
                        />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    )
}

export default TrustedBy