import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from './components/CardList';
import ErrorBoundary from './components/ErrorBoundary';
import Scroll from './components/Scroll';
import SearchBox from './components/SearchBox';
import { setSearchField, requestRobots } from './actions/actions';

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { isPending, onSearch, robots, searchField } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return isPending ?
      <h1>Loading</h1>
    : (
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
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
