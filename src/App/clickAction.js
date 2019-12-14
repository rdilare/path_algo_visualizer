import React from 'react';
import styled from 'styled-components';

export const Button = styled.div`
	background:${props=>props.bg};
  display:inline-block;
  border: 0px solid #0f0;
  border-radius: 1px;
  padding: 15px 10px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: .8em;
  cursor:pointer;
  color: #046;
`


export class ClickAction extends React.Component {
constructor(props){
    super(props);
    this.state={
      clickAction:'start',
      bg: ['#ff0','#0ff','#0ff']
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

  	return(<div className="clickAction">
  			<Button className="clickAction-button" bg={this.state.bg[0]} onClick={()=>this.update(0)}>Start</Button>
  			<Button className="clickAction-button" bg={this.state.bg[1]} onClick={()=>this.update(1)}>Wall</Button>
  			<Button className="clickAction-button" bg={this.state.bg[2]} onClick={()=>this.update(2)}>Goal</Button>
  		</div>
  		);
  }
}


export default ClickAction;