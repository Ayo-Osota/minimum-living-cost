const FeaturesSection = () => {
    return (
        <section className="features-section even-columns container">
            <div className="features">
                <div>
                    <article>
                        <h6>
                            Flexible Leases
                        </h6>
                    </article>
                    <article>
                        <h6>
                            7-Day Happiness Guaranteed
                        </h6>
                    </article>
                </div>
                <div>
                    <article>
                        <h6>
                            Monthly House Cleaning
                        </h6>
                    </article>
                    <article>
                        <h6>
                            Choose Your Own Roommate
                        </h6>
                    </article>
                </div>
            </div>
            <div className="flow">
                <h2>Flexibility and options to suit your lifestyle.</h2>
                <p className="text-grey-500">
                    You need it? We got it. We make finding your next home easy,
                    comfortable, and simple. From our happiness guarantee to our
                    selective roommate finder option. We provide you the flexibility
                    that you most desire.
                </p>
                <button type="button" className="btn">search rooms</button>
            </div>
        </section>
    )
}

export default FeaturesSection;