import React, { Component } from 'react';
import { connect } from 'react-redux';

import { robots } from './robots';
import CardList from './components/CardList';
import ErrorBoundary from './components/ErrorBoundary';
import Scroll from './components/Scroll';
import SearchBox from './components/SearchBox';
import { setSearchField } from './actions/actions';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: robots
    }
  }

  render() {
    const { robots } = this.state;
    const { onSearch, searchField } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className="tc">
        <h1>Robots</h1>
        <SearchBox
          onSearch={onSearch}
        />
        <Scroll>
          <ErrorBoundary>
            <CardList
              robots={filteredRobots}
            />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (event) => dispatch(setSearchField(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
