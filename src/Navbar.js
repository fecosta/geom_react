import { link } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>GEOM</h1>
            <div className="links">
                <Link to="/geom_react">intro</Link>
                <Link to="/geom_react/maps">map</Link>
                <Link to="/geom_react/table">table</Link>
                <Link to="/geom_react/chart">chart</Link>
            </div>
        </nav>
    );
}
 
export default Navbar
