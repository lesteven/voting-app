import React,{Component} from 'react';

class NavBar extends Component{
	constructor(props){
		super(props);
		this.state ={
			user:{username:''}
		}
	}
	componentDidMount(){
		fetch('/users', { credentials : 'same-origin' })
		.then(response =>response.json())
		.then(json =>{
			this.setState({
				user:json
			})
		})
	}
	login(){
		return(
			<span className = 'userAuth'>
			<a >{this.state.user.username} </a>

			<a className = 'logOut' href ='/users/logout'>Log Out</a>
			</span>
		)
	}
	render(){
		return(
			<div className='navBar'>
			<a className ='homeButton' href ='/'>Home</a>
			{this.state.user.username?
				this.login()
				: 
			<a className = 'userAuth' href ='/reglog'>Register/Login</a>
			}
			</div>
		)
	}
}

export default NavBar