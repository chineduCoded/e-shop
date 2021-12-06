import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
               <LogoHolder to="/">
                   Elina's <span>Shop</span>
               </LogoHolder>
               <SearchHolder>
                   <Input type="text" placeholder="Search..." />
                   <Search></Search>
               </SearchHolder>
               <Navigation>
                   <Nav to="/">Store</Nav>
                   <Nav to="sign-up">Sign Up</Nav>
                   <Nav to="cart">
                       <span><FaShoppingCart /><Count>4</Count></span>
                   </Nav>
               </Navigation>
            </Wrapper>
        </Container>
    )
}

const Search = styled(FaSearch)`
color: #ccc;
font-size: 20px;
`;

const Input = styled.input`
flex: 1;
height: 33px;
border: 0px;
outline: none;
`;

const SearchHolder = styled.div`
width: 300px;
height: 40px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
border-radius: 30px;
background: #fff;
`;

const Count = styled.div`
width: 15px;
height: 15px;
border-radius: 50%;
background: #fff;
color: red;
display: flex;
align-items: center;
justify-content: center;
font-size: 10px;
vertical-align: super;
`;

const Nav = styled(Link)`
margin: 0 10px;
font-size: 20px;
text-decoration: none;
color: #fff;

span {
    display: flex;
    align-items: center;
    justify-content: center;
}

:hover {
    color: red;
    cursor: pointer;
}
`;

const Navigation = styled.div`
display: flex;
align-items: center;
`;

const LogoHolder = styled(Link)`
font-size: 35px;
text-decoration: none;
color: #fff;

span {
    color: red;
}
`;

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;

const Container = styled.div`
width: 100%;
height: 80px;
background: #011834;
color: #fff;
`;
