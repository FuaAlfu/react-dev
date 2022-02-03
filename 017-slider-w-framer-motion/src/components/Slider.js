import {motion} from 'motion';
import styled from 'styled-components';
import images from '../images';
import {useRef, useState, useEffect} from 'react';

export default function Slider(){
    console.log(images);
    return(
        <>
            <motion.div className="carousel">
                   <motion.Inner className="inner-carousel">
                        
                   </motion.Inner>
            </motion.div>
        </>
        )
}

const Inner = styled.div`
  background-color: white;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: wheat;
  }
`;