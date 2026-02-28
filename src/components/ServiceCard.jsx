import React, { useRef, useState } from 'react'

function ServiceCard({ service }) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)
    const divRef = useRef(null)

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect()
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
    }

    return (
        <div
            className='
                relative cursor-pointer overflow-hidden rounded-2xl
                border border-gray-100 dark:border-white/8
                shadow-sm dark:shadow-none
                hover:border-primary/30 dark:hover:border-primary/25
                hover:shadow-xl hover:shadow-primary/8 dark:hover:shadow-primary/10
                transition-all duration-400 ease-out
                group
            '
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            ref={divRef}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight glow */}
            <div
                className={`
                    pointer-events-none rounded-full
                    bg-gradient-to-r from-blue-500 via-primary to-indigo-500
                    w-[320px] h-[320px] absolute z-0
                    transition-opacity duration-500 mix-blend-multiply dark:mix-blend-lighten
                    blur-2xl
                    ${visible ? 'opacity-60' : 'opacity-0'}
                `}
                style={{ top: position.y - 160, left: position.x - 160 }}
            />

            {/* Card inner — lifts slightly on hover */}
            <div
                className='
                    relative z-10 flex items-center gap-6 sm:gap-8
                    p-6 sm:p-8
                    bg-white dark:bg-gray-900/90
                    rounded-[14px]
                    group-hover:scale-[0.991] group-hover:m-0.5 group-hover:rounded-[10px]
                    transition-all duration-300
                '
            >
                {/* Icon */}
                <div className='
                    relative flex-shrink-0
                    w-16 h-16 sm:w-20 sm:h-20
                    rounded-2xl
                    bg-gradient-to-br from-primary/10 to-blue-400/10
                    dark:from-primary/15 dark:to-blue-400/10
                    border border-primary/10 dark:border-primary/15
                    flex items-center justify-center
                    group-hover:scale-105 group-hover:border-primary/25
                    transition-all duration-300 overflow-hidden
                '>
                    <img
                        src={service.icon}
                        alt={service.title}
                        className='w-10 sm:w-12 object-contain'
                    />
                </div>

                {/* Text */}
                <div className='flex-1 min-w-0'>
                    <h3 className='font-bold text-base sm:text-lg text-gray-800 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200'>
                        {service.title}
                    </h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>
                        {service.description}
                    </p>
                </div>

                {/* Arrow indicator */}
                <div className='
                    flex-shrink-0 ml-2
                    w-8 h-8 rounded-full
                    border border-gray-200 dark:border-white/10
                    flex items-center justify-center
                    text-gray-400 dark:text-gray-500 text-xs
                    opacity-0 group-hover:opacity-100
                    group-hover:border-primary/40 group-hover:text-primary
                    translate-x-2 group-hover:translate-x-0
                    transition-all duration-300
                '>
                    →
                </div>
            </div>
        </div>
    )
}

export default ServiceCard