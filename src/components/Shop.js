import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactLoading from "react-loading";
import axios from 'axios'
import { Link } from 'react-router-dom';
import formatCurrency from 'format-currency'
import { Rate } from './Rate';

const Shop = () => {
    const opts = { format: '%s%v', symbol: '$' }

    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [done, setDone] = useState(undefined)

    const fetchData = async () => {
        const url = 'https://fakestoreapi.com/products';
        const res = await axios
            .get(url)
            .catch((err) => {
                console.log("Errors", err)
                setError(err)
            })

        if(res && res.data) {
            console.log(res.data)
            setProducts(res.data)
            setDone(true);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
            
    return (
        <Container>
            <Wrapper>
                {!done ? (
            <ReactLoading
            type={"bars"}
            color={"#011834"}
            height={100}
            width={100}
            />
        ) : (
            products?.map((product) => (
                <Card key={product?.id} to={`products/${product?.id}`}>
                    <Image src={product?.image} />
                    <Content>
                        <ContentHolder>
                            <Title>{product?.title}</Title>
                            <Rating>
                                <Rate value={product?.rating.rate} text={`${product?.rating.count} reviews`} />
                            </Rating>
                        </ContentHolder>
                        <Price>{formatCurrency(`${product?.price}`, opts)}</Price>
                    </Content>
                </Card>
            ))
        )         
            }
            </Wrapper>
        </Container>
    )
}

export default Shop

const ContentHolder = styled.div`

`;

const Content = styled.div`
width: 100%;
padding: 10px;
background: #fff;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Image =styled.img`
width: 100%;
height: 60%;
object-fit: contain;
border-radius: 10px;
margin-bottom: 10px;
padding-top: 10px;
`;

const Rating = styled.div`
`;

const Title = styled.div`
color: #011834;
text-transform: capitalize;
font-weight: bold;
margin-bottom: 10px;
`;

const Price = styled.div`
margin-right: 10px;
color: #011834;
font-weight: 800;
`;


const Card = styled(Link)`
text-decoration: none;
width: 350px;
height: 420px;
color: #011834;
margin: 15px;
display: flex;
flex-direction: column;
border-radius: 10px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
transition: all 350ms;
transform: scale(1);
:hover {
    transform: scale(1.05);
}
`;

const Wrapper = styled.div`
padding-top: 100px;
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

const Container = styled.div`
width: 100%;
height: 100%;
`;



