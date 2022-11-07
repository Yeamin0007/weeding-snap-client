import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/shared/Footer/Footer';
import Header from '../Components/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='first'>
        
        <Header></Header>
        <Outlet></Outlet>

        <div className='second'>
        <Footer></Footer>
        </div>
    </div>
        </div>
    );
};

export default Main;