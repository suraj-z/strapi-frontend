import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [load, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setData(data.data);
                        setLoading(false)
                    });
            } catch (e) {
                setError(e)
                console.log(e);
                setLoading(false)
            }
        }
        fetchData();
    }, [url]);
    return { data, error, load };
}

export default useFetch;