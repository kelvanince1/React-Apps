import { useState, useEffect, useRef } from 'react';

export const useFetch = url => {
    const isCurrent = useRef(true);
    const [state, setState] = useState({ data: null, loading: true });

    useEffect(() => {
        return () => {
            isCurrent.current = false;
        }
    }, []);

    useEffect(() => {
        setState(state => ({ data: state.data, loading: true }));
        fetch(url)
            .then(x => x.title)
            .then(y => {
                if (isCurrent.current) {
                    setState({ data: y, loading: false });
                }
            })
    }, [url, setState]);

    return state;
};