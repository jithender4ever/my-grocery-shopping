import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

 /* eslint-disable no-underscore-dangle */
let store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 /* eslint-enable */

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

//ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
