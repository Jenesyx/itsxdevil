import React, { useEffect, useState } from 'react';
import { torigateVideo } from '../assets';
import gsap from 'gsap';

const Welcomer = ({ currentSection, setCurrentSection }) => {
    const [text, setText] = useState({
        first: "Time to find a",
        second: "Real Creator"
    });
    const [textChanged, setTextChanged] = useState(false);

    useEffect(() => {
        let scrolling = false;

        const handleScroll = (event) => {
            if (scrolling) return;
            scrolling = true;

            if (event.deltaY > 0) {
                if (!textChanged) {
                    gsap.to('.text-container p', {
                        opacity: 0,
                        y: -20,
                        duration: 0.5,
                        onComplete: () => {
                            setText({
                                first: "Ready to meet a",
                                second: "Game Changer?"
                            });
                            setTextChanged(true);
                            gsap.fromTo('.text-container p',
                                { opacity: 0, y: 20 },
                                { opacity: 1, y: 0, duration: 0.5 }
                            );
                        }
                    });
                } else if (currentSection < 3) {
                    setCurrentSection(currentSection + 1);
                    setTextChanged(false);
                }
            } else if (event.deltaY < 0) {
                if (textChanged) {
                    gsap.to('.text-container p', {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                        onComplete: () => {
                            setText({
                                first: "Time to find a",
                                second: "Real Creator"
                            });
                            setTextChanged(false);
                            gsap.fromTo('.text-container p',
                                { opacity: 0, y: -20 },
                                { opacity: 1, y: 0, duration: 0.5 }
                            );
                        }
                    });
                } else if (currentSection > 0) {
                    setCurrentSection(currentSection - 1);
                }
            }

            setTimeout(() => (scrolling = false), 1000);
        };

        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [textChanged, currentSection, setCurrentSection]);

    return (
        <section id='itsxdevil' className="w-screen h-screen flex-shrink-0 flex relative overflow-hidden items-center justify-center">
            <video
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                loop autoPlay muted playsInline={true} key={torigateVideo}
            >
                <source src={torigateVideo} type='video/mp4' />
            </video>
            <div className='absolute inset-0 text-container'>
                <div className='relative z-10 text-center text-black mt-[14rem] lg:mt-[11rem]'>
                    <p className="text-2xl lg:text-4xl font-normal -ml-[6rem] lg:-ml-[11rem]">{text.first}</p>
                    <p className="text-3xl lg:text-5xl font-bold mt-2 ml-[6rem] lg:ml-[8rem]">{text.second}</p>
                </div>
            </div>
        </section>
    );
};

export default Welcomer;