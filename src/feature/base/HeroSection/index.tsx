import type { FC } from "react";

interface HeroSectionProp {
    title: string;
    description: string;
    showButtons?: boolean;
}

const HeroSection: FC<HeroSectionProp> = (props) => {

    const onDirectCall = () => {
        window.location.href = "tel:+94724248693"
    }

    return (
        <section id="hero-banner" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{props.title}</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">{props.description}</p>
                    {props.showButtons && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={onDirectCall} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Call for Service
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                Get Quote
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
export default HeroSection;