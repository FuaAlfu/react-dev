import './App.css';
import {motion} from 'motion';
import styled, {createGlobalStyle} from 'styled-components';
import Slider from './components/Slider';

function App() {
  return (
    <GlobalStyle>
    <div className="App">
      <motion.h1 animate={{x: 300}}>yo</motion.h1>
      <Slider />
    </div>
    </GlobalStyle>
  );
}

const GlobalStyle = createGlobalStyle`
   * {
    border-box: box-sizing; 
   }
`;

export default App;
