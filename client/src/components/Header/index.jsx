import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css';

const Header = () => {


  return (
    <header>
        <img className="logo" src="" alt="" srcset="" />
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Mission</a></li>
                <li><a href="">Partners</a></li>
                <li><a href="">Sponsors</a></li>
            </ul>
        </nav>
        <a href=""><button>Buy</button></a>
    </header>
  );
}

export default Header;