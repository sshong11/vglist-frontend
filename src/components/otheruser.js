import {Link} from "react-router-dom"

function Otheruser({usn}) {

    return (
        <Link to={`/profile/${usn.username}`}><div className="homeUSN">{usn.username}</div></Link>
    )
}

export default Otheruser