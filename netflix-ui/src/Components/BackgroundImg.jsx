import React from 'react'
import bgImg from '../assets/login.jpg'
import styled from 'styled-components'
export default function BackgroundImg() {
    return (
        <Container>
            <img src={bgImg} alt='background Img'></img>
        </Container>
    )
}

const Container = styled.div`
    height:100vh;
    width:100vw;
    img{
        height:100vh;
        width:100vw;
    }
`;