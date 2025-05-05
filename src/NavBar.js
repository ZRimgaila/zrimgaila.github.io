import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 text-center">
                    <a className="blog-header-logo text-body-emphasis text-decoration-none" href="#">Žygimantas Rimgaila</a>
                </div>
            </div>
            <nav className="nav d-flex justify-content-center py-1">
                <Link className="p-2 link-secondary" to="/">About</Link>
                <Link className="p-2 link-secondary" to="/projects">Projects</Link>
                <Link className="p-2 link-secondary" to="/skills">Skills</Link>
                <Link className="p-2 link-secondary" to="/contacts">Contacts</Link>
            </nav>
        </header>
    );
}
 
export default Navbar;