import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { increment } from '../../store/actions/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.addCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.subtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                  {this.props.storedResults.map(ele => (
                  <li key={ele.id} onClick={() => this.props.onDeleteResult(ele.id)}>{ele.value}</li>
                  ))}
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
    addCounter: () => dispatch({type: actionTypes.ADD, payload: 5}),
    subtractCounter: () => dispatch({type: actionTypes.SUBTRACT, payload: 5}),
    onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, payload: result}),
    onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, payload: id})
  };
};

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
