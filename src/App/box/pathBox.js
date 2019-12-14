import styled from 'styled-components';
 
import { keyFramePath } from './KeyFrames';
 
export const PathBox = styled.div`
  display: inline-block;
  background: #4a2;
  width: ${props=>props.w};
  height: ${props=>props.h};
  position: relative;
  margin:0px;
  border:.1px solid #0001;
  box-sizing: border-box;

  // animation: ${keyFramePath} 2s ease-in-out 0s infinite;
  animation: ${keyFramePath} .5s ease-in-out 0s 1;
`
 
export default PathBox;