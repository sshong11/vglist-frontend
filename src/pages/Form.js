import React, {useEffect, useState} from "react"
import {useAppState} from "../AppState"
import {Link} from "react-router-dom"

function Form(props) {

    const {state} = useAppState()

    const [formData, setFormData] = useState(props.initialEntry)


    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push(`/profile/${state.username}`)
    }

    return (
        <form onSubmit={handleSubmission} onChange={handleChange}>
            Name: <input
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="name"
                required
            />

            Score: <select name="score" onChange={handleChange} value={formData.score} required>
                <option value="select">Select</option>
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
            
            {/* <input
                type="number"
                onChange={handleChange}
                value={formData.score}
                name="score"
                required
            /> */}

            Upload an image: <input
                type="text"
                onChange={handleChange}
                value={formData.image}
                name="image"
            />

            Genre(s): <input
                type="text"
                onChange={handleChange}
                value={formData.genre}
                name="genre"
            />

            Notes: <input
                type="text"
                onChange={handleChange}
                value={formData.notes}
                name="notes"
            />

            <input type="hidden" value={state.username} onChange={handleChange} name="submitter" />

            <input type="submit" value="Submit" />
            <Link to={`/profile/${state.username}`}><button>Back</button></Link>
        </form>
    )
}

export default Form