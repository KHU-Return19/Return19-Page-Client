import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
    font-family: "Noto Sans KR", sans-serif;
    border: none;
    border-radius: 25px;
    width: 200px;
    height: 40px;
    font-size: 1.3rem;
    color: white;
    font-weight: 600;
    background: #91A8D1;
    background: linear-gradient(
        90deg,
        #91A8D1 0%,
        #F6CAC9 100%
    );
`;


const Button = (props) => {
    return (
        <StyledButton color={props.color} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}
export default Button;
