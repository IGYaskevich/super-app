import React from "react";

import { HomeContainer } from "./container";

import "../../static/styles/main-page-container.scss";

export const Home = () => {
  return (
    <div className={"main-wrapper"}>
      <div className={"main-wrapper--container"}>
        <HomeContainer />
      </div>
    </div>
  );
};
