import React from 'react';

import Panel from "./panel";
import Grid from "./grid";
import ReactDOM from 'react-dom';

 
import Final from '../Final';
 
export class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isClick : Array(25).fill(1).map((x)=>(Array(50).fill(false))),
      option: "b"
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
    var test = [[1,2],[1,3],[1,4],[2,4],[3,4],[4,4],[4,5]];
    for(let i=0; i<test.length;i++){
      setTimeout(()=>this.handleClick(test[i][0],test[i][1]),i*500);
    }
  }
	
  handleClick(i,j){
    const click = this.state.isClick.slice();
    click[i][j] = this.state.option;
    this.setState({
      isClick : click,
    });
  }
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
        <Panel h='20vh' w="100vw" onchange={(val)=>this.change_option(val)}/>
      	<Grid isClick={this.state.isClick} h='80vh' w='100vw' rows={10} cols={10} onClick={(i,j)=>{this.handleClick(i,j);this.animate()}}/>
      </div>

    );
  }


}


export default App;