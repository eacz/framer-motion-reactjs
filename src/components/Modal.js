import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const backdropVariant = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
};

const modalVariants = {
    hidden: {
        y: '-110vh',
        opacity: 0,
    },
    visible: {
        y: '200px',
        opacity: 1,
        transition: {
            delay: 0.5,
        },
    },
};

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div
                    className='backdrop'
                    variants={backdropVariant}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <motion.div className='modal' variants={modalVariants}>
                        <p>Want to make another pizza? </p>
                        <Link to='/'>
                            <button>Start again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
