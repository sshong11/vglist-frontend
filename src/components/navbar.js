import {Link} from "react-router-dom"
import {useAppState} from "../AppState"
import { slide as Menu } from 'react-burger-menu'

function Navbar(props) {

    const {state, dispatch} = useAppState()

    return (
        <nav>
            <Link to="/"><a id="title">VGList</a></Link>
            <Menu right customBurgerIcon={ <i class="fa fa-bars fa-custom fa-3x"></i> }>
                <Link to="/"><a id="homeOption">Home</a></Link>
                {state.token ? <Link to={`/profile/${state.username}`}><a>{state.username}</a></Link> : null}
                {!state.token ? (<><Link to="/auth/signup"><a>Sign Up</a></Link>
                <Link to="/auth/login"><a>Login</a></Link></>) : null}
                {state.token ? <button onClick={() => {dispatch({type: "logout"}); props.history.push("/")}}>Logout</button> : null}
            </Menu>
        </nav>
    )
}

export default Navbar