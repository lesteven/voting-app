import React from 'react';
import ReactDOM from 'react-dom';
import Index from './indexApp.js';
import {Provider} from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(
	<Provider store = {store}>
		<Index />
	</Provider>,
	document.getElementById('index'));