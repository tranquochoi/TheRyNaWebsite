import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    icon?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, icon }) => {
    return (
        <button
            className='flex items-center bg-green-500 hover:bg-green-700 text-white py-4 px-7 rounded'
            onClick={onClick}
        >
            <span>{label}</span>
            {icon && <img src={icon} alt='Icon' className='ml-2' />}
        </button>
    );
};

export default Button;
