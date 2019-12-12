import React from "react";

import ClickAction from './clickAction'

export class Panel extends React.Component {

  constructor(props){
    super(props);
    this.state={
      value : false
    };
  }


	render() {
    var panelStyle={margin:'0px',
    padding:'0px',
    background: '#9df9ef',//"#dff",
    width:this.props.w,
    height:this.props.h,
    display:"inline-block"};


    return (
      <div  id='panel' style={panelStyle}>
        <h1 style={{textAlign:"center"}}>Pathfinding Visualizer</h1>
        <select className="algo-selector" id='select_1'  onChange={this.onchange.bind(this)}>
          <option value="Nothing">Select Algorithm</option>
      		<option value="a_star">A*</option>
    			<option value="bfs">BFS</option>
    			<option value="dfs">DFS</option>
    			<option value="d">D</option>
      	</select>
        <div className="start_animation" onClick={this.props.onClick}>START</div>
        <ClickAction onClick={(ac)=>this.props.clickAction_func(ac)} />
      </div>
    );
}

  onchange(e){
    // var val = document.getElementById('select_1').value;
    this.props.onchange(e.target.value);
     // onChange={this.onchange()}
  }
}

export default Panel;