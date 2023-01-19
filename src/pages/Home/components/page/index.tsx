import "./styles.scss";
import { FC, memo, useState } from "react";
import { NavLink } from "react-router-dom";

interface IProps {
  title: string;
  link: string;
  IconFC: FC;
}

export const Page: FC<IProps> = memo((props) => {
  const [state, setState] = useState({
    isFocus: false,
  });
  const { title, link, IconFC } = props;

  return (
    <div className={"page"}>
      {!state.isFocus && (
        <div className={"page--item"}>
          <NavLink to={link} className={"page--item--img"}>
            <IconFC />
          </NavLink>
          <div className={"page--item--title"}>{title}</div>
        </div>
      )}
    </div>
  );
});
