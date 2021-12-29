function SingleEntry(props) {

    const id = parseInt(props.match.params.id)
    const entry = props.entry.find((e) => e.id === id)


    return (
        <div>
            <h1>{entry?.name}</h1>
            <h1>{entry?.score}</h1>
            <h1>{entry?.image}</h1>
            <h1>{entry?.genre}</h1>
            <h1>{entry?.notes}</h1>
            <h1>{entry?.created_at}</h1>
        </div>
    )
}

export default SingleEntry