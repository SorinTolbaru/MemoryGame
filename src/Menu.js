import { Link } from "react-router-dom";
import "./index.css";


const Menu = () => {
    return ( 
        <div className="mainmenu">
           <Link to="Game"><div className="play">Play</div></Link> 
        </div>
     );
}
 
export default Menu;