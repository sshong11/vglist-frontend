import {Link} from "react-router-dom"
import {useAppState} from "../AppState"
import { slide as Menu } from 'react-burger-menu'

function Navbar(props) {

    const {state, dispatch} = useAppState()

    return (
        <nav>
            <Link to="/"><a id="title">VGList</a></Link>
            <Menu right customBurgerIcon={ <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg> }>
                <Link to="/"><a id="homeOption">Home</a></Link>
                {state.token ? <Link to={`/profile/${state.username}`}><a>{state.username}</a></Link> : null}
                {!state.token ? (<><Link to="/auth/signup"><a>Sign Up</a></Link>
                <Link to="/auth/login"><a>Login</a></Link></>) : null}
                {state.token ? <button id="navlogout" onClick={() => {dispatch({type: "logout"}); props.history.push("/")}}>Logout</button> : null}
            </Menu>
        </nav>
    )
}

export default Navbar