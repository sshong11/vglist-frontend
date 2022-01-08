function Tableheader(props) {
    return (
        <tbody className="tableheader">
            <tr>
                <th className="th-image"><a>Image</a></th>
                <th className="th-title"><a>Title</a></th>
                <th className="th-score"><a>Score</a></th>
                <th className="th-genre"><a>Genre(s)</a></th>
            </tr>
        </tbody>
    )
}

export default Tableheader