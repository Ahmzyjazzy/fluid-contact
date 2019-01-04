import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';

const enhancers = [
  applyMiddleware(thunk.withExtraArgument({}))  
];

const store = createStore(rootReducer,
  compose(...enhancers)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);

