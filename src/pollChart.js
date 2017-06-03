import React from 'react';
import ReactDOM from 'react-dom';
import PollChart from './pollChartApp.js';
import {Provider} from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(
	<Provider store = {store}>
		<PollChart />
	</Provider>,
	document.getElementById('pollChart'));