import styled from 'styled-components';
 
import { keyFrameWall } from './KeyFrames';
 
export const Wall = styled.div`
  display: inline-block;
  background: #333;
  width: ${props=>props.w};
  height: ${props=>props.h};
  position: relative;
  margin:0px;
  border:.1px solid #0540;
  box-sizing: border-box;
  z-index:2;

  // animation: ${keyFrameWall} 2s ease-in-out 0s infinite;
  animation: ${keyFrameWall} .3s ease-in-out 0s 1;
`
 
export default Wall;