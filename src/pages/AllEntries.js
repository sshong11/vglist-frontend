import React from "react"
import Entry from "../components/entry"
import Tableheader from "../components/tableheader"

function AllEntries(props) {

    const all = props.entry.map((e) => <Entry entry={e} key={e.id} />)

    return (
        <div className="allEntries">
            <table>
                <Tableheader />
                {all}
            </table>
        </div>
    )
}

export default AllEntries