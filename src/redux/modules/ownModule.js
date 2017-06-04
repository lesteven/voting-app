//action
export function ownPolls(myPolls){
	return{
		type: 'MY_POLLS',
		myPolls
	}
}
//async, action creator
export function fetchOwnPolls(){
	return(dispatch) =>{
		fetch('/polls/personal',{credentials:'same-origin'})
			.then((response) => response.json())
			.then(myPolls => dispatch(ownPolls(myPolls)))
	}
}

//reducer
export const myPolls = (state=[],action)=>{
	switch(action.type){
		case 'MY_POLLS':
			return action.myPolls;
		default:
			return state;
	}
}
export default myPolls