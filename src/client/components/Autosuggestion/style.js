import styled from 'styled-components';

export const AutosuggestionUL = styled.ul`
    position: absolute;
    top: 100%;
    margin: 0;
    padding: 0.5rem;
    list-style: none;
    background: #fff;
    z-index: 2;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    max-height: 15rem;
    overflow: auto;
`;
export const AutosuggestionLI = styled.li`
    border-bottom: 1px solid #ccc;
    padding: 0.3rem 0;
    font-size: 1rem;
    cursor: pointer;
`;