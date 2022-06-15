import ExpCard from "./components/ExpCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data.js";

function App() {
  const cards = data.map((card) => {
    return (
      <ExpCard
        key={card.id}
        img={card.img}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        title={card.title}
        price={card.price}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}
export default App;
