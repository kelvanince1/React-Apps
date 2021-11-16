import {useState} from 'react';
import useTimeout from './useTimeout';

export default function TimeoutComponnet() {
    const [count, setCount] = useState(10);
    const { clear, reset } = useTimeout(() => setCount(0), 1000);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={clear}>Clear</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}