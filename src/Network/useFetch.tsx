import { useState, useEffect } from "react";

const useFetch = (url: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("Doiing APi Call in hou");

        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [url]);

    return [data];
};

export default useFetch;
