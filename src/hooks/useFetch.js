import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ignore = false;

        fetch(url)
            .then((response) => response.json())
            .then((res) => {
                if (!ignore) {
                    setData(res);
                    setLoading(false);
                }
            });

        return () => {
            ignore = true;
        };
    }, [url]);

    return { data, loading };
}
