import style from "./styles.module.scss";
import {NavLink} from "react-router-dom";
import {ROUTES_NAMES} from "../../routes/routesNames";

export const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <NavLink className={style.link} to={ROUTES_NAMES.HOME}>
                    Home
                </NavLink>
                <NavLink className={style.link} to={ROUTES_NAMES.POST}>
                    Posts
                </NavLink>
                <NavLink className={style.link} to={ROUTES_NAMES.CONTACT}>
                    CONTACT
                </NavLink>
            </div>
        </div>
    );
};
