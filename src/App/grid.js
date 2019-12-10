import React from "react";
import Handler from './styles/handler';

export class Grid extends React.Component {


	render() {

    	var rows=this.props.rows;
    	var cols=this.props.cols;
    	var cell_w=(Number(this.props.w.slice(0,-2))-2)/cols + 'vw';
    	var cell_h=(Number(this.props.h.slice(0,-2))-2)/rows + 'vh';

	function getid(i,j){
    	return String([i,j]);
  	};

    return (
      <div id='grid' style={{left:"1vw",margin:'0px',padding:'0px',background:"#0ff2",width:this.props.w,height:this.props.h,display:"inline",position:'relative'}}>
	      {Array(rows).fill(1).map((x,i)=>{
	      		return (<div id={getid(i,5)} style={{margin:'-3px',display:"inline-block",position:'relative'}} key={i}>
			      			{Array(cols).fill(1).map((x,j)=>{
			      				return <Handler rn={i} cn={j} cell_w={cell_w} cell_h={cell_h} id={j} onClick={(i,j)=>this.props.onClick(i,j)} isClick={this.props.isClick[i][j]} key={j}/>;
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










