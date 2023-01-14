import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
    return (
        <section className="hero-section even-columns container">
            <h1 className="primary-heading">
                The most affortable place to stay in the san franciso bay area
            </h1>
            <div className="map">
                <div></div>
                <form className="map-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-control">
                        <select name="type" id="type">
                            <option value="all">all type</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <select name="location" id="location">
                            <option value="neighbourhood">neighbourhood</option>
                        </select>
                    </div>
                    <button type="submit">
                        <AiOutlineSearch />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Hero;