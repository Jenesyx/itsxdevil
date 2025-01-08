import React from 'react';
import ButtonSvg from '../assets/ButtonSvg';

const Button = ({ className, href, onClick, children, px }) => {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} text-black border-none ${className || ''}`;
    const spanClasses = 'relative z-10';

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            <ButtonSvg />
        </button>
    );

    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            <ButtonSvg />
        </a>
    );

    return href ? renderLink() : renderButton();
};

export default Button;
