import React, { useEffect, useState } from 'react';
import Welcomer from './components/welcomer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import GetInTouch from './components/GetInTouch';
import Header from './components/Header';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isTextChanged, setTextChanged] = useState(false); // Track text change

    useEffect(() => {
        // GSAP Horizontal Transition
        gsap.to('.page-container', {
            x: `-${currentSection * 100}vw`,
            duration: 1,
            ease: 'power2.inOut',
        });
    }, [currentSection]);

    useEffect(() => {
        // Horizontal navigation syncing with GSAP
        ScrollTrigger.create({
            trigger: '.page-container',
            start: 'top top',
            end: 'bottom bottom',
            pin: true,
            snap: {
                snapTo: 1 / 4, // Adjust based on the number of sections
                duration: 0.5,
                ease: 'power2.inOut',
            },
        });
    }, []);

    return (
        <>
            <Header
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
                isTextChanged={isTextChanged}
                setTextChanged={setTextChanged}
            />
            <div className="page-container flex w-[400vw] h-screen">
                <Welcomer
                    currentSection={currentSection}
                    setCurrentSection={setCurrentSection}
                    isTextChanged={isTextChanged}
                    setTextChanged={setTextChanged}
                />
                <Hero />
                <Skills />
                <GetInTouch />
            </div>
        </>
    );
};

export default App;
