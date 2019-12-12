import React from 'react';
 
import PathBox from './pathBox';
import NotVisitedBox from './notVisitedBox'
import WallBox from './wallBox';
import VisitedBox from './visitedBox';
import StartBox from './startBox';
import GoalBox from './goalBox';
 
export class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClick: false }
  }
  toggleClick = () => {
    this.setState({ isClick: !this.state.isClick });
  }

  loop=()=>{
    function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }

    // console.log(this.props.id);
    // document.getElementById(this.props.id).className='A';
    // sleep(3000);
    // document.getElementById(this.props.id).className='B';

    for(let i=0;i<5;i++){
    setTimeout(()=>{
      document.getElementById(i).className='B';
      this.setState({ isClick: !this.state.isClick });
    },i*200);
  }

  }
 
  render() {
    const cellState = this.props.isClick;
    var cell_w=this.props.cell_w;
    var cell_h=this.props.cell_h;
    var cell_arr={
      'a' : <PathBox w={cell_w} h={cell_h} />,
      'b' : <NotVisitedBox w={cell_w} h={cell_h} />,
      'c' : <WallBox w={cell_w} h={cell_h} />,
      'd' : <VisitedBox w={cell_w} h={cell_h} />,
      'start': <StartBox w={cell_w} h={cell_h} />,
      'goal': <GoalBox w={cell_w} h={cell_h} />,
    }


    var box = cell_arr[cellState];


    return (
        <div id={this.props.id} onClick={()=>this.props.onClick(this.props.rn,this.props.cn)}  style={{display:"inline-block",margin:'0px',border:".1px"}} >
        {box}
      </div>
    );
  }
}
 
export default Cell;


        // {cellState==='b' ? (
        //   <Box w={cell_w} />
        // ) : (
        //   <Wall w={cell_w} />
        // )}


                // {index!=-1?(box):(<BlankBox w={cell_w}/>)}
