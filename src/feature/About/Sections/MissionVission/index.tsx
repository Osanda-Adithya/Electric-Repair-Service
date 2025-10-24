import type { FC } from "react";

const MissionVission: FC = () => {
    return (
        <section id="mission-vision" className="py-20 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission &amp; Vision</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Driving our commitment to excellence in electronics repair services
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div id="mission-card" className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="bg-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                            <svg className="text-white svg-inline--fa fa-bullseye" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullseye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To provide exceptional electronics repair services that exceed customer expectations through innovative solutions, skilled craftsmanship, and unwavering commitment to quality. We strive to make technology accessible and functional for everyone by offering reliable, affordable, and timely repair services.
                        </p>
                    </div>
                    <div id="vision-card" className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="bg-green-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                            <svg className="text-white svg-inline--fa fa-eye" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To become the leading electronics repair platform, known for our expertise, innovation, and customer-centric approach. We envision a world where broken electronics are not discarded but restored to their full potential, contributing to a more sustainable and connected society.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVission;