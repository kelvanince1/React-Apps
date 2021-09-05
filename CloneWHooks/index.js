// import { render, useState } from './Clone';
// import Component from './Component';

let globalId = 0;
let globalParent;
const componentState = new Map();

function useState(initialState) {
    const id = globalId;
    const { cache, props, component } = componentState.get(globalParent);

    if (!cache[id]) {
        cache[id] = { value: typeof initialState === 'function' ? initialState() : initialState }
    }

    const setState = state => {
        if (typeof state === 'function') {
            cache[id].value = state(cache[id].value);
        } else {
            cache[id].value = state;
        }

        render(component, props, globalParent);
    }

    globalId++;

    return [cache[id].value, setState];
}


function render(component, props, parent) {
    const state = componentState.get(parent) || { cache: [] }
    componentState.set(parent, { ...state, component, props })
    globalParent = parent;
    const output = component(props);
    globalId = 0;
    parent.textContent = output;
}

const Component = ({ propCount }) => {
    const [count, setCount] = useState(30);
    const propCountDoubled = 0;

    return `
        State: ${count}
        Prop: ${propCount}
        Prop Doubled: ${propCountDoubled}   
    `
}

let propCount = 0;

document
    .getElementById('btn-prop')
    .addEventListener('click', () => {
        propCount++;
        showComponent();
    })

const showComponent = () => {
    render(Component, { propCount }, document.getElementById('root'));
}

showComponent();