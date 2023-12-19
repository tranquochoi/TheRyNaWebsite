import React from 'react'
import Button from './Button'

const Contents = () => {
    return (
        <section className='min-container padding-container flex flex-co
        gap-20 py-10 pb-32 md:gap-20 lg:py-20 xl:flex-row'>
            <div className='hero-map' />
            <div className='hidden h-full gap-12 lg:flex mr-20'>
                <img src="./Frame 35.svg" width={500} height={500} alt="right background" />
            </div>
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <div className='mt-10'></div>
                <div className='mt-10'></div>

                <h1 className='bold-20 lg:bold-40'>The unseen of spending three years at Pixelgrade</h1>
                <h1 className='regular-16 mt-6 mb-6 text-gray-30'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</h1>
                <div>
                    <Button label={'Learn More'} onClick={function (): void {
                    }} />
                </div>
            </div>

        </section>

    )
}

export default Contents