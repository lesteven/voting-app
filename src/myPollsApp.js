import React,{Component} from 'react';
import NavBar from './components/navBar';
import CreatePoll from './components/createPoll';
import OwnList from './components/myPollsList';

class myPolls extends Component{
	render(){
		return(
			<div>
				<NavBar />
				<CreatePoll />
				<OwnList />
			</div>
		)

	}
}

export default myPolls;