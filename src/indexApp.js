import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DefaultNavBar from './components/defaultNavBar';
import PollList from './components/pollList';

class IndexApp extends Component{
	render(){
		return(
			<div>
				<DefaultNavBar/>
				<PollList />
			</div>
		)

	}
}

export default IndexApp;