import {Link} from "react-router-dom"
import {useAppState} from "../AppState"

function Navbar(props) {

    const {state, dispatch} = useAppState()

    return (
        <nav>
            <Link to="/"><h1>VGList</h1></Link>
            <Link to="/">Home</Link>
            {state.token ? <Link to={`/profile/${state.username}`}>{state.username}</Link> : null}
            {!state.token ? (<><Link to="/auth/signup">Sign Up</Link>
            <Link to="/auth/login">Login</Link></>) : null}
            {state.token ? <button onClick={() => {dispatch({type: "logout"}); props.history.push("/")}}>Logout</button> : null}
        </nav>
    )
}

export default Navbar