import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"
import AllEntries from "./AllEntries"

function Main(props) {

    const url = "https://vg-list.herokuapp.com/games/"

    return (
        <div>
            <h1>VGList</h1>
            <Switch>
                <Route 
                    exact path="/"
                    render={(rp) => <AllEntries {...rp} />}
                />
            </Switch>
        </div>
    )
}

export default Main