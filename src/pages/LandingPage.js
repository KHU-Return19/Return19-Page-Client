import React from 'react'
import styled from 'styled-components';
import Welcome from '../components/Welcome';

const LandingPage = () => {
    return (
        <Wrapper>
            <Welcome />
        </Wrapper>
    )
}

export default LandingPage;

const Wrapper = styled.div``;