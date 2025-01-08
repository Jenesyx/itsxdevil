import React from 'react'
import { torigateImage } from '../assets'
import { aboutme } from '../constants'

const Hero = () => {
    return (
        <section id='w-i-itsxdevil' className="w-screen h-screen flex-shrink-0 flex relative overflow-hidden items-center justify-center">
            <div className='absolute inset-0 w-full h-full object-cover pointer-events-none'>
                <img src={torigateImage} alt="torigate" />
            </div>
            <div className='absolute flex flex-col inset-0 left-[15rem] top-[9rem] w-[32rem] h-[20rem]'>
                {aboutme.map((item) => (
                    <p className="flex text-left text-2xl lg:text-lg font-normal mt-8">{item.desc}</p>
                ))}
            </div>
        </section>
    )
}

export default Hero