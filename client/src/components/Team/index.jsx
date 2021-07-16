import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
 import styles from './style.module.css'

const Team = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  const team = [
    {
      firstname: "Omar",
      lastname: "Houti",
      team: "Embarqué",
      image:"images/omar.png"
    },
    {
      firstname: "Brahim",
      lastname: "LQATI",
      team: "DEV",
      image:"images/brahim.png"
    },
    {
      firstname: "Mahmoud",
      lastname: "Fettal",
      team: "DEV",
      image:"images/mahmoud.png"
    },
    {
      firstname: "Maroua",
      lastname: "Lboukili",
      team: "Marketing",
      image:"images/maroua.png"
    },
    {
      firstname: "Ismail",
      lastname: "Baouham",
      team: "Embarqué",
      image:"images/ismail.png"
    },
    {
      firstname: "Choukri",
      lastname: "EL Ouastani",
      team: "ML",
      image:"images/omar.png"
    },
    {
      firstname: "Meryem",
      lastname: "EL Kasmi",
      team: "ML",
      image:"images/meryem.png"
    },
    ]
  return (
    <div>
    <h2>Auto Play</h2>
    <Slider {...settings}>
      {team.map((person) =>(
            <div className={styles.card}>
            <img src={person.image} height="100%" width="100%"/>
            <div className={styles.desc}>
              <div className={styles.name}>
                {person.firstname} <span className={styles.lname}>{person.lastname}</span>
              </div>
              <div className={styles.team}>{person.team}</div>
            </div>
          </div>
      ))}

    </Slider>
  </div>
  );
};

export default Team;
