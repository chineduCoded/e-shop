import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactLoading from "react-loading";


const PreLoader = () => {

    const [data, setData] = useState([])
    const [done, setDone] = useState(undefined)

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
                setDone(true);
              }, 2000);
        })
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
            <ul>
            {data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
            </ul>
        )}
            </Wrapper>
        </Container>
    )
}

export default PreLoader

const Wrapper = styled.div``;

const Container = styled.div``;
