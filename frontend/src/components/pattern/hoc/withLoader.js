import {useEffect, useState} from "react";

export default function withLoader(Element, url) {
    return props => {
        const [data, setData] = useState(null);

        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => setData(data));
        }, []);

        if (!data) {
            return <div>Loading...</div>;
        }

        return <Element {...props} data={data} />;
    };
}
