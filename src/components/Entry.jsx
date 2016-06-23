/* eslint no-debugger: 0 */
import React from 'react';
import RootNode from './RootNode.jsx';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from '../stores';
import {Provider} from 'react-redux';

injectTapEventPlugin();

// Create the store
const store = configureStore({counter: 5});

const RootNodeWrapper = () => (
  <Provider store={store}>
    <RootNode />
  </Provider>
);

render(<RootNodeWrapper />, document.getElementById('app'));
