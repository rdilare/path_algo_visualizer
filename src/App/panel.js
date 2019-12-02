import React from "react";

export class Panel extends React.Component {
	render() {

    return (
      <div id='panel' style={{margin:'0px',padding:'0px',background:"#ff8",width:this.props.w,height:this.props.h,display:"inline-block"}}>
      	<select id='select'>
      		<option value="a">A</option>
			<option value="b">B</option>
			<option value="c">C</option>
			<option value="d">D</option>
      	</select>
      </div>
    );
}
}

export default Panel;