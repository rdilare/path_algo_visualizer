import styled from 'styled-components';
 
 
export const BlankBox = styled.div`
  display: grid;
  background: #fff;
  width: ${props=>props.w};
  height: 30px;
  position: relative;
  margin:0px;
  padding:0px;
  border:.1px solid #0ff5;
  box-sizing: border-box;
`
 
export default BlankBox;