import { useEffect, useState } from "react";

export const useFetchProducts = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchProducts = async () => {
            setIsPending(true);
            try {
                const response = await fetch(url, { signal: controller.signal });

                if (!response.ok) throw new Error(response.statusText);

                const data = await response.json();

                setIsPending(false);
                setData(data);
                setError(null);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetching was aborted.');
                } else {
                    setIsPending(false);
                    setError('Could not fetch the data.');
                }
            }
        };
        fetchProducts();

        return () => controller.abort();
    }, [url]);

    return { data, isPending, error };
};