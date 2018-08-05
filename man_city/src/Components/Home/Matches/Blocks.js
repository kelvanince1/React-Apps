import React , { Component } from 'react';

import { firebaseMatches } from '../../../Firebase';
import { firebaseLooper, reverseArray } from '../../UI/Misc';

class Blocks extends Component {

  state = {
    matches: []
  }

  componentDidMount() {
    firebaseMatches.limitToLast(6).once('value')
      .then((snapshot) => {
        const matches = firebaseLooper(snapshot)

        this.setState({
          matches: reverseArray(matches)
        })
      })
  }

  showMatches = () => (
    <div>
      Matches
    </div>
  )

  render() {
    console.log(this.state.matches);
    return (
      <div className='home_matches'>
        {this.showMatches(this.state.matches)}
      </div>
    );
  };
}

export default Blocks;
