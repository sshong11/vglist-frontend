import React from "react"
import Game from "../components/game"
import {Link} from "react-router-dom"

function Home(props) {
    

    const all = props.allGames.map((e) => <Game key={e.id} game={e} />)
    const usns = props.allUSN.map((e) => (<Link to={`/profile/${e.username}`}><div>{e.username}</div></Link>))

    return (<>
        <h1 id="homeHeader">Home</h1>
        <div className="homePage">
            <div className="homeSection">
                {all}
            </div>

            <div className="homeUsers">
                <h3>Other Users:</h3>
                {usns}
            </div>
        </div>
    </>
    )
}

export default Home