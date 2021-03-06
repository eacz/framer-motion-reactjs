import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const containerVariants = {
    hidden: {
        x: '100vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            when: 'beforeChildren', //do the animation before the children starts his one
            staggerChildren: 0.5, // seconds waited for start the next animation
        },
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
        },
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const Order = ({ pizza, setShowModal }) => {
    useEffect(() => {
        setTimeout(() => {
            setShowModal(true);
        }, 5000);

        return () => { 
            setShowModal(false);
        };
    }, [setShowModal]);

    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='container order'
        >
            <h2>Thank you for your order :) </h2>
            <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
            <motion.div variants={childVariants}>
                {pizza.toppings.map((topping) => (
                    <div key={topping}>{topping}</div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Order;
