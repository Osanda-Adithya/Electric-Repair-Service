import type { FC } from "react";
import { ClipLoader } from "react-spinners";

const PageLoader: FC = () => {
    return (
        <div className="flex flex-1 min-h-screen items-center justify-center">
            <ClipLoader
                color={"#155dfc"}
                loading={true}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default PageLoader;