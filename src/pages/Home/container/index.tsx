import "./styles.scss";
import { useState } from "react";
import { Page } from "../components/page";
import { ICONS } from "../../../static/icons";
import { ROUTES_NAMES } from "../../../routes/routesNames";

export const HomeContainer = () => {
  const [state, setState] = useState({
    petPages: [
      {
        title: "You can create posts here",
        id: "posts",
        link: ROUTES_NAMES.POST,
        IconFC: ICONS.pen,
      },
    ],
  });
  return (
    <div className={"home"} id={"home-container"}>
      {/*<div className={"home--title"}>Pet Projects</div>*/}

      <div className={"home--projects"}>
        {state.petPages.map((page) => {
          const { title, id, link, IconFC } = page;

          return <Page title={title} link={link} IconFC={IconFC} key={id} />;
        })}
      </div>
    </div>
  );
};
