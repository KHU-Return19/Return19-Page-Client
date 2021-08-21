import React from 'react';
import styled from 'styled-components';
import Welcome from '../components/Welcome';

const Wrapper = styled.div``;

const Home = () => {
    return (
        <Wrapper>
            <Welcome/>
        </Wrapper>
    );
};

export default Home;