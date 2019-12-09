import styled from 'styled-components';
 
import { keyFrameSearched } from './KeyFrames';
 
export const SearchedBox = styled.div`
  display: inline-block;
  background: #0d9;
  width: ${props=>props.w};
  height: 30px;
  position: relative;
  margin:0px;
  border:.1px solid #0001;
  box-sizing: border-box;

  // animation: ${keyFrameSearched} 2s ease-in-out 0s infinite;
  animation: ${keyFrameSearched} 1s ease-in-out 0s 1;
`
 
export default SearchedBox;