import React from 'react';

const DefaultNavBar =()=>{
	return(
		<div className='navBar'>
		<a className ='homeButton'href ='/'>Home</a>
		<a className = 'userAuth' href ='/reglog'>Register/Login</a>
		</div>
	)
}

export default DefaultNavBar;