import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { glowButton } from '../sharedAnimations';
import Loader from './Loader';

const buttonVariants = {
    hover: {
        ...glowButton,
    },
};

const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, duration: 1.5 } },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
        },
    },
};

const Home = () => {
    return (
        <motion.div
            variants={containerVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='home container'
        >
            <motion.h2>Welcome to Pizza Joint</motion.h2>
            <Link to='/base'>
                <motion.button variants={buttonVariants} animate='visible' whileHover='hover'>
                    Create Your Pizza
                </motion.button>
            </Link>
            <Loader />
        </motion.div>
    );
};

export default Home;
