import React from "react";

export class Panel extends React.Component {

  constructor(props){
    super(props);
    this.state={
      value : false
    };
  }


	render() {

    return (
      <div id='panel' style={{margin:'0px',padding:'0px',background:"#ff8",width:this.props.w,height:this.props.h,display:"inline-block"}}>
      	<select id='select_1'  onChange={this.onchange.bind(this)}>
      		<option value="a">A</option>
			<option value="b">B</option>
			<option value="c">C</option>
			<option value="d">D</option>
      	</select>
      </div>
    );
}
  onchange(e){
    // var val = document.getElementById('select_1').value;
    this.props.onchange(e.target.value);
     // onChange={this.onchange()}
  }
}

export default Panel;