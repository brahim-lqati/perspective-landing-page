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

  return (
    <div>
    <h2>Auto Play</h2>
    <Slider {...settings}>
    <div className={styles.card}>
      <img src="images/brahim.png" height="100%" width="100%"/>
      <div className={styles.desc}>
        <div className={styles.name}>
          Brahim <span className={styles.lname}>Lqati</span>
        </div>
        <div className={styles.team}>Developement Team</div>
      </div>
    </div>
    <div className={styles.card}>
      <img src="images/brahim.png" height="100%" width="100%"/>
      <div className={styles.desc}>
        <div className={styles.name}>
          Brahim <span className={styles.lname}>Lqati</span>
        </div>
        <div className={styles.team}>Developement Team</div>
      </div>
    </div>
    <div className={styles.card}>
      <img src="images/mahmoud.png" height="100%" width="100%"/>
      <div className={styles.desc}>
        <div className={styles.name}>
          Brahim <span className={styles.lname}>Lqati</span>
        </div>
        <div className={styles.team}>Developement Team</div>
      </div>
    </div>
    <div className={styles.card}>
      <img src="images/Maroua.png" height="100%" width="100%"/>
      <div className={styles.desc}>
        <div className={styles.name}>
          Brahim <span className={styles.lname}>Lqati</span>
        </div>
        <div className={styles.team}>Developement Team</div>
      </div>
    </div>
    <div className={styles.card}>
      <img src="images/omar.png" height="100%" width="100%"/>
      <div className={styles.desc}>
        <div className={styles.name}>
          Brahim <span className={styles.lname}>Lqati</span>
        </div>
        <div className={styles.team}>Developement Team</div>
      </div>
    </div>
    <div className={styles.card}>
      <img src="images/choukri.png" height="100%" width="100%"/>
      <div className={styles.desc}>
        <div className={styles.name}>
          Brahim <span className={styles.lname}>Lqati</span>
        </div>
        <div className={styles.team}>Developement Team</div>
      </div>
    </div>

    </Slider>
  </div>
  );
};

export default Team;
