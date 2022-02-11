import './App.css';
import {motion} from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
// import Slider from './components/Slider';
import images from './images';

function App() {
  const [width,setWidth] = useState(0);
  const carousel = useRef();  // grab the element,and gather some info

  useEffect(() => {
    console.log(carousel.current.scrollwidth,carousel.current.offsetWidth);
    setWidth(carousel.current.scrollwidth - carousel.current.offsetWidth);
  },[]);
  return (
    <GlobalStyle>
    <div className="App">
      <motion.h1 animate={{x: 300}}>yo</motion.h1>
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div
         drag="x"
         dragConstraints={{right: 0, left: -width}}
         className="inner-carousel"
         >
             {images.map(image => {
                  return(
                      <motion.div className="item" key={images}>
                            <Image src={image} alt=""/>
                      </motion.div>
                  );
             })}
        </motion.div>
      </motion.div>
      {/* <Slider /> */}
    </div>
    </GlobalStyle>
  );
}

const GlobalStyle = createGlobalStyle`
   * {
    border-box: box-sizing; 
   }
`;

const Image = styled.img`
width: 100%;
height: 100%;
`;

export default App;
