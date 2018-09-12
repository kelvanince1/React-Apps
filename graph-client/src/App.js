import React, { Component } from 'react';
import './App.css';

async function loadGreeting() {
  const response = await fetch('http://localhost:9000/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({query: '{ greeting }'})
  });
  const responseBody = await response.json();
  console.log(responseBody.data.greeting)
  return responseBody.data.greeting;
}

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      greeting: ''
    }

    loadGreeting().then((greeting) => this.setState({greeting}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.greeting}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
