import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LazyLoading from "../components/LazyLoading";
import Main from "../layouts/Main";
import NotFound from "../pages/NotFound";
import { RouteLinks } from "./types";

const WebRouter: FC = () => {
    return (
        <Routes>
            <Route path={`${RouteLinks.HOME}/:role`} element={<LazyLoading pageName="Admin" />} />
            <Route element={<Main />} >
                <Route path={RouteLinks.HOME} element={<LazyLoading pageName="Home" />} />
                <Route path={RouteLinks.SERVICE} element={<LazyLoading pageName="Services" />} />
                <Route path={RouteLinks.OURWORKS} element={<LazyLoading pageName="Gallery" />} />
                <Route path={RouteLinks.ABOUTUS} element={<LazyLoading pageName="About" />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default WebRouter;