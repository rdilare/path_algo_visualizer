import React from 'react';

import Panel from "./panel";
import Grid from "./grid";
import ReactDOM from 'react-dom';

 
import Final from '../Final';
 
export class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isClick : Array(25).fill(Array(50).fill(false)),
      option: false
    }
  }

  change_option(){
    var val = document.getElementById('select').value;
    this.setState({
      option: val,
    });
  }
	
  handleClick(i,j){
    var isClick = this.state.isClick;
    isClick[i][j] = this.state.option;
    this.setState({
      isClick : isClick,
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
        <Panel h='20vh' w="100vw"/>
      	<Grid isClick={this.state.isClick} h='80vh' w='100vw' rows={20} cols={40} onClick={()=>this.handleClick}/>
      </div>

    );
  }


}


export default App;