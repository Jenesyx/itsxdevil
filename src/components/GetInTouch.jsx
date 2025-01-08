import React from 'react'
import { torigateImage } from '../assets'
import { form } from '../constants'
import Button from './Button'

const GetInTouch = () => {
    return (
        <section id='get-in-touch' className="w-screen h-screen flex-shrink-0 flex relative overflow-hidden items-center justify-center">
            <div className='absolute inset-0 w-full h-full object-cover pointer-events-none'>
                <img src={torigateImage} alt="torigate" />
            </div>
            <div className='absolute flex flex-col inset-0 left-[15rem] top-[9rem] w-[34rem] h-[34rem]'>
                <p className='text-2xl lg:text-4xl font-bold mb-5'>Get in touch #</p>

                {form.map((item) => (
                    <div className='flex flex-col w-full h-[5rem] mt-[3rem]'>
                        <p className='text-left text-4xl lg:text-2xl font-semibold'>{item.title}</p>
                        <input className='outline-none mt-2 bg-transparent py-2 px-5 border-b-2 border-black' type="text" placeholder={item.desc}/>
                    </div>
                ))}
                <div className='absolute right-0 bottom-0 justify-end'>
                    <button class="custom-button">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch