import React from "react";
import classes from "./HomePageInfo.module.css";

const HomePageInfo = (props) => {
  return (
    <div className={classes.homepageinfo}>
      <h1 className={classes.pagename}>Poké Manager</h1>
    </div>
  );
};

export default HomePageInfo;
