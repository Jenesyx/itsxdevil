import React, { useEffect, useState } from 'react';
import { navigation } from '../constants';
import gsap from 'gsap';

const Header = ({ currentSection, setCurrentSection, isTextChanged }) => {
    const handleMouseEnter = (e, isActive) => {
        if (!isActive) {
            gsap.fromTo(
                e.target.querySelector('.border-effect'),
                { scaleX: 0, transformOrigin: 'left' },
                { scaleX: 1, duration: 0.5, ease: 'power3.out' }
            );
        }
    };

    const handleMouseLeave = (e, isActive) => {
        if (!isActive) {
            gsap.to(e.target.querySelector('.border-effect'), {
                scaleX: 0,
                transformOrigin: 'right',
                duration: 0.5,
                ease: 'power3.out',
                onComplete: () => {
                    // Ensure border effect visibility is removed
                    e.target.querySelector('.border-effect').style.transform = 'scaleX(0)';
                },
            });
        }
    };

    const handleClick = (index) => {
        setCurrentSection(index);
        gsap.to(`.page-container`, {
            x: `-${index * 100}vw`,
            duration: 1,
            ease: 'power2.inOut'
        });
        gsap.fromTo(
            `.nav-link-${index} .border-effect`,
            { scaleX: 0, transformOrigin: 'center' },
            { scaleX: 1, duration: 0.5, ease: 'power3.out' }
        );
    };

    return (
        <div className='fixed bottom-0 left-0 w-full z-50'>
            <div className='flex items-center mb-[7rem] w-full'>
                <nav className='relative flex items-center m-auto'>
                    {navigation.map((item, index) => {
                        const isActive = index === currentSection;
                        return (
                            <div
                                key={item.id}
                                className={`nav-link nav-link-${index} block text-black text-xl px-3 py-1 mx-6 relative overflow-hidden cursor-pointer ${isActive ? 'active' : ''}`}
                                onClick={() => handleClick(index)}
                                onMouseEnter={(e) => handleMouseEnter(e, isActive)}
                                onMouseLeave={(e) => handleMouseLeave(e, isActive)}
                            >
                                {item.title}
                                <span
                                    className="border-effect absolute bottom-0 left-0 w-full h-[2px] bg-black"
                                    style={{ transform: isActive ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'center' }}
                                />
                            </div>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default Header;