import React from 'react'
import mainLogo from "../assets/icons/mainLogo.svg";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeader = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;
    width: 100%;
    font-size: 1.1rem;
    font-family: "Noto Sans KR", sans-serif;
    text-decoration: none;
    a:link, a:visited { color: darkgrey; text-decoration: none; padding: 1rem;}
    .header-icon-unvisible{
        display: none;
    }

    a:hover, a:active {
        
    }

    .nav {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        a:link { color: darkgrey; text-decoration: none;}
        }
    .seperator {
        color: darkgrey;
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
                <Link to = "/members">Members</Link>
                <span className="seperator">|</span>
                <Link to = "/ongoing">Ongoing</Link>
                <span className="seperator">|</span>
                <Link to = "/calender">Calender</Link>       
                <span className="seperator">|</span>
                <Link to = "/profile">Profile</Link> 
                {/* 후에 프로필 사진으로 교체 */} 
            </nav>
        </StyledHeader>
    )
}

export default Header;