import React, { useEffect, useRef } from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

function Services() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const children = entry.target.querySelectorAll('[data-reveal]')
                        children.forEach((child, i) => {
                            setTimeout(() => {
                                child.style.opacity = '1'
                                child.style.transform = 'translateY(0)'
                            }, i * 100)
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

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.ads_icon
        },
        {
            title: 'Content Marketing',
            description: 'We help you execute your plan and deliver results.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content Writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: assets.content_icon
        },
        {
            title: 'Social Media',
            description: 'We help you build a strong social media presence and engage with your audience.',
            icon: assets.social_icon
        },
    ]

    return (
        <div
            id="service"
            ref={sectionRef}
            className='
                relative flex flex-col items-center gap-10 sm:gap-14
                px-4 sm:px-12 lg:px-24 xl:px-40
                pt-28 sm:pt-36 pb-20
                text-gray-700 dark:text-white
                overflow-hidden
            '
        >
            {/* Background decoration */}
            <img
                src={assets.bgImage2}
                alt=""
                className='absolute -top-96 -left-[70px] -z-10 dark:hidden opacity-70 pointer-events-none'
            />
            <div className='absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-3xl pointer-events-none dark:from-primary/5' />

            {/* Section header */}
            <div
                data-reveal
                style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
            >
                <Title
                    title="How can we help?"
                    desc="From strategy to execution, we craft digital solutions that move your business forward"
                />
            </div>

            {/* Cards grid */}
            <div className='flex flex-col md:grid md:grid-cols-2 gap-5 w-full max-w-4xl'>
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        data-reveal
                        style={{
                            opacity: 0,
                            transform: 'translateY(24px)',
                            transition: `opacity 0.6s ease ${index * 0.1 + 0.2}s, transform 0.6s ease ${index * 0.1 + 0.2}s`
                        }}
                    >
                        <ServiceCard service={service} index={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services