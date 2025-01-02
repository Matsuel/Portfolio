"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { words, opacity, slideUp } from '@/contantes/preloader';

const Preloader = () => {

    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {
        if (index == words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])


    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="w-full h-full fixed top-0 left-0 z-[99] flex justify-center items-center bg-background">
            {dimension.width > 0 &&
                <>
                    <motion.p
                        className="flex text-text text-9xl font-bold items-center absolute z-[1]"
                        variants={opacity}
                        initial="initial"
                        animate="enter"
                    >
                        <span className='block w-8 h-8 bg-text mr-3 rounded-full'></span>
                        {words[index]}
                    </motion.p>
                    <svg
                        className="absolute top-0 w-full"
                        style={{ height: "calc(100% + 300px)" }}
                    >
                        <motion.path
                            fill="#000"
                            variants={curve}
                            initial="initial"
                            exit="exit"
                        ></motion.path>
                    </svg>
                </>
            }
        </motion.div >
    )
}

export default Preloader