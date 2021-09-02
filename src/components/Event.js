import React from 'react'
import styled from 'styled-components';

const Event = ({date, content}) => {
    return (
        <>
        <StyledEventContainer>
            <EventText>{date}</EventText>
            <EventText>{content}</EventText>
        </StyledEventContainer>
        </>
    )
}

export default Event;

const StyledEventContainer = styled.div `
    display: flex;
    justify-content: space-around;
`;

const EventText = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
    font-family: "Noto Sans KR", sans-serif;
`;

