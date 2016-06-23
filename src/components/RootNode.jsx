/* eslint no-debugger: 0 */

import React from 'react';
import {connect} from 'react-redux';
import * as CounterActions from '../actions/counter.js';
import DevTools from './DevTools';

class RootNode extends React.Component {
  render() {
    return (
      <div>
        <p>Note: The counter is initialized with a count of 5.</p>
        <p>Count: { this.props.count }</p>
        <button onClick={this.props.increment}>+ Increment</button>
        <DevTools />
      </div>
    );
  }
}

RootNode.propTypes = {
  count: React.PropTypes.number,
  increment: React.PropTypes.func
};

function mapStateToProps(state) {
  return {count: state.counter};
}

function mapActionsToProps() {
  return CounterActions;
}

export default connect(mapStateToProps, mapActionsToProps())(RootNode);
