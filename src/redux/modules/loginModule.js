export function userLogin(user){
	return{
		type: 'USER_LOGIN',
		user
	}
}


export function fetchUser(){
	return (dispatch) =>{
		fetch('/users', { credentials : 'same-origin' })
			.then((response)=> response.json())
			.then(user => dispatch(userLogin(user)))
	}
}

export const user = (state ={username:''}, action)=>{
	switch(action.type){
		case 'USER_LOGIN':
			return action.user;

		default:
			return state;
	}
}

export default user