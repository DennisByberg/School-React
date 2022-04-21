import React, { useState } from "react";
import classes from "./TeamPage.module.css";

const TeamPage = ({ deleteFromTeam, team, setTeam }) => {
  return (
    <div className={classes.teampage}>
      <h1>Team Page</h1>
      <ul>
        {team.map((t) => (
          <li key={t.name}>
            <button
              onClick={() => deleteFromTeam(t.name)}
              className={classes.deletebutton}
            >
              x
            </button>
            <button>Change Name</button>
            {t.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
