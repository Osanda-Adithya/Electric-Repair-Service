import { useCallback, useLayoutEffect, useState, type FC } from "react";
import { HeroSection } from "../../feature/base";
import { motion } from "framer-motion";
import { WEB_APP_URL } from "../../router/types";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const spanPattern = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2",
];

const Gallery: FC = () => {

    const [files, setFiles] = useState<any[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    const fetchImages = useCallback(async () => {
        const res = await fetch(WEB_APP_URL);
        const data = await res.json();
        setLoading(false)
        setFiles(data.reverse());
    }, [])

    useLayoutEffect(() => {
        fetchImages()
    }, [fetchImages])

    return (
        <div className="w-full">
            <HeroSection
                title="Our Work Speaks for Itself"
                description="Explore our gallery of successful repairs and see why thousands of customers trust ElectroFix Pro for all their electronics repair needs."
            />

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:auto-rows-[200px] gap-3 px-4 my-4">

                {isLoading && Array.from({ length: 29 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        borderRadius={0}
                        className="w-full h-full sm:rounded-xl"
                        containerClassName={`overflow-hidden sm:rounded-xl md:${spanPattern[index % spanPattern.length]}`}
                    />
                ))}

                {files.map((img, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className={`overflow-hidden sm:rounded-xl shadow-md md:${spanPattern[index % spanPattern.length]}`}
                    >
                        <img
                            src={`https://driver-proxy-tau.vercel.app/api/drive-proxy?fileId=${img.id}`}
                            alt={img.name}
                            className="w-full h-full object-cover sm:rounded-xl hover:opacity-90 transition-all duration-200"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Gallery;