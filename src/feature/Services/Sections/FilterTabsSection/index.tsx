import type { FC } from "react";

const FilterTabSection: FC = () => {

    const scrollToAllSection = () => {
        const targetElement = document.getElementById("services-section");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const scrollToACSection = () => {
        const targetElement = document.getElementById("ac-services");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const scrollToRefigeratorSection = () => {
        const targetElement = document.getElementById("refrigerator-services");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const scrollToOtherElectronicSection = () => {
        const targetElement = document.getElementById("other-electronics");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="filter-tabs" className="bg-white py-8 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-4">
                    <button onClick={scrollToAllSection} className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                        All Services
                    </button>
                    <button onClick={scrollToACSection} className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors">
                        AC Repair
                    </button>
                    <button onClick={scrollToRefigeratorSection} className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors">
                        Refrigerator
                    </button>
                    <button onClick={scrollToOtherElectronicSection} className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors">
                        Other Electronics
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FilterTabSection;