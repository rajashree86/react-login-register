import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import {App} from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { store } from './helpers';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
