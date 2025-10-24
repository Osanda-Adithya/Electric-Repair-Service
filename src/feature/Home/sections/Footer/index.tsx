import type { FC } from "react";
import { Zap, Phone, MapPin } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { RouteLinks } from "../../../../router/types";

const Footer: FC = () => {
    const navigate = useNavigate();

    const navigateTo = (link: RouteLinks) => {
        navigate(link)
    }
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">TechFix Pro</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Professional electronics repair and installation services you can trust. Quality work, honest pricing, exceptional service.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li onClick={() => navigateTo(RouteLinks.SERVICE)}>
                                <a className="cursor-pointer hover:text-blue-400 transition-colors">
                                    Services
                                </a>
                            </li>
                            <li onClick={() => navigateTo(RouteLinks.OURWORKS)}>
                                <a className="cursor-pointer hover:text-blue-400 transition-colors">
                                    Our Work
                                </a>
                            </li>
                            <li onClick={() => navigateTo(RouteLinks.ABOUTUS)}>
                                <a className="cursor-pointer hover:text-blue-400 transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li onClick={() => navigateTo(RouteLinks.HOME)}>
                                <a className="cursor-pointer hover:text-blue-400 transition-colors">
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <a href="tel:+94 72 424 8693">(+94) 72 424 8693</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-blue-400" />
                                <span>Panadura, Sri Lanka</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} TechFix Pro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;