import React from 'react';


import Panel from "./panel";
import Grid from "./grid";
import ReactDOM from 'react-dom';
import {QElement,PriorityQueue} from "./modules/priorityQueue"
import a_star from "./modules/astar"
import bfs from "./modules/bfsSearch"
  
export class App extends React.Component {

  constructor(props){
    super(props);

    this.rows = 12;
    this.cols = 20;
    var start = [0,0];
    var goal = [5,5];
    var isClick = Array(this.rows).fill(1).map((x)=>(Array(this.cols).fill('b')));
    var map = Array(this.rows).fill(1).map((x)=>(Array(this.cols).fill(0)));
    isClick[start[0]][start[1]] = 'start';
    isClick[goal[0]][goal[1]] = 'goal'


    this.state={
      isClick : isClick,
      disabled : false,
      algorithm: 'Nothing',
      map : map,
      start: start,
      goal: goal,
      clickAction:'start',
    }
  }

  set_algo(val){
    // var val = document.getElementById('select').value;
    this.setState({
      algorithm: val,
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
    if(!this.state.disabled){
      if (clickAction==='start'){
        this.set_start(i,j);
      }else if(clickAction==='goal'){
        this.set_goal(i,j);
      }else if(clickAction==="wall"){
        this.set_wall(i,j);
      }
    }
  }
  

  animate(state){

    // var test = [[1,2],[1,3],[1,4],[2,4],[3,4],[4,4],[4,5]];
    var map = this.state.map;
    var start = this.state.start;
    var goal = this.state.goal;
    // var start = new QElement(sp[0],sp[1]);
    // var goal = new QElement(gp[0],gp[1]);


    if(this.state.algorithm==="Nothing"){
      alert('Select Algorithm');
      return 0;
    }

    var disabled = this.state.disabled;
    this.setState({
      disabled: true,
    });

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


    var algo_arr={
        'a_star' : this.a_star,
        'bfs' : this.bfs,
    };
    var algo = algo_arr[this.state.algorithm];
    var res = algo(map,start,goal);
    var path_nodes = res['res1'];
    var searched_nodes = res['res2'];

    var timeA = 0;

    for(let i=0; i<searched_nodes.length;i++){
      setTimeout(()=>this.update(searched_nodes[i][0],searched_nodes[i][1],'d'),(i+1)*50);
      timeA+=50;
    }

    var timeB = 0;
    for(let i=0; i<path_nodes.length;i++){
      setTimeout(()=>this.update(path_nodes[i][0],path_nodes[i][1],state),timeA + (i+1)*150);
      timeB+=150;
    }

    setTimeout(
      ()=>{this.setState({
            disabled: false,
            });
          if(!path_nodes.length){
              alert("No Path");
          }
          },timeB+timeA+1000);

  }

   update(i,j,state){
    var click = this.state.isClick.slice();
    // click[i][j] = this.state.option;
    click[i][j] = state;
    this.setState({
      isClick : click,
    });
  }



 a_star = a_star;
 bfs = bfs;


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
        <Panel h='20vh' w="100vw" clickAction_func={(ac)=>this.set_clickAction(ac)} onClick={()=>this.animate('a')} onchange={(val)=>this.set_algo(val)}/>
      	<Grid isClick={this.state.isClick} h='80vh' w='100vw' rows={this.rows} cols={this.cols} onClick={(i,j)=>{this.handleClick(i,j)}}/>
      </div>

    );
  }


}


export default App;