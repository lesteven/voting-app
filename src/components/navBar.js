import React,{Component} from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../redux/modules/loginModule'

class NavBar extends Component{

	componentDidMount(){
		this.props.getUser()
		
	}
	login(){
		return(
			<span className = 'userAuth'>
			<a >{this.props.user.username} </a>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<a className = 'logOut' href ='/users/logout'>Log Out</a>
			</span>
		)
	}
	render(){
		return(
			<div className='navBar'>
			<a className ='homeButton' href ='/'>Home</a>
			{this.props.user.username?
				this.login()
				: 
			<a className = 'userAuth' href ='/reglog'>Register/Login</a>
			}
			</div>
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