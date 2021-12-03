import {useState} from 'react';
import C from './components/C';
import M from './components/M';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
        <button onClick={updateCount} type="button">click</button>
        <C />
        <M />
    </div>
  );
}

export default App;
