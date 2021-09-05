import { useState } from './Clone';

const Component = ({ propCount }) => {
    const [count, setCount] = useState(0);
    const count = 0;
    const propCountDoubled = 0;

    return `
        State: ${count}
        Prop: ${propCount}
        Prop Doubled: ${propCountDoubled}   
    `
}

export default Component;