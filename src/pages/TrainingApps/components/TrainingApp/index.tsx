import { FC, memo, useState } from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

interface IProps {
  title: string;
  link: string;
  description: string;
  IconFC: FC;
}

export const TrainingApp: FC<IProps> = memo((props) => {
  const [state] = useState({
    isFocus: false,
  });
  const { title, link, description, IconFC } = props;

  return (
    <div className={"training-app"}>
      {!state.isFocus && (
        <div className={"training-app--item"}>
          <NavLink to={link} className={"training-app--item--img"}>
            <IconFC />
          </NavLink>
          <div className={"training-app--item--title"}>
            <strong>{title}</strong>
          </div>
          <div className={"training-app--item--title"}>{description}</div>
        </div>
      )}
    </div>
  );
});
