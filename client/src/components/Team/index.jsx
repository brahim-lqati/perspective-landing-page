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
import styles from "./style.module.css";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
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
      team: "ML",
      image:"images/ismail.png"
    },
    {
      firstname: "Choukri",
      lastname: "EL Ouastani",
      team: "ML",
      image:"images/choukri.png"
    },
    {
      firstname: "Meryem",
      lastname: "EL Kasmi",
      team: "ML",
      image:"images/meryeme.png"
    },
    ]
  return (
    <div className={styles.teamContainer}>
      <h2 className={styles.sectionTitle}>Our Hard-working Team</h2>
      <hr className={styles.hr} />

      <Slider {...settings}>
      {team.map((person) =>(
            <div className={styles.card}>
            <img className={styles.imagespace} src={person.image} height="100%" width="87.4%"/>
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
