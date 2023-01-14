import { properties } from "../data"
import Property from "./Property"

const PropertiesList = ({pageStart, pageEnd}) => {
    return (
        <div className="properties-wrapper">
            {properties.slice([pageStart], [pageEnd]).map((property) => {
                return (
                    <Property {...property}/>
                )
            })}
        </div>
    )
}

export default PropertiesList;