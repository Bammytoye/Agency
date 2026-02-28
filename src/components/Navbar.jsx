import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

const Navbar = ({ theme, setTheme }) => {
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={`
        flex justify-between items-center
        px-4 sm:px-12 lg:px-24 xl:px-40
        py-4 sticky top-0 z-50
        transition-all duration-500
        ${scrolled
                    ? 'bg-white/80 dark:bg-[#060612]/80 backdrop-blur-2xl shadow-lg shadow-black/5 dark:shadow-black/30 border-b border-black/5 dark:border-white/5'
                    : 'bg-transparent'
                }
      `}
        >
            {/* Logo */}
            <img
                src={theme === 'dark' ? assets.logo_dark : assets.logo}
                alt="Logo"
                className='w-32 sm:w-40 cursor-pointer hover:opacity-80 transition-opacity duration-200'
            />

            {/* Overlay */}
            {sideBarOpen && (
                <div
                    className='fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden'
                    onClick={() => setSideBarOpen(false)}
                />
            )}

            {/* Nav links */}
            <div
                className={`
            text-sm font-medium
            ${!sideBarOpen ? 'max-sm:-translate-x-full max-sm:opacity-0' : 'max-sm:translate-x-0 max-sm:opacity-100'}
            max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:bottom-0 max-sm:z-50
            max-sm:w-72 max-sm:flex-col max-sm:pt-24 max-sm:pb-10 max-sm:px-8
            max-sm:bg-white dark:max-sm:bg-[#0d0d1a]
            max-sm:shadow-2xl
            flex sm:items-center gap-1 sm:gap-2
            transition-all duration-300 ease-in-out
        `}
            >
                {/* Close button (mobile) */}
                <button
                    className='absolute top-5 right-5 sm:hidden w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors'
                    onClick={() => setSideBarOpen(false)}
                >
                    <img src={assets.close_icon} alt="close" className='w-4 h-4' />
                </button>

                {/* Mobile header */}
                <p className='sm:hidden text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4'>
                    Navigation
                </p>

                {[
                    { label: 'Home', href: '#' },
                    { label: 'Service', href: '#service' },
                    { label: 'Our Work', href: '#our-work' },
                    { label: 'Contact Us', href: '#contact-us' },
                ].map(({ label, href }) => (
                    <a
                        key={label}
                        href={href}
                        onClick={() => setSideBarOpen(false)}
                        className='
                relative px-4 py-2 rounded-lg
                text-gray-600 dark:text-gray-300
                hover:text-primary dark:hover:text-primary
                hover:bg-primary/5 dark:hover:bg-primary/10
                transition-all duration-200
                max-sm:text-base max-sm:font-medium max-sm:w-full
                group
            '
                    >
                        {label}
                        <span className='absolute bottom-1 left-4 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-[calc(100%-2rem)] max-sm:hidden' />
                    </a>
                ))}
            </div>

            {/* Right actions */}
            <div className='flex items-center gap-2 sm:gap-3'>
                <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                {/* Mobile menu button */}
                <button
                    className='sm:hidden w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-100 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors'
                    onClick={() => setSideBarOpen(true)}
                >
                    <img
                        src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
                        alt="Menu"
                        className='w-5 h-5'
                    />
                </button>

                {/* CTA button */}
                <a
                    href="#contact-us"
                    className='
            max-sm:hidden
            group relative overflow-hidden
            flex items-center gap-2
            bg-primary text-white
            px-5 py-2.5 rounded-full
            text-sm font-medium
            shadow-md shadow-primary/25
            hover:shadow-lg hover:shadow-primary/40
            hover:-translate-y-0.5
            active:translate-y-0
            transition-all duration-300
            '
                >
                    <span className='relative z-10'>Connect</span>
                    <img src={assets.arrow_icon} width={13} alt="" className='relative z-10 group-hover:translate-x-0.5 transition-transform duration-200' />
                    <span className='absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </a>
            </div>
        </div>
    )
}

export default Navbar