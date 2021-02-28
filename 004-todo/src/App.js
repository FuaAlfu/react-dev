
// import Testo from './components/Testo';
// import New from './components/New';
// import One from './components/One';
// import Index from './components/Index';
import React from 'react';
import Border from './components/Border';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <h1>yo</h1>
      <Border />
      {/* <Testo />
       <New />
       <One />*/}
    </Router>
  );
}

export default App;
