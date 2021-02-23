import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { glowButton, liTransition, liWhileHover } from '../sharedAnimations';

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
            delay: 0.5,
        },
    },
};

const Toppings = ({ addTopping, pizza }) => {
    let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='toppings container'
        >
            <h3>Step 2: Choose Toppings</h3>
            <ul>
                {toppings.map((topping) => {
                    let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
                    return (
                        <motion.li
                            whileHover={liWhileHover}
                            transition={liTransition}
                            key={topping}
                            onClick={() => addTopping(topping)}
                        >
                            <motion.span className={spanClass}>{topping}</motion.span>
                        </motion.li>
                    );
                })}
            </ul>

            <Link to='/order'>
                <motion.button whileHover={glowButton}>Order</motion.button>
            </Link>
        </motion.div>
    );
};

export default Toppings;
