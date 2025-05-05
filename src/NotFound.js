import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>This page cannot be found</p>
            <Link to='/'>Back to home page</Link>
        </div>
    );
}
 
export default NotFound;