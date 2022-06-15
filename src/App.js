import ExpCard from "./components/ExpCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data.js";

function App() {
  const cards = data.map((card) => {
    return <ExpCard key={card.id} {...card} />;
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}
export default App;
