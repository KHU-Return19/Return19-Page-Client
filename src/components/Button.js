import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    return (
        <StyledButton width={props.width} fontSize={props.fontSize}  onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}
export default Button;

const StyledButton = styled.button`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
    font-family: "Noto Sans KR", sans-serif;
    border: none;
    border-radius: 25px;
    width: ${props => props.width || '200px'};
    height: 40px;
    font-size: ${props => props.fontSize || '1.3rem'};
    color: white;
    font-weight: 600;
    background: #91A8D1;
    background: linear-gradient(
        90deg,
        #91A8D1 0%,
        #F6CAC9 100%
    );
    :hover {
        opacity: 0.8;
        transition : .3s;
        }
`;