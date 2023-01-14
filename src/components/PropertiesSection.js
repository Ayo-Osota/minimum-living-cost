import { useState } from "react";
import { properties } from "../data";
import PaginationButtons from "./PaginationButtons";
import PropertiesList from "./PropertiesList"

const PropertiesSection = () => {
    const [page, setPage] = useState({ start: 0, end: 6 });

    const nextPage = () => {
        let nextPageEnd = page.end + 6;
        let nextPageStart = nextPageEnd - 6;
        if (properties.length <= nextPageEnd) {
            nextPageEnd = properties.length;
            nextPageStart = properties.length - (properties.length % 6) 
        }
        if (page.end >= properties.length) {
            nextPageStart = 0
            nextPageEnd = 6
        }
        setPage({ start: nextPageStart, end: nextPageEnd });
    }

    const firstPage = () => {
        setPage({ start: 0, end: 6 });
    }

    const handlePage = (index) => {
        let tempPage = (index + 1) * 6;
        setPage({ start: tempPage - 6, end: tempPage });
    }

    return (
        <section className="property-section">
            <div className="container">
                <header className="flex">
                    <div className="sub-heading">
                        <h3>
                            list of properties
                        </h3>
                        <div className="underline"></div>
                    </div>
                    <a href="/" className="btn">view all properties</a>
                </header>
                <PropertiesList pageStart={page.start} pageEnd={page.end} />
                <PaginationButtons
                    firstPage={firstPage}
                    nextPage={nextPage}
                    handlePage={handlePage}
                    pageStart={page.start}
                    pageEnd={page.end}
                />
            </div>
        </section>
    )
}

export default PropertiesSection;