import React from 'react';
import { motion } from 'framer-motion';

const Order = ({ pizza }) => {
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
                staggerChildren: .5, // seconds waited for start the next animation
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

    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
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
