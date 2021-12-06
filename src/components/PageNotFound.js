import React from 'react'
import styled from 'styled-components'
import img from './assets/404.png'
import { useNavigate } from 'react-router-dom'

export const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        
        <Container>
            <Wrapper>
                <Content>
                    <ImageHolder>
                        <Image src={img}/>
                    </ImageHolder>
                   <Header>
                       page not found! Go back to <span onClick={() => {
                           navigate("/")
                       }}>Home Page</span>
                   </Header>
                </Content>
            </Wrapper>
        </Container>
    )
}

const Header = styled.div`
text-transform: capitalize;
display: flex;
justify-content: center;

span {
    margin-left: 5px;
    color: #011834;
    font-weight: bold;
    cursor: pointer;
}
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const ImageHolder = styled.div`
width: 600px;
height: 400px;
`;

const Content = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
paddind-top: 70px;
`;

const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
`;

const Container = styled.div`
width: 100%;
height: 100%;
font-family: 'Poppins', sans-serif;
`;


