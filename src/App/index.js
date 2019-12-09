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

    var isClick = Array(25).fill(1).map((x)=>(Array(50).fill('b')));
    isClick[0][0] = 'start';


    this.state={
      isClick : isClick,
      option: NaN,
      map : Array(25).fill(1).map((x)=>(Array(50).fill(0))),
      start: [0,0],
      goal: [10,10],
      clickAction:'start',
    }
  }

  change_option(val){
    // var val = document.getElementById('select').value;
    this.setState({
      option: val,
    });
  }


  set_start(i,j){
    var isClick = this.state.isClick.slice();
    var start = this.state.start;
    isClick[start[0]][start[1]] = 'b';
    isClick[i][j] = 'start'
    this.setState({
      start : [i,j]
    });
  }
  set_goal(i,j){
    var isClick = this.state.isClick.slice();
    var goal = this.state.goal;
    isClick[goal[0]][goal[1]] = 'b';
    isClick[i][j] = 'goal'
    this.setState({
      goal : [i,j]
    });
  }
  set_clickAction(action){
    this.setState({
      clickAction : action,
    });
  }
  
  set_wall(i,j){
    var click = this.state.isClick.slice();
    var map = this.state.map.slice()
    click[i][j] = click[i][j]!='c'?'c':'b';
    map[i][j] = map[i][j]!=0?0:1;
    this.setState({
      isClick : click,
      map : map,
    });
  }

  handleClick(i,j){
    var clickAction = this.state.clickAction;
    if (clickAction==='start'){
      this.set_start(i,j);
    }else if(clickAction==='goal'){
      this.set_goal(i,j);
    }else if(clickAction==="wall"){
      this.set_wall(i,j);
    }
  }
  

  animate(){

    // var test = [[1,2],[1,3],[1,4],[2,4],[3,4],[4,4],[4,5]];
    var map = this.state.map;
    var sp = this.state.start;
    var gp = this.state.goal;
    var start = new QElement(sp[0],sp[1]);
    var goal = new QElement(gp[0],gp[1]); 

    setTimeout(()=>{
      var isClick = this.state.isClick.slice();
      for(let i=0;i<isClick.length;++i){
        for(let j=0;j<isClick[0].length;++j){
          if(isClick[i][j]!='c' && isClick[i][j]!='start' && isClick[i][j]!='goal'){
            isClick[i][j]='b';
          }
        }
      }
      this.setState({
          isClick : isClick,
      })
    },15);

    var test = this.Astar(map,start,goal);
    for(let i=0; i<test.length;i++){
      setTimeout(()=>this.update(test[i][0],test[i][1]),(i+1)*150);
    }
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
        <Panel h='20vh' w="100vw" clickAction_func={(ac)=>this.set_clickAction(ac)} onClick={()=>this.animate()} onchange={(val)=>this.change_option(val)}/>
      	<Grid isClick={this.state.isClick} h='80vh' w='100vw' rows={15} cols={27} onClick={(i,j)=>{this.handleClick(i,j)}}/>
      </div>

    );
  }


}


export default App;