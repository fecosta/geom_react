import { link } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>GEOM</h1>
            <div className="links">
                <Link to="/">intro</Link>
                <Link to="/create">create</Link>
                <Link to="/maps">map</Link>
                <Link to="/table">table</Link>
                <Link to="/chart">chart</Link>
            </div>
        </nav>
    );
}
 
export default Navbar
