import type { FC } from "react";

const Approches: FC = () => {
    return (
        <section id="our-approach" className="py-10 bg-gradient-to-b from-[#f8f9fa] to-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Approach</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A systematic and professional approach to every repair job
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div id="diagnosis-step" className="text-center">
                        <div className="bg-blue-600 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <span className="text-white text-2xl font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Diagnosis</h3>
                        <p className="text-gray-600">
                            Thorough examination and testing to identify the root cause of the problem using advanced diagnostic tools and techniques.
                        </p>
                    </div>
                    <div id="estimation-step" className="text-center">
                        <div className="bg-green-500 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <span className="text-white text-2xl font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Estimation</h3>
                        <p className="text-gray-600">
                            Transparent cost estimation with detailed breakdown of parts and labor, ensuring no hidden charges or surprises.
                        </p>
                    </div>
                    <div id="repair-step" className="text-center">
                        <div className="bg-blue-500 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <span className="text-white text-2xl font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Repair</h3>
                        <p className="text-gray-600">
                            Professional repair work using genuine parts and industry-standard procedures to ensure lasting solutions.
                        </p>
                    </div>
                    <div id="testing-step" className="text-center">
                        <div className="bg-purple-500 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <span className="text-white text-2xl font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Testing</h3>
                        <p className="text-gray-600">
                            Comprehensive testing and quality assurance to ensure the appliance works perfectly before delivery to customer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Approches;