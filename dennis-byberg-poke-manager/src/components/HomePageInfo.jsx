import React from "react";
import classes from "./HomePageInfo.module.css";
import POKEMON from "../images/Pokemon.png";
import POKEBALL from "../images/pokeball2.png";

const HomePageInfo = (props) => {
  return (
    <div className={classes.homepageinfo}>
      <img className={classes.pokemonimage} src={POKEMON} />
      <section className={classes.section}>
        <p>Hej och välkommen till min inlämning i React</p>
      </section>
      <img className={classes.pokeballimage} src={POKEBALL} />
    </div>
  );
};

export default HomePageInfo;
