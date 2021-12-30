import React, {useState, useEffect} from "react"
import {Route, Switch, Link} from "react-router-dom"
import AllEntries from "./AllEntries"
import SingleEntry from "./SingleEntry"
import Form from "./Form"

function Main(props) {

    const url = "https://vg-list.herokuapp.com/games/"

    const [entry, setEntries] = useState([])

    const nullEntry = {
        name: "",
    }

    const [targetEntry, setTargetEntry] = useState(nullEntry)

    const getEntries = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setEntries(data)
    }

    const addEntry = async (newEntry) => {
        const response = await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })

        getEntries()
    }

    const updateEntry = async (entry) => {
        const response = await fetch(url + entry.id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    }

    const getTargetEntry = (entry) => {
        setTargetEntry(entry)
        props.history.push("/edit")
    }

    useEffect(() => {
        getEntries()
    }, [])

    return (
        <div>
            <h1>VGList</h1>
            <Link to="/new"><button>New Rating</button></Link>
            <Switch>
                <Route 
                    exact path="/"
                    render={(rp) => <AllEntries {...rp} entry={entry}/>}
                />

                <Route
                    path="/games/:id" 
                    render={(rp) => (
                        <SingleEntry
                            {...rp}
                            entry={entry} 
                            edit={getTargetEntry} />
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