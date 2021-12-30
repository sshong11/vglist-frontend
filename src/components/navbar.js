import {Link} from "react-router-dom"

function Navbar(props) {
    return (
        <nav>
            <Link to="/"><h1>VGList</h1></Link>
            <div>Home</div>
            <div>Login</div>
            <div>Signup</div>
        </nav>
    )
}

export default Navbar