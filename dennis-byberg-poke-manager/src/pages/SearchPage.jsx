import React from "react";
import SearchPokemon from "../components/SearchPokemon";

const SearchPage = ({ buttonText, addToTeam, team, setTeam }) => {
  return (
    <div>
      <SearchPokemon
        team={team}
        setTeam={setTeam}
        addToTeam={addToTeam}
        buttonText={buttonText}
      />
    </div>
  );
};

export default SearchPage;
