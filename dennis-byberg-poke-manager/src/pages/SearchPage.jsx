import React from "react";
import SearchPokemon from "../components/SearchPokemon";

const SearchPage = ({ addToTeam, team, setTeam }) => {
  return (
    <div>
      <SearchPokemon team={team} setTeam={setTeam} addToTeam={addToTeam} />
    </div>
  );
};

export default SearchPage;
