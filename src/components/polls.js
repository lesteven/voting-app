import React,{Component} from 'react';

class Polls extends Component {
	constructor(props){
		super(props);
		this.state ={
			showTable:false
		}
		this.show = this.show.bind(this);
		this.close = this.close.bind(this);
	}
	show(){
		this.setState({showTable:true})
	}
	close(){
		this.setState({showTable:false})
	}
	chart(){
		return(
			<div>
			{this.props.id}
			</div>
		)
	}
	render(){
		return(
			<div className='polls' 
			onClick={this.state.showTable? this.close:this.show}>
				{this.props.title}
				{this.state.showTable?this.chart():null}
			</div>
		)
	}
}

export default Polls