import {Route, Routes} from "react-router-dom";
import {ROUTES_NAMES} from "./routesNames";
import {Home} from "../pages/HomePage";
import {Contact} from "../pages/ContactPage";
import {PostPage} from "../pages/PostPage";


export const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES_NAMES.HOME} element={<Home/>}/>
            <Route path={ROUTES_NAMES.CONTACT} element={<Contact/>}/>
            <Route path={ROUTES_NAMES.POST} element={<PostPage/>}/>
        </Routes>
    );
};
