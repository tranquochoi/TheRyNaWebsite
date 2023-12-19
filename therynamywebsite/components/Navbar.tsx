import Link from 'next/link';
import React from 'react';
import Button from './Button';

const Navbar = () => {
    return (
        <div className='max-container relative z-30 py-5'>
            <div className='flex items-center'>
                <div className='ml-20'>
                    <img
                        src='/Icon.png'
                        alt='Icon'
                        className='w-24.362 h-16.706'
                    />
                </div>
                <div className='ml-1'>
                    <img
                        src='/Nexcent.png'
                        alt='Icon'
                        className='w-77.605 h-14.382'
                    />
                </div>
                <ul className='hidden h-full gap-12 lg:flex ml-auto'>
                    <li className='p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/'>Features</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/'>Community</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/'>Blog</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/'>Pricing</Link>
                    </li>
                    <Button label="Register Now" icon="Down.svg" onClick={() => console.log("Button clicked")} />
                    <div>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;

