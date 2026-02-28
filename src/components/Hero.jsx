import React, { useEffect, useRef } from 'react'
import assets from '../assets/assets'

function Hero() {
    const heroRef = useRef(null)

    useEffect(() => {
        const el = heroRef.current
        if (!el) return
        // Staggered fade-up on mount
        const children = el.querySelectorAll('[data-animate]')
        children.forEach((child, i) => {
            child.style.opacity = '0'
            child.style.transform = 'translateY(28px)'
            setTimeout(() => {
                child.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
                child.style.opacity = '1'
                child.style.transform = 'translateY(0)'
            }, 100 + i * 120)
        })
    }, [])

    return (
        <div
            ref={heroRef}
            id="hero"
            className='
        relative flex flex-col items-center gap-6
        py-20 sm:py-28 lg:py-36
        px-4 sm:px-12 lg:px-24 xl:px-40
        text-center w-full overflow-hidden
        text-gray-800 dark:text-white
      '
        >
            {/* Background blobs */}
            <div className='absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-blue-400/10 blur-3xl pointer-events-none' />
            <div className='absolute top-1/2 -left-60 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-500/10 to-primary/5 blur-3xl pointer-events-none' />
            <div className='absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-blue-400/10 blur-2xl pointer-events-none' />

            {/* Badge */}
            <div
                data-animate
                className='
          inline-flex items-center gap-2.5
          border border-gray-200 dark:border-white/10
          bg-white/60 dark:bg-white/5
          backdrop-blur-sm
          px-4 py-2 pr-5 rounded-full
          shadow-sm
        '
            >
                <img src={assets.group_profile} alt="groupProfile" className='w-16 sm:w-20' />
                <div className='flex items-center gap-2'>
                    <span className='relative flex h-2 w-2'>
                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                        <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
                    </span>
                    <p className='text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300'>Trusted by 10k+ people</p>
                </div>
            </div>

            {/* Heading */}
            <h1
                data-animate
                className='
          text-4xl sm:text-5xl md:text-6xl xl:text-[82px]
          font-extrabold xl:leading-[94px]
          max-w-5xl tracking-tight
        '
            >
                Turning imagination into{' '}
                <span className='
          relative inline-block
          bg-gradient-to-r from-primary via-blue-500 to-indigo-500
          bg-clip-text text-transparent
          after:content-[""] after:absolute after:-bottom-1 after:left-0
          after:w-full after:h-[3px] after:rounded-full
          after:bg-gradient-to-r after:from-primary after:to-indigo-500
          after:opacity-40
        '>
                    digital
                </span>{' '}impact.
            </h1>

            {/* Subtext */}
            <p
                data-animate
                className='
          text-sm sm:text-lg
          font-normal text-gray-500 dark:text-gray-400
          max-w-sm sm:max-w-lg pb-2
          leading-relaxed
        '
            >
                Creating meaningful connections and turning big ideas into interactive digital experiences.
            </p>

            {/* CTA Buttons */}
            <div data-animate className='flex flex-wrap items-center justify-center gap-3 sm:gap-4'>
                <a
                    href="#contact-us"
                    className='
            group relative overflow-hidden
            flex items-center gap-2
            bg-primary text-white
            px-6 sm:px-8 py-3 sm:py-3.5
            rounded-full font-medium text-sm sm:text-base
            shadow-lg shadow-primary/30
            hover:shadow-xl hover:shadow-primary/40
            hover:-translate-y-0.5 active:translate-y-0
            transition-all duration-300
          '
                >
                    <span className='relative z-10'>Get Started</span>
                    <img src={assets.arrow_icon} width={14} alt="" className='relative z-10 group-hover:translate-x-1 transition-transform duration-200' />
                    <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </a>

                <a
                    href="#our-work"
                    className='
            flex items-center gap-2
            border border-gray-200 dark:border-white/15
            bg-white/60 dark:bg-white/5
            backdrop-blur-sm
            text-gray-700 dark:text-gray-200
            px-6 sm:px-8 py-3 sm:py-3.5
            rounded-full font-medium text-sm sm:text-base
            hover:border-primary/40 hover:bg-primary/5
            hover:-translate-y-0.5
            transition-all duration-300
          '
                >
                    View Our Work
                </a>
            </div>

            {/* Hero image */}
            <div
                data-animate
                className='
          relative w-full max-w-5xl mt-4
          rounded-2xl overflow-hidden
          border border-black/5 dark:border-white/8
          shadow-2xl shadow-black/10 dark:shadow-black/50
          animate-[float_6s_ease-in-out_infinite]
        '
                style={{ animation: 'float 6s ease-in-out infinite' }}
            >
                {/* Glow behind image */}
                <div className='absolute -inset-1 bg-gradient-to-r from-primary/20 via-blue-400/10 to-indigo-500/20 blur-xl rounded-3xl -z-10' />
                <img
                    src={assets.hero_img}
                    alt="heroImage"
                    className='w-full rounded-2xl block'
                />
            </div>

            {/* Floating bg blob behind image */}
            <img
                src={assets.bgImage1}
                alt=""
                className='absolute -top-80 -right-40 sm:-top-100 sm:-right-70 -z-10 dark:hidden opacity-60'
            />

            <style>{`
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        `}</style>
        </div>
    )
}

export default Hero