import React from 'react'
import mainLogo from "../assets/icons/mainLogo.svg";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeader = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3rem;
    font-size: 1.1rem;
    font-family: "Noto Sans KR", sans-serif;
    text-decoration: none;
    a:link { color: darkgrey; text-decoration: none;}
    .header-icon-unvisible{
        display: none;
    }

`;

const Header = () => {
    const path = window.location.pathname;
    const pageName = path.slice(-2, path.length);
    return (
        <StyledHeader>
            <Link to = "/">
                <img className={"header-icon" + (pageName === "/" ? '-unvisible' : '')}alt="icon" src={mainLogo} width="150" height="150"/>
            </Link>
            <nav className="header-nav">         
                <Link to = "/members">Members | </Link>
                <Link to = "/ongoing">Ongoing | </Link>
                <Link to = "/calender">Calender | </Link>       
                <Link to = "/profile">Profile</Link> 
                {/* 후에 프로필 사진으로 교체 */} 
            </nav>
        </StyledHeader>
    )
}

export default Header;