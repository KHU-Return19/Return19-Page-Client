import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import mainLogo from "../assets/icons/mainLogo.svg";

const Welcome = () => {
    return (
        <Wrapper>
            <StyledWelcomeOverlay>
                <Link to = "/">
                    <img className="header-icon" alt="icon" src={mainLogo} width="250" height="250"/>
                </Link>
                <h1 className="welcomeText">As long as you live and breathe.</h1>
                <h1 className="welcomeText">Move forward in the name of Kyung-hee.</h1> 
                <span className="welcomeText-sub">Welcome to Return19, where the most brilliant people in the world gather.</span>
                <Link to="/signup">
                    <Button color="black">SIGN UP</Button>
                </Link>
            </StyledWelcomeOverlay>
        </Wrapper>
        
    )}

export default Welcome;

const Wrapper = styled.div`
 
`;

const StyledWelcomeOverlay = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    text-align: center;
    color: #282828;
    
    .welcomeText {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 36px;
        padding-bottom: 20px;
    }
    .welcomeText-sub {
        font-family: sans-serif;
        font-size: 15px;
        padding-bottom: 30px;
    }
`;