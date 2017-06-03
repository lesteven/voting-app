import React from 'react';

const CreatePoll = () =>{
	return(
		<div className='createPoll'>
			<h2>Create new poll:</h2>
			<form action='/polls' method='post'>
				<input className='pollTitle'type='text' name='title' placeholder='title'/><br/>
				<textarea name='options' placeholder='options separated by commas'></textarea><br/> 
				<input className='buttons' type='submit' value='Create'/><br/>		
			</form>
		</div>
	)
}

export default CreatePoll