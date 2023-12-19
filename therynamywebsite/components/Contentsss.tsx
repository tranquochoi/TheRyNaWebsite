import React from 'react'
import Button from './Button'

const Contentsss = () => {
    return (
        <section className='min-container padding-container flex flex-co
        gap-20 py-10 pb-32 md:gap-20 lg:py-20 xl:flex-row'>
            <div className='hero-map' />
            <div className='hidden h-full gap-12 lg:flex mr-20'>
                <img src="./b12.png" width={500} height={500} alt="right background" />
            </div>
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <div className='mt-10'></div>
                <div className='mt-10'></div>

                <h1 className='bold-20 lg:bold-40'>How to design your site footer like we did</h1>
                <h1 className='regular-16 mt-6 mb-6 text-gray-30'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</h1>
                <div>
                    <Button label={'Learn More'} onClick={function (): void {
                    }} />
                </div>
            </div>

        </section>
    )
}

export default Contentsss