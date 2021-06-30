import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styling/navbar.css'


const Navbar = () => {
    return (
        <>
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
                <div className="container">
                   <h1> Destined to Nations</h1>
                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                            </li>

                            <li className="nav-item active">
                            <Link to="/cheatsheet" className="nav-link">Cheatsheet</Link>
                            </li>

                            <li className="nav-item active">
                            <Link to="/Link2" className="nav-link">Link</Link>
                            </li>

                            <li className="nav-item active">
                            <Link to="/sandbox" className="nav-link">Sandbox</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar;
