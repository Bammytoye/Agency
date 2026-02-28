import React, { useEffect, useRef } from 'react'
import Title from './Title'
import assets from '../assets/assets'

function OurWork() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('[data-card]')
                        cards.forEach((card, i) => {
                            setTimeout(() => {
                                card.style.opacity = '1'
                                card.style.transform = 'translateY(0)'
                            }, i * 120)
                        })
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const workData = [
        {
            title: 'Mobile App Marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect and engage users.',
            image: assets.work_mobile_app,
            tag: 'Mobile'
        },
        {
            title: 'Dashboard Management',
            description: 'We help you execute your plan efficiently and deliver measurable results.',
            image: assets.work_dashboard_management,
            tag: 'Analytics'
        },
        {
            title: 'Fitness App Promotion',
            description: 'We craft marketing strategies that boost growth and user engagement.',
            image: assets.work_fitness_app,
            tag: 'Health & Fitness'
        }
    ]

    return (
        <div
            id='our-work'
            ref={sectionRef}
            className='
                relative flex flex-col items-center gap-12 sm:gap-16
                px-4 sm:px-12 lg:px-24 xl:px-40
                py-28 sm:py-36
                text-gray-700 dark:text-white
                overflow-hidden
            '
        >
            {/* Background decoration */}
            <div className='absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-500/6 to-transparent rounded-full blur-3xl pointer-events-none' />

            {/* Header */}
            <Title
                title='Our Latest Work'
                desc='From strategy to execution, we craft digital solutions that move your business forward.'
            />

            {/* Grid */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {workData.map((work, index) => (
                    <div
                        key={index}
                        data-card
                        style={{
                            opacity: 0,
                            transform: 'translateY(32px)',
                            transition: `opacity 0.6s ease, transform 0.6s ease`
                        }}
                        className='group cursor-pointer'
                    >
                        {/* Image container */}
                        <div className='
                            relative overflow-hidden rounded-2xl
                            border border-black/5 dark:border-white/8
                            shadow-sm dark:shadow-black/30
                            aspect-[4/3]
                            group-hover:shadow-xl group-hover:shadow-black/10 dark:group-hover:shadow-black/50
                            transition-shadow duration-400
                        '>
                            <img
                                src={work.image}
                                alt={work.title}
                                className='
                                    w-full h-full object-cover
                                    group-hover:scale-105
                                    transition-transform duration-500 ease-out
                                '
                            />
                            {/* Tag overlay */}
                            <div className='
                                absolute top-3 left-3
                                bg-white/90 dark:bg-black/60
                                backdrop-blur-sm
                                border border-black/5 dark:border-white/10
                                text-gray-600 dark:text-gray-300
                                text-[11px] font-semibold uppercase tracking-wider
                                px-3 py-1 rounded-full
                            '>
                                {work.tag}
                            </div>
                            {/* Hover overlay */}
                            <div className='
                                absolute inset-0
                                bg-gradient-to-t from-primary/30 to-transparent
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-400
                            ' />
                        </div>

                        {/* Text */}
                        <div className='mt-4 px-1'>
                            <h3 className='
                                text-base sm:text-lg font-bold text-gray-800 dark:text-white
                                group-hover:text-primary dark:group-hover:text-primary
                                transition-colors duration-200 mb-2
                            '>
                                {work.title}
                            </h3>
                            <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed w-5/6'>
                                {work.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurWork