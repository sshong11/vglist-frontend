import React, {useState, useEffect} from "react"
import {Route, Switch, Link} from "react-router-dom"
import { useAppState } from "../AppState"
import AllEntries from "./AllEntries"
import SingleEntry from "./SingleEntry"
import Form from "./Form"
import Navbar from "../components/navbar"
import Auth from "./Auth"
import Home from "./Home"

function Main(props) {

    // USER AUTH //

    const {state, dispatch} = useAppState()
    useState(() => {
        const auth = JSON.parse(window.localStorage.getItem("auth"))
        if (auth) {
            dispatch({type: "auth", payload: auth})
        } else {
            props.history.push("/")
        }
    }, [])

    ///////////////

    const url = "https://vg-list.herokuapp.com/games/"


    const {token} = state

    // for ALL
    const [allGames, setAllGames] = useState([])

    // for USERS
    const [entry, setEntries] = useState([])

    // for USERNAMES
    const [usn, setUSN] = useState([])

    const nullEntry = {
        name: "",
        submitter: state.username,
    }

    const [targetEntry, setTargetEntry] = useState(nullEntry)

    // Gets ALL users games added (for home page)
    const getEveryEntries = async () => {
        const response = await fetch("https://vg-list.herokuapp.com/allgames", {
            method: "get",
        })
        const data = await response.json()
        setAllGames(data)
    }

    // Gets USERS games added
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

    // Gets all usernames
    const getUSN = async () => {
        const response = await fetch("https://vg-list.herokuapp.com/allusers", {
            method: "get",
        })
        const data = await response.json()
        setUSN(data)
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
            getEveryEntries()
            getUSN()
            return
        } else {
            getEveryEntries()
            getUSN()
            getEntries()
        }  
    }, [token])

    const deleteEntry = async (entry) => {
        const response = await fetch(url + entry.id + "/", {
            method: "delete",
            headers: {
                Authorization: "bearer " + token
            }
        })

        getEntries()
        props.history.push(`/profile/${state.username}`)
    }

    return (
        <div className="main">
            <Route path="/" component={Navbar} />
            <Switch>
                <Route 
                    exact path="/"
                    render={(rp) => <Home {...rp} allGames={allGames} allUSN={usn} getEvery={getEveryEntries}/>}
                />

                <Route 
                    path="/auth/:form"
                    render={(rp) => (
                        <Auth 
                            {...rp}/>
                    )}
                />

                <Route
                    exact path={`/profile/${state.username}`}
                    render={(rp) => <AllEntries {...rp} entry={entry} />}
                />

                <Route
                    path="/games/:id" 
                    render={(rp) => (
                        <SingleEntry
                            {...rp}
                            entry={entry} 
                            edit={getTargetEntry}
                            delete={deleteEntry}
                            state={state} />
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