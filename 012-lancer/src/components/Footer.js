import React from 'react';
import styled from 'styled-components';

export const Footer = () =>{
    const date = new Date().getFullYear()
    return(
        <DateC>
        <span>logo - © {date}</span>
        </DateC>
        )
}

const DateC = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 4rem;
margin-top: 100px;
text-align: center;
background-color: #ddd;
color: #777;
`;