import React from 'react';
import ReactDOM from 'react-dom';
import RegLog from './regLogApp.js';
import {Provider} from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(
	<Provider store = {store}>
		<RegLog />
	</Provider>,
	document.getElementById('regLog'));