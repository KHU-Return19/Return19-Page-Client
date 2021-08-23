import React from 'react'
import mainIcon from "../assets/icons/mainIcon.svg";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    heigth: 3rem;
    border-bottom: 1px solid darkgrey;
    font-size: 1.1rem;
    text-decoration: none;
    a:link { color: darkgrey; text-decoration: none;}
`;

const Header = () => {
    return (
        <StyledHeader>
            <Link to = "/">
                <img className="header-icon" alt="icon" src={mainIcon} width="150" height="150"/>
            </Link>
            <nav className="header-nav">         
                <Link to = "/Members">Members | </Link>
                <Link to = "/Ongoing">Ongoing | </Link>
                <Link to = "/Calender">Calender | </Link>       
                <Link to = "/Profile">Profile</Link> 
                {/* 후에 프로필 사진으로 교체 */} 
            </nav>
        </StyledHeader>
    )
}

export default Header;