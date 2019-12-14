import styled from 'styled-components';
 
import { keyFrameSearched } from './KeyFrames';
 
export const VisitedBox = styled.div`
  display: inline-block;
  background: #9df9ef;//#0ff;
  width: ${props=>props.w};
  height: ${props=>props.h};
  position: relative;
  margin:0px;
  border:.1px solid #0001;
  box-sizing: border-box;

  // animation: ${keyFrameSearched} 2s ease-in-out 0s infinite;
  animation: ${keyFrameSearched} 1s linear 0s 1;
`
 
export default VisitedBox;