import type { FC } from "react";
import { HeroSection } from "../../feature/base";
import { CallAction, CompanyStory, Expertise, MissionVission, WhyChooseUs } from "../../feature/About";
import { Approches, TeamValues } from "../../feature/Home/sections";

const About: FC = () => {
    return (
        <div className="w-full">
            <HeroSection
                title="About Us"
                description="Your trusted partner in electronics repair services. We bring expertise, reliability, and excellence to every repair job."
            />
            <CompanyStory />
            <MissionVission />
            <Expertise />
            <Approches />
            <WhyChooseUs />
            <TeamValues />
            <CallAction />
        </div>
    )
}

export default About;