import { NavLink } from "react-router-dom";
import { ROUTES_NAMES } from "../../routes/routesNames";

import "./styles.scss";

export const Header = () => {
  return (
    <div className={"header"}>
      <div className={"header--container"}>
        <NavLink className={"header--link"} to={ROUTES_NAMES.HOME}>
          Home
        </NavLink>
        <NavLink className={"header--link"} to={ROUTES_NAMES.POST}>
          Posts
        </NavLink>
      </div>
    </div>
  );
};
