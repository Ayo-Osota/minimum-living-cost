const Testimony = ({feedback, name, designation, pfp}) => {
    return (
        <article className="testimony">
            <p>{feedback}</p>
            <footer>
                <div className="pfp" style={{backgroundImage: pfp}}></div>
                <div className="info">
                    <p>{name}</p>
                    <p>{designation}</p>
                </div>
            </footer>
        </article>
    )
}

export default Testimony;