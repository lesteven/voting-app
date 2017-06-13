import React,{Component} from 'react';
import NavBar from './components/navBar';
import PollList from './components/pollList';
import CreatePoll from './components/createPoll';
import ShareButton from './components/shareButton.js';

class IndexApp extends Component{
	render(){
		return(
			<div>
				<NavBar />
				<ShareButton />
				<PollList />
			</div>
		)

	}
}

export default IndexApp;