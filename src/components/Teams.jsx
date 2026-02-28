import React, { useEffect, useRef } from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

function Teams() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('[data-team-card]')
                        cards.forEach((card, i) => {
                            setTimeout(() => {
                                card.style.opacity = '1'
                                card.style.transform = 'translateY(0) scale(1)'
                            }, i * 60)
                        })
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.05 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={sectionRef}
            className='
                relative flex flex-col items-center gap-12
                px-4 sm:px-12 lg:px-24 xl:px-40
                py-28 sm:py-36
                text-gray-800 dark:text-white
                overflow-hidden
            '
        >
            {/* Background blobs */}
            <div className='absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-3xl pointer-events-none' />
            <div className='absolute bottom-0 left-10 w-60 h-60 bg-gradient-to-tr from-indigo-400/6 to-transparent rounded-full blur-2xl pointer-events-none' />

            <Title
                title='Meet The Team'
                desc='A passionate team of digital experts dedicated to your success'
            />

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 w-full'>
                {teamData.map((team, index) => (
                    <div
                        key={index}
                        data-team-card
                        style={{
                            opacity: 0,
                            transform: 'translateY(24px) scale(0.96)',
                            transition: 'opacity 0.5s ease, transform 0.5s ease'
                        }}
                        className='
                            group flex max-sm:flex-col items-center gap-3 sm:gap-4
                            p-4 sm:p-5 rounded-2xl
                            border border-gray-100 dark:border-white/8
                            bg-white dark:bg-gray-900/70
                            shadow-sm dark:shadow-none
                            hover:shadow-lg hover:shadow-primary/8 dark:hover:shadow-primary/10
                            hover:border-primary/25 dark:hover:border-primary/20
                            hover:-translate-y-1
                            transition-all duration-300 cursor-pointer
                        '
                    >
                        {/* Avatar */}
                        <div className='
                            relative flex-shrink-0
                            w-12 h-12 sm:w-14 sm:h-14
                            rounded-full overflow-hidden
                            ring-2 ring-transparent
                            group-hover:ring-primary/30
                            transition-all duration-300
                        '>
                            <img
                                src={team.image}
                                alt={team.name}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-400'
                            />
                        </div>

                        {/* Info */}
                        <div className='flex-1 text-center sm:text-left min-w-0'>
                            <h3 className='font-bold text-sm text-gray-800 dark:text-white truncate'>
                                {team.name}
                            </h3>
                            <p className='text-xs text-gray-400 dark:text-gray-500 mt-0.5 truncate'>
                                {team.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Teams