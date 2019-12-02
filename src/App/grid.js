import React from "react";
import Handler from './styles/handler';

export class Grid extends React.Component {


	render() {

    	var rows=this.props.rows;
    	var cols=this.props.cols;
    	var cell_w=(Number(this.props.w.slice(0,-2))-5)/cols + 'vw';
    	var cell_h=this.props.h/rows;

    	console.log(cell_w);

	function getid(i,j){
    	return String([i,j]);
  	};

    return (
      <div id='grid' style={{left:"2vw",margin:'0px',padding:'0px',background:"#0ff2",width:this.props.w,height:this.props.h,display:"inline",position:'relative'}}>
	      {Array(rows).fill(1).map((x,i)=>{
	      		return (<div id={getid(i,5)} style={{margin:'-3px',display:"inline-block",position:'relative'}} key={i}>
			      			{Array(cols).fill(1).map((x,j)=>{
			      				return <Handler cell_w={cell_w} id={j} onClick={()=>this.props.onClick(i,j)} isClick={this.props.isClick[i][j]} key={j}/>;
			      				})
			      			}
			      		</div>);
	      		})
	  		}
      </div>
    );
}
}

export default Grid;










