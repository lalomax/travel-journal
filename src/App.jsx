import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import Header from "./components/Header";

function App() {

  const cards = data.map(item => {
    return(
      <Card 
      item={item}
      />
    )
  })

  return (
    <div className="App w-11/12 md:w-3/4 mx-auto text-white">
      <Navbar />
      <Header />
      <section className="divide-y ">
        {cards}
      </section>
    </div>
  );
}

export default App;
