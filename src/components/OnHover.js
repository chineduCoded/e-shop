import React, { useState } from 'react'
import styled from 'styled-components'

export const OnHover = () => {
    const [style, setStyle]= useState({
        display: 'none'
    });
    return (
        <Container>
            <Wrapper>
                <ContentHolder>
                    <Title>Move mouse to Hover</Title>
                    <Card style={{border: '1px solid gray', width: 300, height: 300, padding: 10, margin: 100}}
                    onMouseEnter={(e) => {
                        setStyle({display: 'block'})
                    }}
                    onMouseLeave={(e) => {
                        setStyle({display: 'none'})
                    }}
                    >
                        <Button style={style}>click</Button>
                        <div>Hold on the Lord </div>
                    </Card>
                </ContentHolder>
            </Wrapper>
        </Container>
    )
}

const Button = styled.button`
border: 0px;
outline: none;
padding: 10px 22px;
background: #011834;
color: #fff;
border-radius: 10px;
// position: absolute;
// right: 0px;
// bottom: 30px;
`;

const Card = styled.div`
// display: flex;
// align-items: center;
// flex-direction: column;
// width: 300px;
// height: 300px;
// padding: 10px;
// border: 1px solid gray;
// border-radius: 5px;
`;

const Title = styled.h2`
text-align: center;
`;

const ContentHolder = styled.div`
display: flex;
justify-content: center;
flex-direction: column;

`;

const Wrapper = styled.div`
width: 100%;
padding-top: 100px;
display: flex;
justify-content: center;
`;

const Container = styled.div`
width: 100%;
height: 100%;
`;