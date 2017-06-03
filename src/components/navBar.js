import React,{Component} from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../redux/modules/loginModule'

class NavBar extends Component{

	componentDidMount(){
		this.props.getUser('/users', { credentials : 'same-origin' })
		
	}
	login(){
		return(
			<span>
				<a >{this.props.user.username} </a>
				<a href ='/mypolls'>My Polls</a>
				<a href ='/users/logout'>Log Out</a>
			</span>
		)
	}
	noLogin(){
		return(
			<span>
				<a href ='/reglog'>Register/Login</a>
			</span>
		)
	}
	render(){
		return(
			<nav className = 'navBar'>
				<a href ='/'>Home</a>
				{this.props.user.username? this.login() : 
				this.noLogin()}
			</nav>
		)
	}
}

const mapStateToProps = (state) =>{
	return{
		user:state.user
	};
};

const mapDispatchToProps = (dispatch) =>{
	return{
		getUser: (url) => dispatch(fetchUser())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);