import type { FC } from "react";

const CallAction: FC = () => {

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
        <section id="call-to-action" className="py-20 bg-softgray">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Experience Our Service?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Don't let broken electronics disrupt your life. Contact us today and experience the RepairPro difference with professional, reliable repair services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button onClick={onWhatsAppChat} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg flex items-center space-x-3 text-lg font-medium transition-colors">
                        <svg className="w-7 h-7 svg-inline--fa fa-whatsapp" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                        <span>Chat on WhatsApp</span>
                    </button>
                    <button onClick={onDirectCall} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center space-x-3 text-lg font-medium transition-colors">
                        <svg className="w-6 h-6 svg-inline--fa fa-phone" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
                        <span>Call Now</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CallAction;