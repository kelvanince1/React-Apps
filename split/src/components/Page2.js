import React from 'react';

import logo from '../logo.svg';

const Page2 = (props) =>  {
    const { onRouteChange } = props;
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Page 2
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>

            <button onClick={() => onRouteChange('page1')}>Page 1</button>
            <button onClick={() => onRouteChange('page3')}>Page 3</button>
        </div>
    );
}

export default Page2;