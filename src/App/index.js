import React from 'react';

import Panel from "./panel";
import Grid from "./grid";
import ReactDOM from 'react-dom';
import {QElement,PriorityQueue} from "./modules/priorityQueue"
import Astar from "./modules/astar"
 
import Final from '../Final';
 
export class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isClick : Array(25).fill(1).map((x)=>(Array(50).fill(false))),
      option: NaN,
      map : [[0,0,0,0,0,0,0],
              [0,1,1,0,0,0,0],
              [0,0,0,1,0,0,0],
              [1,1,0,1,1,1,0],
              [0,0,0,1,0,0,0]],
    }
  }

  change_option(val){
    // var val = document.getElementById('select').value;
    this.setState({
      option: val,
    });
  }


  change_cell(i,j){
    var isClick = this.state.isClick;
    isClick[i][j] = true;
    this.setState({
      isClick: isClick,
    });
  }

  animate(){

    // var test = [[1,2],[1,3],[1,4],[2,4],[3,4],[4,4],[4,5]];
    var map = this.state.map;
    var start = new QElement(4,0);
    var goal = new QElement(4,5); 

    var test = this.Astar(map,start,goal);
    for(let i=0; i<test.length;i++){
      setTimeout(()=>this.update(test[i][0],test[i][1]),i*150);
    }
  }
	
  handleClick(i,j){
    var click = this.state.isClick.slice();
    click[i][j] = click[i][j]!='c'?'c':false;
    this.setState({
      isClick : click,
    });
  }
   update(i,j){
    var click = this.state.isClick.slice();
    click[i][j] = this.state.option;
    this.setState({
      isClick : click,
    });
  }



 Astar = Astar



  render() {
  	function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
	}



 
    return (
      // <Final/>
        // <Trigger>
        	// <Box />
       // </Trigger>
       <div id="main" style={{margin:'0px',padding:'0px',position:'relative'}}>
        <Panel h='20vh' w="100vw" onClick={()=>this.animate()} onchange={(val)=>this.change_option(val)}/>
      	<Grid isClick={this.state.isClick} h='80vh' w='100vw' rows={5} cols={7} onClick={(i,j)=>{this.handleClick(i,j)}}/>
      </div>

    );
  }


}


export default App;