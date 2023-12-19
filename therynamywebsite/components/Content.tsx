import React from 'react'
import Button from './Button';

const Content = () => {
    return (
        <section className='br-container padding-container flex flex-co
        gap-20 py-10 pb-32 md:gap-20 lg:py-20 xl:flex-row'>
            <div className='hero-map' />
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <h1 className='bold-20 lg:bold-40'>Lessons and insights</h1>
                <h1 className='bold-20 lg:bold-40' style={{ color: '#4CAF4F' }}>from 8 years</h1>
                <p className='regular-16 mt-6 mb-6 text-gray-30 xl:max-w-[520px]'>Where to grow your business as a photographer: site or social media?</p>
                <div>
                    <Button label={'Register'} onClick={function (): void {
                    }} />
                </div>
            </div>
            <div className='hidden h-full gap-12 lg:flex mr-20'>
                <img src="./rightbr.png" width={300} height={300} alt="right background" />
            </div>
        </section>

    );
}

export default Content