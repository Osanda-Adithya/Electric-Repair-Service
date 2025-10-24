import type { FC } from "react";
import { DollarSign, Clock, Shield } from 'lucide-react';

const Pricing: FC = () => {
    return (
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Fair, honest pricing for quality service. No hidden fees, no surprises.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <DollarSign className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Competitive Rates
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            We offer fair pricing based on industry standards and the complexity of the work required.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Clock className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Free Estimates
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Get a detailed quote before we start. You'll know exactly what to expect with no obligations.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            No Gimmicks
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            We don't offer discounts or promotional deals. Instead, we provide consistent, fair pricing year-round.
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-10 text-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-4">
                            Our Pricing Philosophy
                        </h3>
                        <p className="text-xl text-blue-100 leading-relaxed mb-6">
                            We believe in straightforward, honest pricing. You pay for the quality work and expertise you receive. No inflated prices followed by discounts, no seasonal sales, no pressure tactics. Just fair pricing for excellent service, every single time.
                        </p>
                        <p className="text-lg text-blue-100">
                            Contact us for a free, no-obligation estimate on your project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Pricing;