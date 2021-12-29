import React from "react"
import Entry from "../components/entry"

function AllEntries(props) {

    return props.entry.map((e) => <Entry entry={e} key={e.id} />)
}

export default AllEntries