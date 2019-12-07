import styled from 'styled-components';
 
import { keyFrameWall } from './KeyFrames';
 
export const Wall = styled.div`
  display: inline-block;
  background: #333;
  width: ${props=>props.w};
  height: 30px;
  position: relative;
  margin:0px;
  border:.1px solid #0540;
  z-index:2;

  // animation: ${keyFrameWall} 2s ease-in-out 0s infinite;
  animation: ${keyFrameWall} .3s ease-out 0s 1;
`
 
export default Wall;