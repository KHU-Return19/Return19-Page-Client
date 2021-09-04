import React from 'react';
import styled from 'styled-components';

const Schedule = ({date, content, id}) => {

    return (
        <>
        <StyledScheduleContainer>
            <ScheduleText>{date}</ScheduleText>
            <ScheduleText>{content}</ScheduleText>
        </StyledScheduleContainer>
        </>
    )
}

export default Schedule;

const StyledScheduleContainer = styled.div `
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    border-radius: 25px;
    -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.2);
    }
    .deleteIcon {
        width: 1rem;
        cursor: pointer;

    }
    .deleteIcon:hover {
        width: 1.2rem;
    }
    :hover {
        opacity: 0.6;
        transition: .2s;
    }
`;

const ScheduleText = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
    font-family: "Noto Sans KR", sans-serif;
    color: #282828;
    text-decoration: none;
`;

