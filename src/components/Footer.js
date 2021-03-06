import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #fafafa;
    padding: 50px 0px;
    display: grid;
    grid-gap: 20px;
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #3F3F3F;
    max-width: 500px;
    margin: 0 auto;
`

const Button = styled.button`
background: #6BA8BF;
box-shadow: 0px 10px 26px rgba(0, 0, 0, 0.1);
border-radius: 10px;
color: white;
border: none;
padding: 16px 60px;
font-weight: 600;
font-size: 24px;
justify-self: center;
transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

&:hover {
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    transform: translateY(-3px);
}
`

const LinkGroup = styled.div`
    width: auto;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35    px;  

    a{
        transition: 0.8s;
    }  

    a:hover {
        color: #3F3F3F;
    }
`

const Copyright = styled.div`
    color: #3F3F3F;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`

const Footer = ({data, children}) => (
    <FooterGroup> 
        <Text>Vestibulum id ligula porta felis euismod semper.</Text>
        <Button>Get Started</Button>
        <LinkGroup>
        {data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
        ))}</LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer