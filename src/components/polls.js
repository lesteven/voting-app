import React,{Component} from 'react';
import Chart from 'chart.js';

class Polls extends Component {
	constructor(props){
		super(props);
		this.state ={
			showCanvas:false,
			showTable:false,
			style:{display:'none'}
		}
		this.show = this.show.bind(this);
		this.close = this.close.bind(this);
	}
	show(){
		this.setState({showTable:true, style:{display:''},showCanvas:true})
	}
	close(){
		console.log(this.state.style)
		this.setState({showTable:false,style:{display:'none'}})
	}
	voteOptions(arr){
		let optionsList = arr.map((options,index)=>{
			return (
				<div key={index} className= 'vote'>
				<input type='radio' name='vote' value={index}/>
				{arr[index]}<br/>
				</div>)
		})
		return optionsList;
	}
	chart(input){
		var url = '/polls/' + input
		return(
			<div className='chartDiv' style={this.state.style}>
			<form className='voteOptions' action={url}  method = 'post'>
 				{this.voteOptions(this.props.options)}
				<input className='buttons' type='submit' value= 'Vote!'/>
			</form>
			<canvas id={input} width="100" height="30"></canvas>
			</div>
		)
	}
	deleteButton(input){
		var url = '/polls/' + input + '?_method=DELETE'
		return(	
			<form className ='deleteSpan' action={url} method='post'>
				<input className='delete' type='submit' value='Delete'/>
			</form>
		)
	}
	genChart(input,options,votes,colors){
		new Chart(document.getElementById(input), {
		    type: 'doughnut',
		    data: {
		      labels: options,
		      datasets: [
		        {
		          backgroundColor: colors,
		          data: votes
		        }
		      ]
		    }
			});

 	 }
	render(){
		return(
			<div className='polls' >
				{this.deleteButton(this.props.id)}
				{this.props.title}
				<span className='buttonGroup'>
					<button onClick={this.state.style.display===''?this.close:this.show} 
					className='buttons'>Open/Close</button>
				</span>
				{this.chart(this.props.id)}
				{this.state.showCanvas?
					this.genChart(this.props.id,this.props.options,
						this.props.votes,this.props.colors)
					:null}
			</div>
		)
	}
}

export default Polls