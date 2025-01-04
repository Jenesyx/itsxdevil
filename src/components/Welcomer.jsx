import React from 'react'
import { torigateVideo } from '../assets'

const Welcomer = () => {
    return (
        <section className='w-screen h-screen flex relative overflow-hidden'>
            <div className='absolute inset-0 w-full h-full'>
                <video className="w-full h-full object-cover pointer-events-none" autoPlay muted playsInline={true} key={torigateVideo}>
                    <source src={torigateVideo} type='video/mp4'/>
                </video>
            </div>
        </section>
    )
}

export default Welcomer