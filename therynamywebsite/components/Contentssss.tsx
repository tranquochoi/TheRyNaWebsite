import React from 'react'
import Button from './Button'

const Contentssss = () => {
    return (
        <section className='min-container padding-container flex flex-co
        gap-20 py-10 pb-32 md:gap-20 lg:py-20 xl:flex-row'>
            <div className='hero-map' />
            <div className='hidden h-full gap-12 lg:flex mr-20'>
                <img src="./image .png" width={500} height={500} alt="right background" />
            </div>
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <h1 className='regular-16 mt-6 mb-6 text-gray-30'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna. </h1>
                <h1 className='bold-20 lg:bold-40' style={{ color: '#4CAF4F' }}>Tim Smith</h1>
                <h1 className='regular-16 mt-6 mb-6 text-gray-30'>British Dragon Boat Racing Association</h1>

            </div>

        </section>
    )
}

export default Contentssss