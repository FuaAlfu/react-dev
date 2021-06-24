import './App.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function App() {
  return (
    
    <div className="App">
      <div className="container">
      <Tippy content="click me boy">
        <button>CLICK</button>
        </Tippy>
      </div>
    </div>
  );
}

export default App;
