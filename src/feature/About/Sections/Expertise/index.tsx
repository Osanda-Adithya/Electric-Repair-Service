import type { FC } from "react";

const Expertise: FC = () => {
    return (
        <section id="our-expertise" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expertise</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive repair solutions for all your electronic appliances
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div id="ac-expertise" className="bg-[#f8f9fa] p-8 rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="bg-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                            <svg className="text-white svg-inline--fa fa-snowflake" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="snowflake" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Air Conditioning</h3>
                        <p className="text-gray-600 mb-4">
                            Complete AC repair and maintenance services including cooling system diagnostics, refrigerant handling, compressor repairs, and electrical component replacement.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li>• Split AC &amp; Window AC</li>
                            <li>• Central Air Systems</li>
                            <li>• Preventive Maintenance</li>
                        </ul>
                    </div>
                    <div id="fridge-expertise" className="bg-[#f8f9fa] p-8 rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="bg-blue-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                            <svg className="text-white svg-inline--fa fa-temperature-low" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="temperature-low" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M448 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 96a96 96 0 1 1 192 0A96 96 0 1 1 320 96zM144 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM32 112C32 50.2 82.1 0 144 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S0 447.5 0 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM192 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Refrigerators</h3>
                        <p className="text-gray-600 mb-4">
                            Expert refrigerator repair services covering cooling issues, defrosting problems, door seal replacement, and compressor maintenance for all brands.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li>• Single &amp; Double Door</li>
                            <li>• Side-by-Side Models</li>
                            <li>• Commercial Fridges</li>
                        </ul>
                    </div>
                    <div id="washing-expertise" className="bg-[#f8f9fa] p-8 rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="bg-teal-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                            <svg className="text-white svg-inline--fa fa-shirt" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shirt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Washing Machines</h3>
                        <p className="text-gray-600 mb-4">
                            Professional washing machine repair including drum issues, water drainage problems, motor replacement, and control panel repairs.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li>• Top Load &amp; Front Load</li>
                            <li>• Semi &amp; Fully Automatic</li>
                            <li>• Drain &amp; Motor Issues</li>
                        </ul>
                    </div>
                    <div id="microwave-expertise" className="bg-[#f8f9fa] p-8 rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="bg-orange-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                            <svg className="text-white svg-inline--fa fa-microchip" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="microchip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Microwave Ovens</h3>
                        <p className="text-gray-600 mb-4">
                            Specialized microwave repair services covering heating issues, turntable problems, door latch repairs, and magnetron replacement.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li>• Solo &amp; Grill Models</li>
                            <li>• Convection Microwaves</li>
                            <li>• Safety Mechanism</li>
                        </ul>
                    </div>
                    <div id="other-expertise" className="bg-[#f8f9fa] p-8 rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="bg-red-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                            <svg className="text-white svg-inline--fa fa-screwdriver-wrench" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="screwdriver-wrench" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Other Appliances</h3>
                        <p className="text-gray-600 mb-4">
                            Extended repair services for various home appliances including water heaters, dishwashers, vacuum cleaners, and small kitchen appliances.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li>• Water Heaters</li>
                            <li>• Kitchen Appliances</li>
                            <li>• Home Electronics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise;