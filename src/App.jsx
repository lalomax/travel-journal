import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data"

function App() {

  const cards = data.map(item => {
    return(
      <Card 
      item={item}
      />
    )
  })

  return (
    <div className="App w-3/4 mx-auto text-white">
      <Navbar />
      <section className="divide-y ">
        {cards}
      </section>
    </div>
  );
}

export default App;
