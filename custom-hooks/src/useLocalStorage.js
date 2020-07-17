import { useState, useEffect } from 'react';

function getSavedVal(key, initialVal) {
    const savedVal = JSON.parse(localStorage.getItem(key));

    if (savedVal) return savedVal;

    if (initialVal instanceof Function) {
        return initialVal();  
    }

    return initialVal;
}

export default function useLocalStorage(key, initialVal) {
    const [value, setValue] = useState(() => {
        return getSavedVal(key, initialVal);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}