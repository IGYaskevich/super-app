import { AboutItem } from "./components/AboutItem";

import { Description } from "../../static/consts";

import "../../static/styles/main-container.scss";
import "./styles.scss";

export const Home = () => {
  return (
    <div className={"main-wrapper"}>
      <div className={"main-wrapper--container"}>
        <div className={"home"}>
          <div className={"home--about-items"}>
            <AboutItem title={"About Me"} description={Description.me} />
            <AboutItem title={"About This App"} description={Description.app} />
          </div>
        </div>
      </div>
    </div>
  );
};
