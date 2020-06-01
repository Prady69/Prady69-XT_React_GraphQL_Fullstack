import styled from 'styled-components';

export const SearchWrapper = styled.div`
  position: relative;
`;
export const SearchTitle = styled.p`
    font-size: 1rem;
    color: rgb(51,51,51);
`;
export const SearchInputBox = styled.input`
    border: 1px solid #ccc;
    padding: 0.62rem;
    color: #000;
    box-shadow: none;
    width: calc(100% - 10rem);
    box-sizing: border-box;
`;
export const SearchButton = styled.button`
  padding: 0.63rem 1rem;
  background-color: #eeeeee;
  border: 1px solid #ccc;
  font-weight: 400;
  text-align: center;
  vertical-align: top;
  border-left: 0;
  cursor: pointer;
  width: 5rem;
`;
