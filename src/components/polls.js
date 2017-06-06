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
	genChart(input){
		new Chart(document.getElementById(input), {
		    type: 'doughnut',
		    data: {
		      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
		      datasets: [
		        {
		          
		          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
		          data: [2478,5267,734,784,433]
		        }
		      ]
		    },
		    options: {
		      title: {
		        display: true,
		        text: 'Predicted world population (millions) in 2050'
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
				{this.state.showCanvas?this.genChart(this.props.id):null}
			</div>
		)
	}
}

export default Polls