import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

function OurWork() {

    const workData = [
        {
            title: 'Mobile App Marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect and engage users.',
            image: assets.work_mobile_app
        },
        {
            title: 'Dashboard Management',
            description: 'We help you execute your plan efficiently and deliver measurable results.',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fitness App Promotion',
            description: 'We craft marketing strategies that boost growth and user engagement.',
            image: assets.work_fitness_app
        }
    ]

    return (
        <div
            id='our-work'
            className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-32 text-gray-700 dark:text-white'
        >
            <Title 
                title='Our Latest Work'
                desc='From strategy to execution, we craft digital solutions that move your business forward.'
            />

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {workData.map((work, index) => (
                    <div
                        key={index}
                        className='cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-105'
                    >
                        <img
                            src={work.image}
                            alt={work.title}
                            className='w-full rounded-xl'
                        />
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>
                            {work.title}
                        </h3>
                        <p className='text-sm opacity-60 w-5/6'>
                            {work.description}
                        </p>
                    </div>
                ))}
            </div>    
        </div>
    )
}

export default OurWork
