import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

const NAV_LINKS = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#service' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'Contact Us', href: '#contact-us' },
]

const Navbar = ({ theme, setTheme }) => {
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeLink, setActiveLink] = useState('#')

    /* ── scroll-aware glass effect ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    /* ── lock body scroll when drawer is open ── */
    useEffect(() => {
        document.body.style.overflow = sideBarOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [sideBarOpen])

    const handleLinkClick = (href) => {
        setActiveLink(href)
        setSideBarOpen(false)
    }

    return (
        <>
            <header
                className={`
          sticky top-0 z-50 w-full
          transition-all duration-500 ease-in-out
          ${scrolled
                        ? 'py-2.5 bg-white/75 dark:bg-[#07080e]/80 backdrop-blur-2xl border-b border-black/6 dark:border-white/6 shadow-sm shadow-black/4 dark:shadow-black/30'
                        : 'py-4 bg-transparent'
                    }
        `}
            >
                <div className='flex items-center justify-between px-4 sm:px-10 lg:px-20 xl:px-36 max-w-[1440px] mx-auto'>

                    <a href='#' onClick={() => handleLinkClick('#')} className='shrink-0 z-10'>
                        <img
                            src={theme === 'dark' ? assets.logo_dark : assets.logo}
                            alt='ZekeTech'
                            className='h-7 sm:h-8 w-auto transition-opacity duration-200 hover:opacity-75'
                        />
                    </a>

                    <nav className='hidden md:flex items-center gap-1'>
                        {NAV_LINKS.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={() => handleLinkClick(href)}
                                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200 group
                  ${activeLink === href
                                        ? 'text-primary dark:text-primary'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }
                `}
                            >
                                {label}
                                <span className={`
                  absolute bottom-1 left-1/2 -translate-x-1/2
                  h-[3px] rounded-full bg-primary
                  transition-all duration-300
                  ${activeLink === href
                                        ? 'w-4 opacity-100'
                                        : 'w-0 opacity-0 group-hover:w-3 group-hover:opacity-60'
                                    }
                `} />
                            </a>
                        ))}
                    </nav>

                    <div className='flex items-center gap-2 sm:gap-3'>
                        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                        <a
                            href='#contact-us'
                            onClick={() => handleLinkClick('#contact-us')}
                            className='
                hidden sm:flex items-center gap-2
                group relative overflow-hidden
                bg-primary text-white
                px-4 md:px-5 py-2 md:py-2.5
                rounded-full text-sm font-semibold
                shadow-md shadow-primary/25
                hover:shadow-lg hover:shadow-primary/40
                hover:-translate-y-px active:translate-y-0
                transition-all duration-300
              '
                        >
                            <span className='relative z-10'>Connect</span>
                            <img
                                src={assets.arrow_icon}
                                width={13}
                                alt=''
                                className='relative z-10 transition-transform duration-200 group-hover:translate-x-0.5'
                            />
                            <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </a>

                        {/* Hamburger — below md only */}
                        <button
                            onClick={() => setSideBarOpen(true)}
                            aria-label='Open menu'
                            className='
                md:hidden flex items-center justify-center
                w-9 h-9 rounded-xl
                bg-gray-100 dark:bg-white/8
                border border-gray-200 dark:border-white/10
                hover:bg-gray-200 dark:hover:bg-white/14
                transition-colors duration-200
              '
                        >
                            <img
                                src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
                                alt='Menu'
                                className='w-5 h-5'
                            />
                        </button>
                    </div>
                </div>
            </header>

        {/* mobile */}
            <div
                onClick={() => setSideBarOpen(false)}
                className={`
          fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px]
          transition-opacity duration-300 md:hidden
          ${sideBarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
            />

            <aside
                className={`
          fixed top-0 right-0 bottom-0 z-[70]
          w-[min(80vw,300px)] flex flex-col
          bg-white dark:bg-[#0d0e1c]
          border-l border-gray-100 dark:border-white/8
          shadow-2xl shadow-black/20 dark:shadow-black/50
          transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          md:hidden
          ${sideBarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                <div className='flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100 dark:border-white/8'>
                    <img
                        src={theme === 'dark' ? assets.logo_dark : assets.logo}
                        alt='ZekeTech'
                        className='h-7 w-auto'
                    />
                    <button
                        onClick={() => setSideBarOpen(false)}
                        aria-label='Close menu'
                        className='
              w-8 h-8 flex items-center justify-center rounded-lg
              bg-gray-100 dark:bg-white/10
              hover:bg-gray-200 dark:hover:bg-white/18
              transition-colors duration-200
            '
                    >
                        <img src={assets.close_icon} alt='Close' className='w-3.5 h-3.5' />
                    </button>
                </div>

                {/* Links */}
                <nav className='flex-1 overflow-y-auto px-3 py-5 flex flex-col gap-0.5'>
                    <p className='text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 dark:text-gray-600 px-3 mb-3'>
                        Navigation
                    </p>
                    {NAV_LINKS.map(({ label, href }, i) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => handleLinkClick(href)}
                            style={{ transitionDelay: sideBarOpen ? `${i * 45}ms` : '0ms' }}
                            className={`
                flex items-center gap-3 px-4 py-3.5 rounded-xl
                text-sm font-semibold
                transition-all duration-300
                ${sideBarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}
                ${activeLink === href
                                    ? 'bg-primary/10 dark:bg-primary/15 text-primary'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/8 hover:text-gray-900 dark:hover:text-white'
                                }
              `}
                        >
                            <span className={`
                w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200
                ${activeLink === href ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}
              `} />
                            {label}
                            {activeLink === href && (
                                <span className='ml-auto text-primary/50 text-xs'>→</span>
                            )}
                        </a>
                    ))}
                </nav>

                {/* Footer CTA */}
                <div className='px-4 pb-8 pt-3 border-t border-gray-100 dark:border-white/8'>
                    <a
                        href='#contact-us'
                        onClick={() => handleLinkClick('#contact-us')}
                        className='
              flex items-center justify-center gap-2
              w-full py-3.5 rounded-xl
              bg-primary text-white text-sm font-bold
              shadow-md shadow-primary/30
              hover:bg-blue-600 hover:shadow-lg hover:shadow-primary/40
              active:scale-[0.98]
              transition-all duration-200
            '
                    >
                        Let's Connect
                        <img src={assets.arrow_icon} width={13} alt='' />
                    </a>
                    <p className='text-center text-[11px] text-gray-400 dark:text-gray-600 mt-4'>
                        © 2026 ZekeTech
                    </p>
                </div>
            </aside>
        </>
    )
}

export default Navbar