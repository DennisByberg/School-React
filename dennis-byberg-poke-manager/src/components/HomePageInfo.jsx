import React from "react";
import classes from "./HomePageInfo.module.css";
import POKEMON from "../images/Pokemon.png";
import POKEBALL from "../images/pokeball2.png";

const HomePageInfo = (props) => {
  return (
    <div className={classes.homepageinfo}>
      <img className={classes.pokemonimage} src={POKEMON} alt="" />
      <section className={classes.section}>
        <p>Hej och välkommen till min inlämning i React</p>
      </section>
      <img className={classes.pokeballimage} src={POKEBALL} alt="" />
    </div>
  );
};

export default HomePageInfo;

// korrekt inlämning
// funktionell CSS, med koppling till temat
// se lista på minst 10 Pokémons
// söka i listan, baserat på namn
// lägga till laget
// peta ur laget
// ge lagmedlemmar smeknamn
// minst 3 komponenter
// data måste inte hämtas från API:et
