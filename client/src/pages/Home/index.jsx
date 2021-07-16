import React, {useState} from 'react'
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Modal, Button } from 'react-bootstrap';
import Team from '../../components/Team';
import Navbar from '../../components/Navbar';
import Caption from '../../components/Caption';
import Mission from '../../components/Mission';
import Product from '../../components/Product';
import Footer from '../../components/Footer';




const Home = () => {

    const [show, setShow] = useState(false);
    const handleContact = () => {
        setShow(true);
    }

    const close = () => {
        setShow(false);
    }
    return (
        <>
          <Navbar />
          <Caption />
          <Mission />
          <Product />
          <Footer />
          <Team />
        </> 
    )
}

export default Home;
