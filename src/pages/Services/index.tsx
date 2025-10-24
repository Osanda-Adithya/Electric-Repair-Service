import type { FC } from "react";
import { FilterTabsSection, MainSection, QuickContact } from "../../feature/Services";
import { HeroSection } from "../../feature/base";

const Services: FC = () => {
    
    return (
        <div className="w-full">
            <HeroSection
                title="Professional Electronics Repair Services"
                description="Expert repair solutions for all your electronics - AC, Refrigerator, TV, Washing Machine, and more. Fast, reliable, and affordable service at your doorstep."
                showButtons
            />
            <FilterTabsSection />
            <MainSection />
            <QuickContact />
        </div>
    )
}

export default Services;