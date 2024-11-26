import { useState, useEffect } from "react";
export const useFetch = (fetchFunction) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the data and resolve it
        fetchFunction().then((result) => {
            setData(result);
            setLoading(false);
        });
    }, [fetchFunction]);


    return data;
};
