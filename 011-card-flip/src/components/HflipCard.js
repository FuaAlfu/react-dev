import React,{useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


const HflipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () =>{
        setIsFlipped(!isFlipped);
    }
  return (
    <div className="App">
      <div className="sub-container">
          <div className="card">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card-front">
          <p>This is the front of the card.</p>
          <Tippy content="click me boy">
          <button onClick={handleClick}>Click to flip</button>
          </Tippy>
        </div>

        <div className="card-back">
          <p>This is the back of the card.</p>
          <Tippy content="click me boy">
          <button onClick={handleClick}>Click to flip</button>
          </Tippy>
        </div>
      </ReactCardFlip>
      </div>
      {/* END OF CARD */}
      </div>
    </div>
  );
}

export default HflipCard;