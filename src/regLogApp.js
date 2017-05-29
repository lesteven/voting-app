import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DefaultNavBar from './components/defaultNavBar';
class RegLog extends Component{
	render(){
		return(
			<div>
				<DefaultNavBar />
				<div className = 'reglog'>
				<span className='register'>
					<h2>Register</h2>
					<form action='/users/register' method='post'>
						<input type='text' name='username' placeholder='username'/> 
						<br/>
						<input type='password' name='password' placeholder='password'/> 
						<br/>
						<input className='buttons' type='submit' value='Register'/>
					</form>
				</span>
				<span className = 'login'>
					<h2>Login</h2>
					<form action='/users/login' method='post'>
						<input type='text' name='username' placeholder='username'/> 
						<br/>
						<input type='password' name='password' placeholder='password'/> 
						<br/>
						<input className='buttons' type='submit' value='Login'/>
					</form>
				</span>
				</div>
			</div>
		)

	}
}

export default RegLog;