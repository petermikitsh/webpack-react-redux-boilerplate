import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';
import DevTools from '../components/DevTools';

export default function configureStore(initialState = {}) {
  return createStore(
    combineReducers(reducers),
    initialState,
    compose(
      applyMiddleware(thunk),
      DevTools.instrument()
    )
  );
}


