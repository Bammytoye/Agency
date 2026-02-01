import React, { useEffect } from 'react'
import assets from '../assets/assets'

function ThemeToggleBtn({ theme, setTheme }) {

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefer-color-scheme: dark)').matches;
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
        <div>
            <button>
                {theme === 'dark' ? (
                    <img onClick={() => setTheme('light')} src={assets.sun_icon} alt="SunIcon" className='size-8.5 p-1.5 border border-gray-500 rounded-full ' />
                ) : (
                    <img onClick={() => setTheme('dark')} src={assets.moon_icon} alt="MoonIcon" className='size-8.5 p-1.5 border border-gray-500 rounded-full ' />
                )}
            </button>
        </div>
    )
}

export default ThemeToggleBtn