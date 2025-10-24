import type { FC } from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../../feature/Home/sections";

const Main: FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex flex-1 mt-[60px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Main;