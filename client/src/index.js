import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import Caption from './components/Caption';
import Mission from './components/Mission';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Paterners from './components/Parteners'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Caption />
    <Mission />
    <Products />
    <Paterners />
    <Card />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
