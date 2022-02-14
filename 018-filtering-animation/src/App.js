import './App.css';
import {useEffect, useState} from 'react';

function App() {
  //store data
  const[popular,setPopular] = useState([]);
  useEffect(() => {
    fetchPuoular();
  },[])
  const fetchPuoular = () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US');
    const movies = await data.json();
    console.log(movies); //for testing..
    setPopular(movies.results);
  }
  return (
    <div className="App">
        <h1>yo</h1>
    </div>
  );
}

export default App;
