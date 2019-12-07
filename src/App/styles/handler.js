import React from 'react';
 
import Box from './Box';
import BlankBox from './BlankBox'
import Wall from './wall';
 
export class Handler extends React.Component {
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
    var cell_arr = [<Box w={cell_w} />,<BlankBox w={cell_w} />, <Wall w={cell_w} />];
    var options = ['a', 'b', 'c'];

    var index = options.indexOf(cellState);

    var box = cell_arr[index];


    return (
        <div id={this.props.id} onClick={()=>this.props.onClick(this.props.rn,this.props.cn)}  style={{display:"inline-block",margin:'0px',border:".1px"}} >

        {index!=-1?(box):(<BlankBox w={cell_w}/>)}
      </div>
    );
  }
}
 
export default Handler;


        // {cellState==='b' ? (
        //   <Box w={cell_w} />
        // ) : (
        //   <Wall w={cell_w} />
        // )}