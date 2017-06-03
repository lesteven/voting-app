import React from 'react';
import ReactDOM from 'react-dom';
import MyPolls from './myPollsApp.js';
import {Provider} from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(
	<Provider store = {store}>
		<MyPolls />
	</Provider>,
	document.getElementById('myPolls'));