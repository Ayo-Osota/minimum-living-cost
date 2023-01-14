const AboutDetail = ({icon, text}) => {
    return (
        <article className="about-detail">
            <div>
                {icon}
            </div>
            <h5>{text}</h5>
        </article>
    )
}

export default AboutDetail;