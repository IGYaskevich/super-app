import React, { useState } from "react";

import { AboutItem } from "./components/AboutItem";

import "../../static/styles/main-container.scss";
import "./styles.scss";

export const Home = () => {
  const [state] = useState({
    appDescription:
      "I decided to use this project to show you my work. I will be to add more information, examples and update regularly. This project has links to my projects in the github repositories, there are also projects that you can see here. These are mini projects to see how I can code. I have attached github links to these mini projects. I want to update this project regularly, and when I learn something new, I will add my new knowledge here and you can see it. This is the main goal of this project.",
  });

  return (
    <div className={"main-wrapper"}>
      <div className={"main-wrapper--container"}>
        <div className={"home"}>
          <div className={"home--about-items"}>
            <AboutItem title={"About Me"} description={""} />
            <AboutItem
              title={"About This App"}
              description={state.appDescription}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
