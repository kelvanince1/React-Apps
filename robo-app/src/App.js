import React, { Component } from 'react';

import { robots } from './robots';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearch = (e) => {
    this.setState({
      searchField: e.target.value
    });
  }

  render() {
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className="tc">
        <h1>Robots</h1>
        <SearchBox
          onSearch={this.onSearch}
        />
        <Scroll>
          <CardList
            robots={filteredRobots}
          />
        </Scroll>
      </div>
    );
  }
}

export default App;
