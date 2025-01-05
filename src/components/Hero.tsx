import Image from 'next/image'
import React from 'react'

const Hero = () => {
    // TODO: Ajouter un délai de lecture pour la vidéo

    return (
        <section id='home' className='w-full h-auto flex flex-col gap-8 p-8 mt-8 justify-start items-start relative'>
            <p className='w-[30%] text-4xl font-bold text-text'>
                Développeur web <span className='text-secondary'>spécialisé dans la création de </span> solutions simples <span className='text-secondary'>mais</span> efficaces, <span className='text-secondary'>avec une approche qui </span> redéfinit les standards du design
            </p>

            <div className='w-auto h-auto flex flex-col gap-0'>
                <h1 className='text-[200px] leading-none font-extrabold text-text uppercase'>Matheo</h1>
                <div className='w-auto h-auto flex flex-row gap-4'>
                    <h1 className='text-[200px] leading-none font-extrabold text-text uppercase'>Lang</h1>
                </div>
            </div>

            <Image
                className='absolute right-8 top-[50%] transform translate-y-[-50%]'
                src='/mars.png'
                alt='Mars'
                width={800}
                height={800}
            />


        </section>
    )
}

export default Hero