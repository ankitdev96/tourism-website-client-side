import React from 'react';
import Travellers from '../../Travellers/Travellers';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <Travellers></Travellers>
            <Footer></Footer>
        </div>
    );
};

export default Home;