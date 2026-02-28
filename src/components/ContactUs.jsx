import React, { useEffect, useRef } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'

function ContactUs() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const els = entry.target.querySelectorAll('[data-reveal]')
                        els.forEach((el, i) => {
                            setTimeout(() => {
                                el.style.opacity = '1'
                                el.style.transform = 'translateY(0)'
                            }, i * 80)
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

    const onSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.append("access_key", "cdd1d1c0-eb7a-4882-aeb6-e05f4b5eae80")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })

        try {
            const data = await response.json()
            if (data.success) {
                toast.success("Message sent successfully")
                event.target.reset()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div
            id='contact-us'
            ref={sectionRef}
            className='
                relative flex flex-col items-center gap-12 sm:gap-16
                px-4 sm:px-12 lg:px-24 xl:px-40
                pt-28 sm:pt-36 pb-10
                text-gray-700 dark:text-white
                overflow-hidden
            '
        >
            {/* Background decoration */}
            <div className='absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-primary/6 to-transparent rounded-full blur-3xl pointer-events-none' />

            <div
                data-reveal
                style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
            >
                <Title
                    title='Reach out to us'
                    desc='From strategy to execution, we craft digital solutions that move your business forward.'
                />
            </div>

            <form
                onSubmit={onSubmit}
                data-reveal
                style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s' }}
                className='
                    grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5
                    w-full max-w-2xl
                    bg-white dark:bg-gray-900/60
                    backdrop-blur-sm
                    border border-gray-100 dark:border-white/8
                    rounded-3xl
                    p-6 sm:p-8 lg:p-10
                    shadow-xl shadow-black/4 dark:shadow-black/30
                '
            >
                {/* Name field */}
                <div className='flex flex-col gap-1.5'>
                    <label className='text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300'>
                        Your Name
                    </label>
                    <div className='
                        flex items-center gap-3
                        px-4 py-3 rounded-xl
                        border border-gray-200 dark:border-white/10
                        bg-gray-50 dark:bg-white/5
                        focus-within:border-primary/60 dark:focus-within:border-primary/50
                        focus-within:bg-white dark:focus-within:bg-white/8
                        focus-within:shadow-sm focus-within:shadow-primary/10
                        transition-all duration-200
                        group
                    '>
                        <img src={assets.person_icon} alt="" className='w-4 h-4 opacity-40 group-focus-within:opacity-70 transition-opacity' />
                        <input
                            name="name"
                            type="text"
                            placeholder='Enter your name'
                            required
                            className='
                                flex-1 bg-transparent text-sm text-gray-700 dark:text-gray-200
                                placeholder:text-gray-400 dark:placeholder:text-gray-600
                                outline-none
                            '
                        />
                    </div>
                </div>

                {/* Email field */}
                <div className='flex flex-col gap-1.5'>
                    <label className='text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300'>
                        Your Email
                    </label>
                    <div className='
                        flex items-center gap-3
                        px-4 py-3 rounded-xl
                        border border-gray-200 dark:border-white/10
                        bg-gray-50 dark:bg-white/5
                        focus-within:border-primary/60 dark:focus-within:border-primary/50
                        focus-within:bg-white dark:focus-within:bg-white/8
                        focus-within:shadow-sm focus-within:shadow-primary/10
                        transition-all duration-200
                        group
                    '>
                        <img src={assets.email_icon} alt="" className='w-4 h-4 opacity-40 group-focus-within:opacity-70 transition-opacity' />
                        <input
                            name="email"
                            type="email"
                            placeholder='Enter your email'
                            required
                            className='
                                flex-1 bg-transparent text-sm text-gray-700 dark:text-gray-200
                                placeholder:text-gray-400 dark:placeholder:text-gray-600
                                outline-none
                            '
                        />
                    </div>
                </div>

                {/* Message field */}
                <div className='sm:col-span-2 flex flex-col gap-1.5'>
                    <label className='text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300'>
                        Message
                    </label>
                    <textarea
                        rows={6}
                        placeholder="Tell us about your project..."
                        name="message"
                        required
                        className='
                            w-full px-4 py-3 rounded-xl
                            border border-gray-200 dark:border-white/10
                            bg-gray-50 dark:bg-white/5
                            text-sm text-gray-700 dark:text-gray-200
                            placeholder:text-gray-400 dark:placeholder:text-gray-600
                            outline-none resize-none
                            focus:border-primary/60 dark:focus:border-primary/50
                            focus:bg-white dark:focus:bg-white/8
                            focus:shadow-sm focus:shadow-primary/10
                            transition-all duration-200
                        '
                    />
                </div>

                {/* Submit button */}
                <div className='sm:col-span-2'>
                    <button
                        type='submit'
                        className='
                            group relative overflow-hidden
                            inline-flex items-center gap-2
                            bg-primary text-white
                            px-8 py-3.5 rounded-full
                            text-sm font-semibold
                            shadow-md shadow-primary/25
                            hover:shadow-lg hover:shadow-primary/40
                            hover:-translate-y-0.5 active:translate-y-0
                            transition-all duration-300
                            cursor-pointer
                        '
                    >
                        <span className='relative z-10'>Submit</span>
                        <img
                            src={assets.arrow_icon}
                            alt=""
                            className='w-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-200'
                        />
                        <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs