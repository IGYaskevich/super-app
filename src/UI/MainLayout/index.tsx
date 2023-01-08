import {Header} from "../Header";

import style from "./styles.module.scss";
import {Footer} from "../Footer";
import {FC, ReactNode} from "react";

interface IProps {
    children: ReactNode
}

export const MainLayout: FC<IProps> = ({children}) => {
    return (
        <div className={style.container}>
            <Header/>
            <div className={style.pages}>{children}</div>
            <Footer/>
        </div>

    );
};
