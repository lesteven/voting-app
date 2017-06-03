import React,{Component} from 'react';
import NavBar from './components/navBar';
import CreatePoll from './components/createPoll';

class myPolls extends Component{
	render(){
		return(
			<div>
				<NavBar />
				<CreatePoll />
			</div>
		)

	}
}

export default myPolls;