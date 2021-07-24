import React from 'react'
import Team from '../../components/Team';
import Navbar from '../../components/Navbar';
import Caption from '../../components/Caption';
import Mission from '../../components/Mission';
import Products from '../../components/Products';
import Footer from '../../components/Footer';
import Partners from '../../components/Partners';

const Home = () => {
    return (
        <>
          <Navbar />
          <Caption />
          <Mission />
          <Products />
          <Team />
          <Partners />
          <Footer />
        </> 
    )
}

export default Home;
