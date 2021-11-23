import React from 'react';
import styled from 'styled-components';
import Welcome from '../components/Welcome';
import Header from '../components/Header';

const Wrapper = styled.div`
    display: inline;
`;

const Home = () => {
    return (
        <Wrapper>
            <Header/>
            <Welcome/>
        </Wrapper>
   )
};

export default Home;