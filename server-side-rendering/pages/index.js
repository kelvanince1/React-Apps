import React, { Component } from 'react';
import Link from 'next/link';

class IndexPage extends Component {
  static async getInitialProps(context) {
    return {appName: 'Super App'};
  };

  render() {
    return (
      <div>
        <h1>{this.props.appName}</h1>
        <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
      </div>
    )
  }
}

export default IndexPage;
