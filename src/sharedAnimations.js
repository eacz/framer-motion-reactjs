//glow a button while is hover
export const glowButton = {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
        duration: 0.3,
        yoyo: Infinity, //infinite keyframes that switch between the original state and the properties specified upper
    },
};

export const liWhileHover = {
    originX: 0,
    color: '#f8e112',
    scale: 1.1,

};
export const liTransition = { type: 'spring', stiffness: 300 };
