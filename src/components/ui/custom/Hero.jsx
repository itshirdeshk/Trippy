import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className='flex flex-col items-center mx-56 gap-9'>
            <h1 className='font-extrabold text-[50px] text-center mt-16'><span className='text-[#f56551]'>Discover Your next Adventure with AI: </span>Personalized Itineraies at Your Fingertips.</h1>
            <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraies tailored to your interests and budget.</p>
            <Link to='/create-trip'>
                <Button>Get Started, It's Free</Button>
            </Link>

            <img src='https://res.cloudinary.com/itshirdeshk/image/upload/v1721581367/WhatsApp_Image_2024-07-21_at_22.31.33_ab9317df_z7ijio.jpg' className='-mt-50 h-[800px] w-[800px]' />
        </div>
    )
}

export default Hero