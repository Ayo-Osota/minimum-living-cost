import noImage from "../assets/no-image.jpg";
import showerIcon from "../assets/shower.svg";
import bedIcon from "../assets/bed.svg";
import sizeIcon from "../assets/size.svg";

const Property = ({ image, address, bedroom, shower, size, type, price }) => {
    return (
        <article className="property">
            <div
                className="property-img"
                style={{ backgroundImage: image ? `url(${image})` : `url(${noImage})` }}>
            </div>
            <div className="property-info flow">
                <h6 className="ff-secondary fw-bold text-primary-400">{address}</h6>
                <p className="ff-secondary fw-regular text-grey-300">{type}</p>
                <h5 className="ff-secondary fw-bold text-accent-400">${price}/Month</h5>
            </div>
            <footer>
                <div>
                    <img src={bedIcon} alt="bedroom" />
                    <span>{bedroom}</span>
                </div>
                <div>
                    <img src={showerIcon} alt="shower" />
                    <span>{shower}</span>
                </div>
                <div>
                    <img src={sizeIcon} alt="size" />
                    <span>{size}</span>
                </div>
            </footer>
        </article>
    )
}

export default Property;