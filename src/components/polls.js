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
		this.setState({showTable:false,style:{display:'none'}})
	}
	chart(input){
		return(
			<div>
			<canvas style={this.state.style} id={input} width="100" height="50"></canvas>
			</div>
		)
	}
	genChart(input,options,votes,title){
		new Chart(document.getElementById(input), {
		    type: 'doughnut',
		    data: {
		      labels: options,
		      datasets: [
		        {
		          
		          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
		          data: votes
		        }
		      ]
		    },
		    options: {
		      title: {
		        display: true,
		        text: title
			      }
			    }
			});

 	 }
	render(){
		return(
			<div className='polls' 
			onClick={this.state.showTable? this.close : this.show}>
				{this.props.title}
				{this.chart(this.props.id)}
				{this.state.showCanvas?
					this.genChart(this.props.id,this.props.options,
						this.props.votes,this.props.title)
					:null}
			</div>
		)
	}
}

export default Polls