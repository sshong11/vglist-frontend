import React from "react"
import Entry from "../components/entry"
import Tableheader from "../components/tableheader"
import {Link} from "react-router-dom"

function AllEntries(props) {

    const all = props.entry.map((e) => <Entry entry={e} key={e.id} />)

    return (<>
        <Link to="/new"><button>New Rating</button></Link>
        <div className="allEntries">
            <table>
                <Tableheader />
                {all}
            </table>
        </div>
    </>)
}

export default AllEntries