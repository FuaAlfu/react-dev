import Header from './components/Header';
import details from './details';

function App() {
  return (
    <>
    {details.map((detailItem) => 
      <Header  key={detailItem.key} header={detailItem.header} content={detailItem.content}/>)}
    </>
  );
}

export default App;
