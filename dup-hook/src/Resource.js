import React, { useState, useEffect } from 'react';

export default function Resource() {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h4>{resourceType}</h4>
            {
                items.map(item => (
                    <pre>{JSON.stringify(item)}</pre>
                ))
            }
        </>
    )
}