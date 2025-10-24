import { lazy, Suspense, type FC } from "react";
import PageLoader from "../PageLoader";

interface LazyLoadingProps {
    pageName: string
}

const LazyLoading: FC<LazyLoadingProps> = ({ pageName }) => {
    const ChildComponent = lazy(() => import(`../../pages/${pageName}/index.tsx`))
    return (
        <Suspense key={pageName} fallback={<PageLoader />}>
            <ChildComponent />
        </Suspense>
    )
}

export default LazyLoading;