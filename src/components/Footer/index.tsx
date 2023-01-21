import { useState } from "react";

import * as variable from "../../static/consts";
import { ICONS_LINK } from "../../static/icons";

import "./styles.scss";

type StateType = {
  iconsList: Array<"linkedin" | "gitGub" | "cv" | "telegram">;
};
export const Footer = () => {
  const [state] = useState<StateType>({
    iconsList: ["linkedin", "gitGub", "cv", "telegram"],
  });
  return (
    <div className={"footer"}>
      <div className={"footer--container"}>
        <div className={"footer--content-items"}>
          <div className={"footer--content"}>
            <div className={"footer--content--item"}>
              {`Phone: ${variable.myNumber}`}
            </div>
            <div className={"footer--content--item"}>
              {`Email: ${variable.myEmail}`}
            </div>

            <div className={"footer--content--item"}>
              {`Current Location: ${variable.myLocation}`}
            </div>
          </div>
          <div className={"footer--content"}>
            <div className={"footer--content--links"}>
              {state.iconsList.map((key) => {
                const IconFC = ICONS_LINK[key];
                const link = variable.MyLinks[key];
                return (
                  <a
                    href={link}
                    target="_blank"
                    className={"footer--content--link"}
                    key={key}
                    rel="noreferrer"
                  >
                    <IconFC />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className={"footer--label"}>
          © 2023, Training App <br />
          creator Frontend Developer Ignat Yaskevich
        </div>
      </div>
    </div>
  );
};
