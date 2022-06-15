import starIcon from "../assets/star-icon.svg";

function ExpCard(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="exp-card">
      {badgeText && <div className="exp-card__state">{badgeText}</div>}
      <img
        className="exp-card__guide-photo"
        src={`./img/${props.img}`}
        alt="Foto del instructor"
      />
      <div className="rating">
        <img className="rating__icon" src={starIcon} alt="Icono" />
        <p>
          <span>{props.stats.rating}</span> ({props.stats.reviewCount}) -{" "}
          {props.location}
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
