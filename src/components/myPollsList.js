import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchOwnPolls} from '../redux/modules/ownModule'
import Polls from './polls';

class OwnList extends Component{
	componentDidMount(){
		this.props.getMyPolls();
	}
	render(){
		let displayPoll;
		if(this.props.myPolls){
			//console.log(this.props.myPolls[0].title);
			displayPoll = this.props.myPolls.map((poll,index)=>{
				return <Polls 
				title={this.props.myPolls[index].title}
				id = {this.props.myPolls[index]._id}
				votes = {this.props.myPolls[index].votes}
				options = {this.props.myPolls[index].options}
				colors = {this.props.myPolls[index].colors}
				key = {index}/>
			})
		}
		return(
			<div className= 'pollList'>
			{this.props.myPolls? displayPoll:null}
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return{
		myPolls:state.myPolls
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		getMyPolls:() => dispatch(fetchOwnPolls())
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(OwnList);