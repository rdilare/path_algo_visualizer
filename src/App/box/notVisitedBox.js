import styled from 'styled-components';
 
 
export const NotVisitedBox = styled.div`
  display: grid;
  background: #fff;
  width: ${props=>props.w};
  height: ${props=>props.h};
  position: relative;
  margin:0px;
  padding:0px;
  border:.1px solid #ffa8b6;//#0ff5;
  box-sizing: border-box;
`
 
export default NotVisitedBox;