import React from 'react'
import styled from 'styled-components'

const Collection = () => {
    return (
        <Container>
            <Wrapper>
                <h1>Collection content goes here</h1>
            </Wrapper>
        </Container>
    )
}

export default Collection

const Wrapper = styled.div``;

const Container = styled.div`
width: 100%;
height: 100%;
background: teal;
coloor: #fff;
`;
