// import { render } from './Clone';
// import Component from './Component';

function render(component, props, parent) {
    const output = component(props);
    parent.textContent = output;
}

const Component = ({ propCount }) => {
    const count = 0;
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