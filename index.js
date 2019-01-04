import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

