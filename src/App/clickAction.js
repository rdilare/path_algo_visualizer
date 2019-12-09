import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
	background:${props=>props.bg};
`


export class ClickAction extends React.Component {
constructor(props){
    super(props);
    this.state={
      clickAction:'start',
      bg: ['#0ff','#0ff','#0ff']
    }
  }

  update(idx){
  	var action =['start', 'wall', 'goal']
  	var bg = Array(3).fill("#0ff");
  	bg[idx] = "#ff0";
  	this.setState({
  		bg : bg,
  	});
  	this.props.onClick(action[idx]);
  }

  render(){

  	return(<div>
  			<Button bg={this.state.bg[0]} onClick={()=>this.update(0)}>Start</Button>
  			<Button bg={this.state.bg[1]} onClick={()=>this.update(1)}>Wall</Button>
  			<Button bg={this.state.bg[2]} onClick={()=>this.update(2)}>Goal</Button>
  		</div>
  		);
  }
}


export default ClickAction;