import React, { useEffect } from 'react';
import { torigateImage } from '../assets';
import { skills } from '../constants';
import gsap from 'gsap';
import SplitType from 'split-type';

const Skills = () => {
    useEffect(() => {
        // Split each skill text into characters
        const typeSplitItems = new SplitType('.skill-item', {
            types: 'chars',
            tagName: 'span',
        });

        // Animate each skill character
        gsap.from('.skill-item .char', {
            y: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.05,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center',
                once: true, // Only animate once when in view
            },
        });

        // Cleanup
        return () => typeSplitItems.revert();
    }, []);

    useEffect(() => {
        // Split "My SKILLS #" into characters
        const typeSplitHeading = new SplitType('.skills-heading', {
            types: 'chars',
            tagName: 'span',
        });

        // Animate the heading characters
        gsap.from('.skills-heading .char', {
            y: '110%',
            opacity: 0,
            rotationZ: 10,
            duration: 0.6,
            ease: 'power2.in',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center',
                once: true, // Only animate once when in view
            },
        });

        // Cleanup
        return () => typeSplitHeading.revert();
    }, []);

    return (
        <section id="skills" className="w-screen h-screen flex-shrink-0 flex relative overflow-hidden items-center justify-center">
            <div className="absolute inset-0 w-full h-full object-cover pointer-events-none">
                <img src={torigateImage} alt="torigate" />
            </div>
            <div className="absolute flex text-left flex-col inset-0 left-[15rem] top-[12rem] w-[32rem] h-[20rem]">
                <p className="skills-heading text-2xl lg:text-4xl font-bold">My SKILLS #</p>
                <div className="text-1xl lg:text-3xl font-normal mt-[3rem]">
                    {skills.map((item) => (
                        <p key={item.id} className="skill-item mt-5">
                            {item.skill}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
