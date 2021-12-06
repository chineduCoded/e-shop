import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactLoading from "react-loading";
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import formatCurrency from 'format-currency'

const ProductDetail = () => {
    const opts = { format: '%s%v', symbol: '$' }

    const [product, setProduct] = useState([])
    const [done, setDone] = useState(undefined)

    const { id } = useParams()

    const fetchData = async (id) => {
        const url = 'https://fakestoreapi.com/products';
        const res = await axios.get(url);
        console.log(res.data)
        setProduct(res.data[id - 1])
        setDone(true);
    }

    useEffect(() => {
        fetchData(id) 
    }, [id])
    return (
        <Container>
            <Wrapper>
                { !done ? 
                    (
                        <ReactLoading
                        type={"bars"}
                        color={"#011834"}
                        height={100}
                        width={100}
                        />
                    ): (
                       <Holder>
                           <ImageHolder>
                    <Image src={product?.image} />
                </ImageHolder>
                <ContentHolder>
                    <Category>{product?.category}</Category>
                    <Title>{product?.title}</Title>
                    <Price>{formatCurrency(`${product?.price}`, opts)}</Price>
                    <ButtonHolder>
                        <Button btn><span><FaHeart /></span> 
                        Wishlist</Button>
                        <Button><span><FaShoppingCart /></span>
                        add to Cart</Button>
                    </ButtonHolder>
                    <DescHolder>
                        <Header>Product Detail</Header>
                        <Desc>{product?.description}</Desc>
                    </DescHolder>
                </ContentHolder>
                       </Holder>
                    )
                }
                
            </Wrapper>
        </Container>
    )
}

export default ProductDetail

const Holder = styled.div`
display: flex;
justify-content: center;
width: 100%;
flex-wrap: wrap;
`;

const Desc = styled.p`

`;

const Header = styled.div`
color: gray;
font-size: 19px;
`;

const DescHolder = styled.div`
display: flex;
flex-direction: column;
`;

const Button = styled.button`
margin: 10px;
border: 0;
outline: none;
padding: ${({btn}) => (btn ? "10px 25px":"15px 35px")};
background: ${({btn}) => (btn ? "gray":"#011834")};
color: #fff;
font-weight: bold;
border-radius: 3px;
transform: scale(1);
transition: all 350ms;
text-transform: uppercase; 

span {
    margin-right: 10px;
    font-size: 17px;
    text-align: justify;
}

:hover {
    cursor: pointer;
    transform: scale(0.96);
}
`;

const ButtonHolder = styled.div`
display: flex;
margin-bottom: 20px;
`;

const Price = styled.div`
margin-bottom: 20px;
font-size: 19px;
font-weight: bold;
`;

const Title = styled.div`
margin-bottom: 30px;
text-transform: capitalize;
font-size: 25px;
font-weight: bold;
`;

const Category = styled.div`
margin-bottom: 20px;
text-transform: uppercase;
color: #011834;
font-size: 17px;
font-weight: bold;
`;

const ContentHolder = styled.div`
width: 400px;
// height: 400px;
display: flex;
flex-direction: column;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`;

const ImageHolder = styled.div`
width: 400px;
height: 500px;
border-radius: 10px;
margin-right: 50px;
transition: all 350ms;
transform: scale(1);
:hover {
    transform: scale(1.05);
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    max-width: 320px;
}
`;

const Wrapper = styled.div`
padding-top: 100px;
padding-bottom: 30px;
width: 100%;
display: flex;
justify-content: center;


`;

const Container = styled.div`
width: 100%;
height: 100%;
font-family: 'Poppins', sans-serif;
`;
