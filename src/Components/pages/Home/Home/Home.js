import React from 'react';
import useTitle from '../../../../Hooks/useTitle';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Feature></Feature>
            <HomeService></HomeService>
        </div>
    );
};

export default Home;