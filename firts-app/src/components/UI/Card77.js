import "./Card8.css";

const Card = (props) => {
    // wichtiges punkt ist, dass ein space hinzufugen muss ;)
  let classes = props.className + " card";
  return <div className={classes}>{props.children}</div>;
};

export default Card;
