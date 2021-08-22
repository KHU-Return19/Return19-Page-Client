import React from 'react';
import styled from 'styled-components';
import Welcome from '../components/Welcome';
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Wrapper = styled.div`
    display: inline;
`;

const Home = () => {
    const [isUser, setIsUser] = useState(true);
    return isUser ? 
        <Wrapper>
            <Header/>
            <Welcome/>
        </Wrapper>
    : <Redirect to="/LandingPage"/> ;
};

export default Home;