import React, { useEffect, useState } from "react";
import classes from "./SearchPokemon.module.css";

const SearchPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const asyncOnSearch = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
      );
      const json = await response.json();
      setPokemon(json.results);
    };
    asyncOnSearch();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <ul>
        {pokemon
          .filter((p) => p.name.toLowerCase().includes(text.toLowerCase()))
          .map((p) => (
            <li key={p.name}>
              <button>+</button>
              {p.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchPokemon;
