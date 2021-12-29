import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"
import AllEntries from "./AllEntries"
import SingleEntry from "./SingleEntry"
import Form from "./Form"

function Main(props) {

    const url = "https://vg-list.herokuapp.com/games/"

    const [entry, setEntries] = useState([])

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

    useEffect(() => {
        getEntries()
    }, [])

    return (
        <div>
            <h1>VGList</h1>
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
                        entry={entry} />
                    )}
                />

                <Route 
                    path="/new"
                    render={(rp) => (
                        <Form
                            {...rp} />
                    )}
                />

                <Route 
                    path="/edit"
                    render={(rp) => (
                        <Form
                            {...rp} />
                    )}
                />
            </Switch>
        </div>
    )
}

export default Main