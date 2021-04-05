import { useCallback, useEffect } from "react";

/**
 *
 * @param {(...args)=>any} effect
 * @param {number} delay
 * @param {Array} deps
 */
export const useDebouncedEffect = (effect, delay , deps) => {
    const callback = useCallback(effect, deps);

    useEffect(() => {
        const handler = setTimeout(() => {
            callback();
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [callback, delay]);
}
