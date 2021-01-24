import './App.css';

function App() {
  //create dynamic values
  const title = "hi everyone"
  const comment = "yeah ..!"

  //can't output objects or booleans
  const test = {name: 'b', age: 50 };
  return (
    <div className="App">
    <div className="content">
      <h1>{title}</h1>
      <p>Top comments: {comment}</p>
      {/* <p>{test}</p> */}
    </div>
    </div>
  );
}

export default App;
