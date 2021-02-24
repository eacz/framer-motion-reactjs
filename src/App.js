import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';

function App() {
    const location = useLocation();
    const [pizza, setPizza] = useState({ base: '', toppings: [] });
    const [showModal, setShowModal] = useState(false);

    const addBase = (base) => {
        setPizza({ ...pizza, base });
    };

    const addTopping = (topping) => {
        let newToppings;
        if (!pizza.toppings.includes(topping)) {
            newToppings = [...pizza.toppings, topping];
        } else {
            newToppings = pizza.toppings.filter((item) => item !== topping);
        }
        setPizza({ ...pizza, toppings: newToppings });
    };

    return (
        <>
            <Header />
            <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
                {/*could be use onExitComplete to clean modal or a simply cleanup on useEffect */}
                <Switch location={location} key={location.key}>
                    {/*this is necessary for the AnimatePresence component to know if the route changes and do the animation*/}
                    <Route path='/base'>
                        <Base addBase={addBase} pizza={pizza} />
                    </Route>
                    <Route path='/toppings'>
                        <Toppings addTopping={addTopping} pizza={pizza} />
                    </Route>
                    <Route path='/order'>
                        <Order setShowModal={setShowModal} pizza={pizza} />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </AnimatePresence>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}

export default App;
