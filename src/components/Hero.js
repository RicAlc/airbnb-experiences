import collage from "../assets/collage.png";
function Hero() {
  return (
    <section className="hero">
      <img className="hero__collage" src={collage} alt="Collage de fotos" />
      <h1 className="online-exp__title">Online Experiences</h1>
      <p className="online-exp__text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
export default Hero;
