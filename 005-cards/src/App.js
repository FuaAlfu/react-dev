import Card from './components/Card';
import profiles from "./profiles";

function App() {
  return (
    <div >
    <h1 className="main">-- Profiles --</h1>
      <Card
        name={profiles[0].name}
        img={profiles[0].imgURL}
        tel={profiles[0].phone}
        email={profiles[0].email}
      />
      <Card
        name={profiles[1].name}
        img={profiles[1].imgURL}
        tel={profiles[1].phone}
        email={profiles[1].email}
      />
      <Card
        name={profiles[2].name}
        img={profiles[2].imgURL}
        tel={profiles[2].phone}
        email={profiles[2].email}
      />
      {/*or call all cards by ranging on the array*/}
      <h1 className="main">-- all --</h1> 
           {profiles.map((profileItem) => 
  <Card key={profileItem.key} name={profileItem.name} img={profileItem.imgURL} tel={profileItem.phone} email={profileItem.email}/>)}
    </div>
  );
}

export default App;
