import { useEffect, useRef, MutableRefObject } from "react";

export const useClickOutside = (handler: () => void): MutableRefObject<HTMLDivElement | null> => {
    const domNode = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const maybeHandler = (event: MouseEvent | TouchEvent) => {
            if (domNode.current && !domNode.current.contains(event.target as Node)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        document.addEventListener("touchstart", maybeHandler);
        return () => {
            document.removeEventListener("mousedown", maybeHandler);
            document.removeEventListener("touchstart", maybeHandler);
        };
    }, [handler]);
    return domNode;
};
