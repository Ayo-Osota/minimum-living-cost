import { useEffect, useState } from "react"
import { testimonials } from "../data"
import Testimony from "./Testimony"

const TestimonySection = () => {
    const [index, setIndex] = useState(0)
    const [testimony, setTestimony] = useState(testimonials[index]);

    useEffect(() => {
        setTestimony(testimonials[index])
    }, [index]);

    useEffect(() => {
        let autoSlide = setInterval(() => {
            1 + index < 0 ? setIndex(testimonials.length - 1) :
                1 + index > testimonials.length - 1 ? setIndex(0) :
                    setIndex(1 + index)
        }, 5000);
        return () => {
            clearInterval(autoSlide);
        };
    }, [index]);

    return (
        <section className="testimony-section even-columns">
            <div className="testimony-wrapper">
                <Testimony {...testimony} />
                <div>
                    {testimonials.map((testimony, i) => {
                        return (
                            <button
                                key={i}
                                type="button"
                                className={i === index ? "carousel-btn__active carousel-btn " : "carousel-btn"}
                                onClick={() => setIndex(i)}
                            >
                            </button>
                        )
                    })}
                </div>
            </div>
            <iframe
                src="https://www.youtube.com/embed/U8Cd_McCdow"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            >
            </iframe>
        </section>
    )
}

export default TestimonySection;