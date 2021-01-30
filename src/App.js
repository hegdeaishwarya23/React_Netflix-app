import './App.css';
import Card from "./Components/Card"
import Data from "./Components/Data"

function App() {
  function card(val) {
    console.log(val)
    return <Card img={val.img}
      sname={val.sname}
      genre={val.genre}
      link={val.link} />

  }
  return (
    <div>
      <h1 className="heading">top 6 amazing Korean series in netflix</h1>
      <div className="cards">
      { Data.map(card)}
      </div>
    </div>
  );
}

export default App;
