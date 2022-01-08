import React from "react"
import Game from "../components/game"
import {Link} from "react-router-dom"
import InfiniteScroll from 'react-infinite-scroll-component';

function Home(props) {
    

    const all = props.allGames.map((e) => <Game key={e.id} game={e} />)
    const usns = props.allUSN.map((e) => (<Link to={`/profile/${e.username}`}><div>{e.username}</div></Link>))

    return (<>
        <h1 id="homeHeader">Check out these games from other users</h1>
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