import React from 'react'

const Contentss = () => {
    return (
        <section className='br-container padding-container flex flex-co
        gap-20 py-10 pb-32 md:gap-20 lg:py-20 xl:flex-row'>
            <div className='hero-map' />
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <h1 className='bold-20 lg:bold-40'>Helping a local </h1>
                <h1 className='bold-20 lg:bold-40' style={{ color: '#4CAF4F' }}>business reinvent itself</h1>
                <p className='regular-16 mt-2 mb-6 text-gray-30 xl:max-w-[520px]'>We reached here with our hard work and dedication</p>

            </div>
            <div className='hidden h-full gap-12 lg:flex mr-20'>
            </div>
        </section>

    )
}

export default Contentss