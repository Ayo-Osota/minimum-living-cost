import { aboutList } from "../data";
import AboutDetail from "./AboutItem";

const About = () => {
    return (
        <section className="about-section container">
            <div className="sub-heading">
                <h3>
                    minimum living cost takes care of everything
                </h3>
                <div className="underline"></div>
            </div>
            <div className="even-columns">
                <div></div>
                <div className="about">
                    {aboutList.map((feature) => {
                        return (
                            <AboutDetail key={feature.id} {...feature} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default About;