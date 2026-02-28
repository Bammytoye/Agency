import React, { useEffect } from 'react'
import assets from '../assets/assets'

function ThemeToggleBtn({ theme, setTheme }) {

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    }, [theme, setTheme])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='
                relative w-9 h-9 sm:w-10 sm:h-10
                rounded-full overflow-hidden
                border border-gray-200 dark:border-white/12
                bg-gray-100 dark:bg-white/8
                flex items-center justify-center
                hover:bg-gray-200 dark:hover:bg-white/15
                hover:border-gray-300 dark:hover:border-white/20
                hover:scale-105 active:scale-95
                transition-all duration-200
                cursor-pointer
            '
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <img
                src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
                alt={theme === 'dark' ? 'Light mode' : 'Dark mode'}
                className='w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 hover:rotate-12'
            />
        </button>
    )
}

export default ThemeToggleBtn