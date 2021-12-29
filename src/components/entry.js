import React from "react"
import {Link} from "react-router-dom"

function Entry(props) {

    return (
        <div>
            <Link to={`/games/${props.entry.id}`}>
                <h1>{props.entry.name}</h1>
            </Link>
        </div>
    )
}

export default Entry