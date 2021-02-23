import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { glowButton, liTransition, liWhileHover } from '../sharedAnimations';

const Base = ({ addBase, pizza }) => {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    return (
        <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', delay: 0.5 }}
            className='base container'>
            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map((base) => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <motion.li
                            whileHover={liWhileHover}
                            transition={liTransition}
                            key={base}
                            onClick={() => addBase(base)}>
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    );
                })}
            </ul>

            {pizza.base && (
                <motion.div
                    transition={{ type: 'spring', stiffness: 120 }}
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    className='next'>
                    <Link to='/toppings'>
                        <motion.button whileHover={glowButton}>Next</motion.button>
                    </Link>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Base;
