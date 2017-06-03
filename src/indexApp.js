import React,{Component} from 'react';
import NavBar from './components/navBar';
import PollList from './components/pollList';
import CreatePoll from './components/createPoll';

class IndexApp extends Component{
	render(){
		return(
			<div>
				<NavBar />
				<PollList />
			</div>
		)

	}
}

export default IndexApp;