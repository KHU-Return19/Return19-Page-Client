import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Welcome from '../components/Welcome';
import Button from '../components/Button';

const Wrapper = styled.div``;

const LandingPage = () => {
    return (
        <Wrapper>
            <Welcome />
            <Link to="/signup">
                <Button color="lightgrey">SIGN UP</Button>
            </Link>
        </Wrapper>
    )
}

export default LandingPage;