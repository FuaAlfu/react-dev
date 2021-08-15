import React, {useState,useEffect} from 'react';
import Axios from 'axios';

function App() {
  const url ='https://api.unsplash.com/photos/random?clinet_id=aLR_B9-CUTBHqAb-JyDnflPt_vFuXQP7LbCxq_X9ncY&count=30';
  const [images,setImages] = useState([]);
  const getImages = () =>{
    Axios.get(url).then((res) =>{
     // console.log(res);
     setImages(res.data);
    });
  }

  useEffect(() => {
    getImages();
  },[]);

  if(!images){
    return <h1>LOADING ...</h1>
  }
  return (
    <div className="App">
      {images.map((image) =>{
       return <h1>test</h1>
      })}
    </div>
  );
}

export default App;
