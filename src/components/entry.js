import React from "react"
import {Link} from "react-router-dom"

function Entry(props) {

    return (
        <tbody>
            <tr>
                <td><a>{props.entry.image}</a></td>
                <td><Link to={`/games/${props.entry.id}`}><a>{props.entry.name}</a></Link></td>
                <td><a>{props.entry.score}</a></td>
                <td><a>{props.entry.genre}</a></td>
            </tr>
        </tbody>
    )
}

export default Entry