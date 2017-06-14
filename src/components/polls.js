import React,{Component} from 'react';
import Chart from 'chart.js';

class Polls extends Component {
	constructor(props){
		super(props);
		this.state ={
			showCanvas:false,
			showTable:false,
			style:{display:'none'},
			textArea:''
		}
		this.show = this.show.bind(this);
		this.close = this.close.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		this.setState({textArea:event.target.value})
	}
	show(){
		this.setState({showTable:true, style:{display:''},showCanvas:true})
	}
	close(){
		//console.log(this.state.style)
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
	ownChoice(arr){
		let index = arr.length;
		return(
			<div className='vote'>
				<input type='radio' name='vote' value={this.state.textArea} />
				<input className='ownChoice' type ='text' placeholder='Your own choice!' 
				value={this.state.textArea} onChange={this.handleChange}/>
				<br/>
			</div>
		)
	}
	chart(input){
		var url = '/polls/' + input
		return(
			<div className='chartDiv' style={this.state.style}>
			<form className='voteOptions' action={url}  method = 'post'>
 				{this.voteOptions(this.props.options)}
 				{this.props.user? this.ownChoice(this.props.options):null}
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
				{this.props.user===this.props.owner?this.deleteButton(this.props.id):null}
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