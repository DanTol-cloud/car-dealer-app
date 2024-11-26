import React, { Suspense } from "react";
import ResultPageContent from "./ResultPageContent";
import LoadingSkeleton from "@/components/LoadingSkeleton";

const ResultPage = ({ params }) => {
    return (
        <Suspense fallback={<LoadingSkeleton type="result" />}>
            <ResultPageContent params={params} />
        </Suspense>
    );
};

export default ResultPage;
