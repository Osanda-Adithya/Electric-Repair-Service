import type { FC } from "react";
import { Approches, InstantSupport, Intro, KeyServices, Pricing, TeamValues } from "../../feature/Home/sections";

const Home: FC = () => {
    return (
        <div className="flex flex-col min-h-screen min-w-screen">
            <Intro />
            <InstantSupport />
            <KeyServices />
            <Approches />
            <Pricing />
            <TeamValues />
        </div>
    );
}

export default Home;