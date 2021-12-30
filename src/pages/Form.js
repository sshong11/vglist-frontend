import React, {useState} from "react"

function Form(props) {

    const [formData, setFormData] = useState(props.initialEntry)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push("/")
    }

    return (
        <form onSubmit={handleSubmission}>
            Name: <input
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="name"
                required
            />

            Score: <input
                type="number"
                onChange={handleChange}
                value={formData.score}
                name="score"
                required
            />

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

            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form