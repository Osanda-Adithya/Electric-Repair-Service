import type { FC } from "react";

const CompanyStory: FC = () => {
    return (
        <section id="company-story" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Founded with a passion for bringing broken electronics back to life, We have been serving communities with dedication and expertise for over a decade. What started as a small repair shop has grown into a comprehensive electronics repair platform.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We understand how frustrating it can be when your essential appliances break down. That's why we've built our entire business around providing fast, reliable, and affordable repair solutions that get your life back on track.
                        </p>
                        <div className="flex items-center space-x-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">10+</div>
                                <div className="text-gray-600">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">24/7</div>
                                <div className="text-gray-600">Support Available</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">100%</div>
                                <div className="text-gray-600">Quality Guaranteed</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-96 overflow-hidden rounded-2xl">
                        <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ee8dc22da0-023abd38d0d204ecd35b.png" alt="professional electronics repair technician working on air conditioner and refrigerator in modern workshop, high-tech equipment, clean workspace" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyStory;