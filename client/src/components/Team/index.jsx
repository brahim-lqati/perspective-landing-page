import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";
import Title from "../Title";

const Team = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const team = [
    {
      firstname: "Omar",
      lastname: "Houti",
      team: "Embarqué",
      image: "images/omar.png",
    },
    {
      firstname: "Brahim",
      lastname: "LQATI",
      team: "DEV",
      image: "images/brahim.png",
    },
    {
      firstname: "Mahmoud",
      lastname: "Fettal",
      team: "DEV",
      image: "images/mahmoud.png",
    },
    {
      firstname: "Maroua",
      lastname: "Lboukili",
      team: "Marketing",
      image: "images/Maroua.png",
    },
    {
      firstname: "Ismail",
      lastname: "Baouham",
      team: "ML",
      image: "images/ismail.png",
    },
    {
      firstname: "Choukri",
      lastname: "EL Ouastani",
      team: "ML",
      image: "images/choukri.png",
    },
    {
      firstname: "Meryem",
      lastname: "EL Kasmi",
      team: "Embarqué",
      image: "images/meryeme.png",
    },
  ];

  return (
    <div id="team">
      <Card id="team">
        <Title title="Our Hard-working Team" />
        <Slider {...settings}>
          {team.map((person) => (
            <div key={person.firstname}>
              <img
                src={person.image}
                height="100%"
                width="90%"
                alt={person.firstname + person.lastname}
              />
            </div>
          ))}
        </Slider>
      </Card>
    </div>
  );
};

export default Team;
