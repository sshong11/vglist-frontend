import React, {useState, useEffect} from "react"
import {Route, Switch, Link} from "react-router-dom"
import { useAppState } from "../AppState"
import AllEntries from "./AllEntries"
import SingleEntry from "./SingleEntry"
import Form from "./Form"
import Navbar from "../components/navbar"
import Auth from "./Auth"

function Main(props) {

    // USER AUTH //

    const {state, dispatch} = useAppState()
    useState(() => {
        const auth = JSON.parse(window.localStorage.getItem("auth"))
        if (auth) {
            dispatch({type: "auth", payload: auth})
            props.history.push("/")
        } else {
            props.history.push("/auth/login")
        }
    }, [])

    ///////////////

    const url = "https://vg-list.herokuapp.com/games/"

    const {token} = state

    const [entry, setEntries] = useState([])

    const nullEntry = {
        name: "",
    }

    const [targetEntry, setTargetEntry] = useState(nullEntry)

    const getEntries = async () => {
        const response = await fetch(url, {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const data = await response.json()
        setEntries(data)
    }

    const addEntry = async (newEntry) => {
        const response = await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token
            },
            body: JSON.stringify(newEntry)
        })

        getEntries()
    }

    const updateEntry = async (entry) => {
        const response = await fetch(url + entry.id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token
            },
            body: JSON.stringify(entry)
        })

        getEntries()
    }

    const getTargetEntry = (entry) => {
        setTargetEntry(entry)
        props.history.push("/edit")
    }

    useEffect(() => {
        if (!token) {
            return
        }
        getEntries()
    }, [token])

    const deleteEntry = async (entry) => {
        const response = await fetch(url + entry.id + "/", {
            method: "delete",
            headers: {
                Authorization: "bearer " + token
            }
        })

        getEntries()
        props.history.push("/")
    }

    console.log(entry)

    return (
        <div className="main">
            <Route path="/" component={Navbar} />
            <Link to="/new"><button>New Rating</button></Link>
            <Switch>
                <Route 
                    exact path="/"
                    render={(rp) => <AllEntries {...rp} entry={entry} />}
                />

                <Route 
                    path="/auth/:form"
                    render={(rp) => (
                        <Auth 
                            {...rp}/>
                    )}
                />

                <Route
                    path="/games/:id" 
                    render={(rp) => (
                        <SingleEntry
                            {...rp}
                            entry={entry} 
                            edit={getTargetEntry}
                            delete={deleteEntry} />
                    )}
                />

                <Route 
                    path="/new"
                    render={(rp) => (
                        <Form
                            {...rp}
                            handleSubmit={addEntry} 
                            initialEntry={nullEntry} />
                    )}
                />

                <Route 
                    path="/edit"
                    render={(rp) => (
                        <Form
                            {...rp} 
                            handleSubmit={updateEntry}
                            initialEntry={targetEntry} />
                    )}
                />
            </Switch>
        </div>
    )
}

export default Main