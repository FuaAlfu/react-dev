import React from 'react'
import styled from 'styled-components';

const Header = (props) => {
        return (
            <div>
                <Topic>
                    <header>
                    <h1>yo</h1>
                    <h2>{props.header}</h2>
                    <p>{props.content}</p>
                    </header>
                </Topic>
            </div>
        )
}

const Topic = styled.div`
h1{
font-size: 2rem;
text-align: center;
color: red;
}
h2{
font-size: 1rem;
text-align: center;
color: blue; 
}
p{
font-size: 1.8rem;
text-align: center;
color: yellow;  
}
`;

export default Header