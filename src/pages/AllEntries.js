import React from "react"
import Entry from "../components/entry"
import Tableheader from "../components/tableheader"

function AllEntries(props) {

    const all = props.entry.map((e) => <Entry entry={e} key={e.id} />)

    return (
        <table>
            <Tableheader />
            {all}
        </table>
    )
}

export default AllEntries