import {useState} from 'react';
import './App.css';
import Card from './components/Card';

const cardImages = [
  {"src": "img/helmet-1.png"},
  {"src": "img/potion-1.png"},
  {"src": "img/ring-1.png"},
  {"src": "img/scroll-1.png"},
  {"src": "img/shield-1.png"},
  {"src": "img/sword-1.png"}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  //shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages] //used spread operator again to shuffled them again..
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setCards(shuffleCards)
    setTurns(0)
  }

  //console.log(cards,turns); //for test inside console

  //handle a choice
  const handleChoice = (card) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  return (
    <div className="App">
     <h1>Magic Match</h1>
     <button onClick={shuffleCards}>Start New Game</button>

     {/* our game grid */}
     <div className="card-grid">
       {cards.map(card => (
         <Card
         key={card.id} 
         card={card} 
         handleChoice={handleChoice}
         />
       ))}
     </div>
    </div>
  );
}

export default App;
