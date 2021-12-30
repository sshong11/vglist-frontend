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
            <input
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="name"
            />

            <input
                type="number"
                onChange={handleChange}
                value={formData.score}
                name="score"
            />

            <input
                type="text"
                onChange={handleChange}
                value={formData.image}
                name="image"
            />

            <input
                type="text"
                onChange={handleChange}
                value={formData.genre}
                name="genre"
            />

            <input
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