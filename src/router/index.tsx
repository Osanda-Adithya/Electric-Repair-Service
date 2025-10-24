import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LazyLoading from "../components/LazyLoading";
import Main from "../layouts/Main";
import NotFound from "../pages/NotFound";
import { RouteLinks } from "./types";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Services from "../pages/Services";

const WebRouter: FC = () => {
    return (
        <Routes>
            <Route path={`${RouteLinks.HOME}/:role`} element={<LazyLoading pageName="Admin" />} />
            <Route element={<Main />} >
                <Route path={RouteLinks.HOME} element={<LazyLoading pageName="Home" />} />
                <Route path={RouteLinks.SERVICE} element={<Services />} />
                <Route path={RouteLinks.OURWORKS} element={<Gallery />} />
                <Route path={RouteLinks.ABOUTUS} element={<About />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default WebRouter;