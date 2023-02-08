import { useEffect, useState } from "react";

const useFetchImages = (url) => {
    const [images, setImages] = useState(null);
    const [error, setError] = useState(null);
    const [load, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setImages(data);
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
    return { images, error, load };
}

export default useFetchImages;