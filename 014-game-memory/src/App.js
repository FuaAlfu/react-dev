import {useState, useEffect} from 'react';
import './App.css';
import Card from './components/Card';

const cardImages = [
  {"src": "img/helmet-1.png",matched: false},
  {"src": "img/potion-1.png",matched: false},
  {"src": "img/ring-1.png",matched: false},
  {"src": "img/scroll-1.png",matched: false},
  {"src": "img/shield-1.png",matched: false},
  {"src": "img/sword-1.png",matched: false}
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

  //compare 2 selected cards
  useEffect(() => {
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        console.log("those cards match")
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
              return {...card, matched: true}
            }else{
              return card
            }
          })
        })
        resetTurn()
      }else{
        console.log("those cards not match")
       setTimeout(() => resetTurn(), 1000) //1ms
      }
    }
  },[choiceOne,choiceTwo])

  console.log(cards);

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
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
         flipped={card === choiceOne || card === choiceTwo || card.matched}
         />
       ))}
     </div>
    </div>
  );
}

export default App;
