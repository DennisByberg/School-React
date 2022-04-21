import React from "react";
import classes from "./HomePageInfo.module.css";
import POKEMON from "../images/Pokemon.png";
import POKEBALL from "../images/pokeball2.png";

const HomePageInfo = (props) => {
  return (
    <div className={classes.homepageinfo}>
      <img className={classes.pokemonimage} src={POKEMON} alt="" />
      <section className={classes.section}>
        <p>DENNIS BYBERG POKE MANAGER </p>
      </section>
      <img className={classes.pokeballimage} src={POKEBALL} alt="" />
    </div>
  );
};

export default HomePageInfo;
