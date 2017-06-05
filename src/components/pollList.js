import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPolls} from '../redux/modules/pollsModule'
import Polls from './polls';

class PollList extends Component{
	componentDidMount(){
		this.props.getPolls();
	}
	render(){
		let displayPoll;
		if(this.props.poll[0]){
			//console.log(this.props.poll[0].title);
			displayPoll = this.props.poll.map((poll,index)=>{
				return <Polls 
				title={this.props.poll[index].title}
				id = {this.props.poll[index]._id}
				options = {this.props.poll[index].options}
				key = {index}/>
			})
		}
		return(
			<div className='pollList'>
			{this.props.poll? displayPoll:null}
			</div>
		)
	}
}

const mapStateToProps =(state)=>{
	return{
		poll:state.poll
	}
}
const mapDispatchToProps =(dispatch)=>{
	return{
		getPolls:() =>dispatch(fetchPolls())
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(PollList);