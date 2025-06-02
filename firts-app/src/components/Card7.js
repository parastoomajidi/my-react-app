
import './Card8.css'
const Card = props => {
    let classes = props.className = + 'card';
    return
    <div className ={classes}> 
        {props.children()}

    </div>;
}
export default Card;