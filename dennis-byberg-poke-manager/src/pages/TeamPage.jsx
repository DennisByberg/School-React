import React, { useState } from "react";
import classes from "./TeamPage.module.css";

const TeamPage = ({ changeName, deleteFromTeam, team, setTeam }) => {
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
            <button
              onClick={() => changeName(t.name)}
              className={classes.changename}
            >
              Change Name
            </button>
            {t.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
