import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.5}}
            className='home container'>
            <motion.h2>Welcome to Pizza Joint</motion.h2>
            <Link to='/base'>
                <motion.button animate={{}}>Create Your Pizza</motion.button>
            </Link>
        </motion.div>
    );
};

export default Home;
