import React, { Component } from 'react';

import CardList from '../CardList';
import ErrorBoundary from '../ErrorBoundary';
import Header from '../Header';
import Scroll from '../Scroll';
import SearchBox from '../SearchBox';

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
      });
  }

  render() {
    const { isPending, onSearch, robots } = this.props;

    return isPending ?
      <h1>Loading</h1>
    : (
      <div className="tc">
        <Header />
        <SearchBox
          onSearch={onSearch}
        />
        <Scroll>
          <ErrorBoundary>
            <CardList
              robots={this.filterRobots()}
            />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
