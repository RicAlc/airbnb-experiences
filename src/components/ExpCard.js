import starIcon from "../assets/star-icon.svg";

function ExpCard(props) {
  return (
    <div className="exp-card">
      <div className="exp-card__state">SOLD OUT</div>
      <img
        className="exp-card__guide-photo"
        src={`./img/${props.img}`}
        alt="Foto del instructor"
      />
      <div className="rating">
        <img className="rating__icon" src={starIcon} alt="Icono" />
        <p>
          <span>{props.rating}</span> ({props.reviewCount}) - USA
        </p>
      </div>
      {props.title}
      <div className="price">
        <span>From ${props.price}</span> / person
      </div>
    </div>
  );
}
export default ExpCard;
