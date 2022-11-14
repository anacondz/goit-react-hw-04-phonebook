import { useState, useEffect } from "react";

export const useLocalStorage = (key, emptyItem) => {
    const [state, setState] = useState(() => {
        return JSON.parse(window.localStorage.getItem(key)) ?? emptyItem;
    })


    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}