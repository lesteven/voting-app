import React from 'react';
import ReactDOM from 'react-dom';
import Index from './indexApp.js';
import {Provider} from 'react-redux';
import {store} from './redux/store'

ReactDOM.render(
	<Provider store = {store}>
	<Index />
	</Provider>,
	document.getElementById('index'));