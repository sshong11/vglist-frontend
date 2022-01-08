import React from "react"
import {Link} from "react-router-dom"

function Entry(props) {

    return (
        <tbody>
            <tr>
                <td><Link to={`/games/${props.entry.id}`}><img class="td-click" src={props.entry.image} /></Link></td>
                <td><Link to={`/games/${props.entry.id}`}><a class="td-click">{props.entry.name}</a></Link></td>
                <td><a>{props.entry.score}</a></td>
                <td><a>{props.entry.genre}</a></td>
            </tr>
        </tbody>
    )
}

export default Entry