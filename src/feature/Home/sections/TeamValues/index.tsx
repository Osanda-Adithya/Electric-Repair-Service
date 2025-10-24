import type { FC } from "react";

const TeamValues: FC = () => {
    return (
        <section id="team-values" className="py-20 bg-gradient-to-r from-blue-500 to-blue-600  text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        The principles that guide everything we do
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div id="excellence-value" className="text-center">
                        <div className="bg-[#4b93fd] p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <svg className="text-white svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Excellence</h3>
                        <p className="text-blue-100">
                            We strive for perfection in every repair job, ensuring the highest standards of quality and craftsmanship.
                        </p>
                    </div>
                    <div id="integrity-value" className="text-center">
                        <div className="bg-[#4b93fd] p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <svg className="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Integrity</h3>
                        <p className="text-blue-100">
                            Honesty and transparency in all our dealings, from pricing to service delivery and customer communication.
                        </p>
                    </div>
                    <div id="innovation-value" className="text-center">
                        <div className="bg-[#4b93fd] p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <svg className="svg-inline--fa fa-lightbulb" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lightbulb" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Innovation</h3>
                        <p className="text-blue-100">
                            Continuously adopting new technologies and methods to improve our repair services and customer experience.
                        </p>
                    </div>
                    <div id="reliability-value" className="text-center">
                        <div className="bg-[#4b93fd] p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <svg className="svg-inline--fa fa-shield" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Reliability</h3>
                        <p className="text-blue-100">
                            Consistent, dependable service that customers can trust for all their electronics repair needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamValues;