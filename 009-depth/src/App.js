import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <div className="content">
     <h1>app components</h1>
     <Home />
    </div>
    </>
  );
}

export default App;
