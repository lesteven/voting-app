import React,{Component} from 'react';

class ShareButton extends Component{
	share(){
		window.open("https://twitter.com/intent/tweet?text=" + 'https://sleepy-river-96174.herokuapp.com/' )
	}
	render(){
		return(
			<button className='buttons shareButton' onClick={this.share}>Share</button>
		)
	}
}

export default ShareButton;