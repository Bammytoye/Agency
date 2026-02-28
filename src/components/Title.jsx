import React from 'react'

function Title({ title, desc }) {
    return (
        <div className='flex flex-col items-center text-center gap-3 max-w-xl'>
            <h2 className='
                text-3xl sm:text-4xl lg:text-5xl
                font-extrabold tracking-tight
                text-gray-800 dark:text-white
                leading-tight
            '>
                {title}
            </h2>
            <p className='
                text-sm sm:text-base
                text-gray-500 dark:text-gray-400
                leading-relaxed max-w-md
            '>
                {desc}
            </p>
        </div>
    )
}

export default Title