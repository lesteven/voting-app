//action
export function showPolls(poll){
	return{
		type: 'DISPLAY_POLLS',
		poll
	}
}
//async, action creator
export function fetchPolls(){
	return(dispatch) =>{
		fetch('/polls/all',{credentials: 'same-origin'})
			.then((response)=> response.json())
			.then(poll =>dispatch(showPolls(poll)))
	}
}

//reducer
export const poll = (state =[],action)=>{
	switch(action.type){
		case 'DISPLAY_POLLS':
			return action.poll;
		default:
			return state;
	}
}

export default poll