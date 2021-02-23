import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { glowButton, liTransition, liWhileHover } from '../sharedAnimations';

const Toppings = ({ addTopping, pizza }) => {
    let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

    return (
        <div className='toppings container'>
            <h3>Step 2: Choose Toppings</h3>
            <ul>
                {toppings.map((topping) => {
                    let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
                    return (
                        <motion.li
                            whileHover={liWhileHover}
                            transition={liTransition}
                            key={topping}
                            onClick={() => addTopping(topping)}>
                            <motion.span className={spanClass}>{topping}</motion.span>
                        </motion.li>
                    );
                })}
            </ul>

            <Link to='/order'>
                <motion.button whileHover={glowButton}>Order</motion.button>
            </Link>
        </div>
    );
};

export default Toppings;
