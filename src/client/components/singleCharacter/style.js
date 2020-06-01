import styled from 'styled-components';

export const WrapperContainer = styled.div`
    border-radius: 0.625rem;
    margin-bottom: 0.625rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    overflow: hidden;
    height: 100%;
`;
export const CardHeader = styled.div`
    max-height: 13rem;
    position: relative;
`;
export const CardHeaderdetails = styled.div`
    background-color: rgba(32,35,41,0.8);
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.3rem 0.5rem;
    box-sizing: border-box;
`;
export const Avatar = styled.div`
    width: 100%;
    height: 13rem;
    background-size: cover;
`;
export const H3 = styled.h3`
    color: rgb(245,245,245);
    font-size: 1.2rem;
    display: block;
    font-weight: 400;
    margin: 0;
    padding:0;
`;
export const Span = styled.span`
    font-size: 0.7rem;
    color: rgb(245,245,245);
    padding: 0;
    margin: 0;
`;
export const CardContent = styled.div`
    background-color: rgba(51,51,51,1);
    color: rgb(255, 152, 0);
    padding: 1.2rem;
    height: 100%;
`;
export const CardContentUL = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;
export const CardContentLI = styled.li`
    padding: 0.75rem 0px 0.375rem;
    border-bottom: 1px solid rgb(68, 68, 68);
    margin: 0;
`;
export const CardContentSpanLeft = styled.span`
    text-transform: uppercase;
    color: rgb(158,158,158);
    text-align: left;
    width: 30%;
    display: inline-block;
    font-size: 0.7rem;
    padding-right: 0.8rem;
    box-sizing: border-box;
    font-weight: 400;
    vertical-align: middle;
`;
export const CardContentSpanRight = styled.span`
    color: rgb(255, 152, 0);
    text-align: right;
    width: 70%;
    display: inline-block;
    font-size: 0.9rem;
    padding-left: 0.8rem;
    box-sizing: border-box;
    font-weight: 400;
    vertical-align: middle;
`;