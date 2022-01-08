import React, {useState, useEffect} from "react"
import {AppState, useAppState} from "../AppState"

function Auth(props) {

    const type = props.match.params.form

    const [formData, setFormData] = useState({username: "", password: ""})
    const [userData, setUserData] = useState(null)
    const {state, dispatch} = useAppState()

    useEffect(() => {
        if (userData) {
            console.log(userData)
            const {token, user} = userData
            dispatch({type: "auth", payload: {token, username: user.username}})
            window.localStorage.setItem("auth", JSON.stringify({token, username: user.username}))
            props.history.push(`/profile`)
        }
    }, [userData])

    const actions = {
        signup: () => {
            return fetch(state.url + "/users", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json())
        },
        login: () => {
            return fetch(state.url + "/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }).then((response) => response.json())
        }
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        actions[type]().then((data) => {
            setUserData(data)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username"  value={formData.username} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                <input type="submit" value={type.toUpperCase()} />
            </form>
        </div>
    )
}

export default Auth