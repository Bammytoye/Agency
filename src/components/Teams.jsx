import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

function Teams() {
    return (
        <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pb-28 text-gray-800 dark:text-white'>

            <Title
                title='Meet The Team'
                desc='A passionate team of digital experts dedicated to your success'
            />

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                {teamData.map((team, index) => (
                    <div
                        key={index}
                        className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 
                                shadow-lg shadow-gray-100 dark:shadow-white/5 
                                hover:scale-105 transition-all duration-300 cursor-pointer'
                    >
                        <img
                            src={team.image}
                            alt={team.name}
                            className='w-12 h-12 rounded-full object-cover'
                        />

                        <div className='flex-1 text-center sm:text-left'>
                            <h3 className='font-semibold text-sm'>{team.name}</h3>
                            <p className='text-xs opacity-60'>{team.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Teams
