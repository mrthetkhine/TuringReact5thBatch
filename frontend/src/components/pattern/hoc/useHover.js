import {useEffect, useRef, useState} from "react";

export default function useHover()
{
    const [hovering, setHover] = useState(false);
    const ref = useRef(null);

    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);

    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);

            return () => {
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut);
            };
        }
    }, [ref.current]);

    return [ref, hovering];
}