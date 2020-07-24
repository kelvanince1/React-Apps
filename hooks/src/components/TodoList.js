import React, { useState, useEffect } from 'react';

export default function TodoList() {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(res => res.json())
            .then(json => setItems(json))
    }, [resourceType]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
        
    }, []);

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>

            {/* {
                items.map(item => {
                    return <pre key={item}>{JSON.stringify(item)}</pre>
                })
            } */}

            <div>{windowWidth}</div>
        </>
    );
}