import { properties } from "../data";

const PaginationButtons = ({ handlePage, firstPage, nextPage, pageStart, pageEnd }) => {
    return (
        <div className='pagination-btn__container'>
            <button disabled={!pageStart} className='first-btn' onClick={firstPage}>
                first
            </button>
            {properties.slice(0, Math.ceil(properties.length / 6)).map((item, index) => {
                return (
                    <button
                        key={index}
                        className={`page-btn ${index === pageStart / 6 ? 'active-btn' : null}`}
                        onClick={() => handlePage(index)}
                    >
                        {index + 1}
                    </button>
                )
            })}
            <button className='next-btn' onClick={nextPage}>
                next
            </button>
        </div>
    )
}

export default PaginationButtons;