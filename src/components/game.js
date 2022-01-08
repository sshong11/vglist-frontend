import React from "react"
import {Link} from "react-router-dom"

function Game(props) {

    const {game} = props

    return (
        <div className="gameHome">
            <p>{game.name}</p>
            <p>{game.score}/10</p>
            <a>by: {game.submitter}</a>
            <img src={game.image} alt={game.name} />
        </div>
    )
}

export default Game