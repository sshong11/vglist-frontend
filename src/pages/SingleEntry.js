import React from "react"
import {Link} from "react-router-dom"
import {useAppState} from "../AppState"

function SingleEntry(props) {

    const id = parseInt(props.match.params.id)
    const entry = props.entry.find((e) => e.id === id)

    const date = entry.created_at.slice(0, 10)
    const modified = entry.updated_at.slice(0, 10)


    return (
        <div className="singleEntry">
            <h1>{entry?.name}</h1>
            <h1>{entry?.score}</h1>
            <img id="singleImg"src={entry?.image} />
            <h1>{entry?.genre}</h1>
            <h1>{entry?.notes}</h1>
            <h3>Submitted on: {date}</h3>
            <h3>Last updated: {modified}</h3>
            <Link to="/edit"><button onClick={(event) => props.edit(entry)}>Edit</button></Link>
            <Link to="/"><button onClick={(event) => props.delete(entry)}>Delete</button></Link>
            <Link to={`/profile/${props.state.username}`}><button>Back</button></Link>
        </div>
    )
}

export default SingleEntry