import { Building, HomeIcon, InfoIcon, LucideAward, MenuIcon } from "lucide-react";
import { useState, type FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {

    const [isOpen, setOpen] = useState<boolean>(false)

    const links = [
        { to: '/', label: 'Home', icon: <HomeIcon className="w-6 h-6 text-primary" /> },
        { to: '/services', label: 'Services', icon: <Building className="w-6 h-6 text-primary" /> },
        { to: '/gallery', label: 'Our works', icon: <LucideAward className="w-6 h-6 text-primary" /> },
        { to: '/about', label: 'About', icon: <InfoIcon className="w-6 h-6 text-primary" /> },
    ]

    const onWhatsAppChat = () => {
        const text = encodeURIComponent(
            "Hello there, I’d like to get my electronic device repaired.\nHere are the details:\n• Device type: [e.g., TV, Laptop, Mobile Phone]\n• Brand/Model: [Enter brand or model]\n• Issue: [Briefly describe the problem]\n\nCan you please let me know the estimated cost and repair time?\n\n"
        );
        const sinhalaMessage = "%20%E0%B7%84%E0%B7%99%E0%B6%BD%E0%B7%9D%2C%20%E0%B6%B8%E0%B6%A7%20%E0%B6%B8%E0%B6%9C%E0%B7%9A%20%E0%B6%89%E0%B6%BD%E0%B7%99%E0%B6%9A%E0%B7%8A%E0%B6%A7%E0%B7%8A%E0%B6%BB%E0%B7%9C%E0%B6%B1%E0%B7%92%E0%B6%9A%E0%B7%8A%20%E0%B6%8B%E0%B6%B4%E0%B6%9A%E0%B6%BB%E0%B6%AB%E0%B6%BA%20%E0%B6%85%E0%B6%BD%E0%B7%94%E0%B6%AD%E0%B7%8A%E0%B7%80%E0%B7%90%E0%B6%A9%E0%B7%92%E0%B6%BA%E0%B7%8F%20%E0%B6%9A%E0%B6%BB%E0%B6%9C%E0%B6%B1%E0%B7%8A%E0%B6%B1%20%E0%B6%95%E0%B7%9C%E0%B6%B1%E0%B7%99%E0%B7%80%E0%B7%9A%E0%B6%AD%E0%B7%8A.%20%0A%E0%B7%80%E0%B7%92%E0%B7%83%E0%B7%8A%E0%B6%AD%E0%B6%BB%20%E0%B6%B8%E0%B7%99%E0%B6%B1%E0%B7%8A%E0%B6%B1%3A%20%0A%E2%80%A2%20%E0%B6%8B%E0%B6%B4%E0%B6%9A%E0%B6%BB%E0%B6%AB%E0%B6%BA%E0%B7%9A%20%E0%B7%80%E0%B6%BB%E0%B7%8A%E0%B6%9C%E0%B6%BA%3A%20%5B%E0%B6%8B%E0%B6%AF%E0%B7%8F%3A%20%E0%B6%A7%E0%B7%99%E0%B6%BD%E0%B7%92%E0%B7%80%E0%B7%92%E0%B7%82%E0%B6%B1%E0%B7%8A%2C%20%E0%B6%BD%E0%B7%90%E0%B6%B4%E0%B7%8A%E0%B6%A7%E0%B7%9D%E0%B6%B4%E0%B7%8A%2C%20%E0%B6%A2%E0%B6%82%E0%B6%9C%E0%B6%B8%20%E0%B6%AF%E0%B7%94%E0%B6%BB%E0%B6%9A%E0%B6%AE%E0%B6%B1%E0%B6%BA%5D%20%0A%E2%80%A2%20%E0%B7%80%E0%B7%99%E0%B6%BD%E0%B7%85%E0%B6%B3%20%E0%B6%B1%E0%B7%8F%E0%B6%B8%E0%B6%BA%E0%B7%8A%2F%E0%B6%B8%E0%B7%9C%E0%B6%A9%E0%B6%BD%E0%B6%BA%E0%B7%8A%3A%20%5B%E0%B7%80%E0%B7%99%E0%B6%BD%E0%B7%85%E0%B7%8A%E0%B6%B1%E0%B7%8F%E0%B6%B8%E0%B6%BA%E0%B7%84%E0%B7%9D%20%E0%B6%B8%E0%B7%9C%E0%B6%A9%E0%B6%BD%E0%B6%BA%E0%B7%84%E0%B7%8F%20%E0%B6%85%E0%B6%AD%E0%B7%94%E0%B7%85%E0%B6%AD%E0%B7%8A%20%E0%B6%9A%E0%B6%B1%E0%B7%8A%E0%B6%B1%5D%20%0A%E2%80%A2%20%E0%B6%9C%E0%B7%90%E0%B6%A7%E0%B6%BD%E0%B7%94%E0%B7%80%3A%20%5B%E0%B6%9C%E0%B7%90%E0%B6%A7%E0%B6%BD%E0%B7%94%E0%B7%80%E0%B6%B8%E0%B7%99%E0%B6%9A%E0%B6%BA%E0%B7%99%E0%B6%B1%E0%B7%8A%20%E0%B7%80%E0%B7%92%E0%B7%83%E0%B7%8A%E0%B6%AD%E0%B6%BB%20%E0%B6%9A%E0%B6%B1%E0%B7%8A%E0%B6%B1%5D%20%0A%0A%E0%B6%9A%E0%B6%BB%E0%B7%94%E0%B6%AB%E0%B7%8F%E0%B6%9A%E0%B6%BB%20%E0%B6%85%E0%B6%B1%E0%B7%94%E0%B6%B8%E0%B7%8F%E0%B6%B1%20%E0%B6%B4%E0%B7%92%E0%B6%BB%E0%B7%92%E0%B7%80%E0%B7%90%E0%B6%BA%E0%B7%8A%20%E0%B7%83%E0%B7%84%20%E0%B6%85%E0%B6%BD%E0%B7%94%E0%B6%B8%E0%B7%8A%E0%B6%AD%E0%B7%80%E0%B7%90%E0%B6%A9%E0%B7%92%E0%B6%BA%E0%B7%8F%20%E0%B6%9A%E0%B7%92%E0%B6%BB%E0%B7%92%E0%B6%B8%E0%B6%A7%20%E0%B6%85%E0%B7%80%E0%B7%94%E0%B7%83%E0%B7%8A%E0%B6%BA%20%E0%B6%9A%E0%B7%8F%E0%B6%BD%E0%B6%BA%20%E0%B6%9A%E0%B7%92%E0%B6%BA%E0%B6%BD%E0%B7%8F%20%E0%B6%AF%E0%B7%99%E0%B6%B1%E0%B7%8A%E0%B6%B1."
        const mergeMessage = `${text}${sinhalaMessage}`
        window.open(`https://wa.me/94724248693?text=${mergeMessage}`, '_blank');
    }

    const onDirectCall = () => {
        window.location.href = "tel:+94724248693"
    }

    return (
        <div className="flex fixed min-w-screen shadow items-center h-[60px] bg-white px-[20px] md:px-[80px] z-50">
            <button className="mr-4 sm:hidden" onClick={() => setOpen(true)}>
                <MenuIcon />
            </button>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-col">
                <i className="text-white text-lg" data-fa-i2svg><svg className="svg-inline--fa fa-screwdriver-wrench" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="screwdriver-wrench" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path></svg></i>
            </div>
            <h1 className="text-xl font-bold text-gray-900 ml-4">Priyanga Electric</h1>
            <nav className="hidden flex-2 justify-center space-x-6 sm:flex">
                {links.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `hover:text-blue200 transition-colors font-medium ${isActive ? 'text-blue100' : 'text-gray100'
                            }`
                        }
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>

            <div className="flex flex-1 justify-end md:flex-none">
                <button onClick={onWhatsAppChat} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center border border-soft-gray mr-2 md:space-x-2">
                    <svg className="svg-inline--fa fa-whatsapp w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                    <p className="hidden md:inline">Whatsapp</p>
                </button>
                <button onClick={onDirectCall} className="bg-blue-600 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center border border-soft-gray  md:space-x-2">
                    <svg className="svg-inline--fa fa-phone w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
                    <p className="hidden md:inline">Call Now</p>
                </button>
            </div>
            {isOpen && <div onClick={() => setOpen(false)} className="absolute min-w-screen min-h-screen bg-black top-0 left-0 opacity-50" />}
            <div className={`absolute flex flex-col w-20 min-h-screen bg-[#f8f9fa] shadow-2xl left-0 top-0 space-y-6 pt-5 rounded-r-lg ${isOpen ? 'translate-x-0' : '-translate-x-full'} duration-100`}>
                {links.map(({ to, icon }) => (
                    <NavLink
                        onClick={() => setOpen(false)}
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `flex items-center justify-center  py-4 rounded-r-lg ${isActive ? 'bg-blue-100 border-r-8 border-r-blue-600' : 'border-b-2 border-b-gray-100 rounded-r-none'}`
                        }
                    >
                        {icon}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Navbar;