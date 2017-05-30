import React,{Component} from 'react';

class NavBar extends Component{
	render(){
		return(
			<div className='navBar'>
			<a className ='homeButton' href ='/'>Home</a>
			<a className = 'userAuth' href ='/reglog'>Register/Login</a>

			<a className = 'logOut' href ='/users/logout'>Log Out</a>
			</div>
		)
	}
}

export default NavBar