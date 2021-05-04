import React from 'react'

const Filter = (props) => {
    return (
        <div className='filter'>
            <div className="filter-result">{props.count} Products</div>
            <div className="filter-sort">Order {" "}
            <select value={props.sorted} onChange={props.sortProducts}>
            <option value="all">ALL</option>
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
            </select>
            </div>
            <div className="filter-size">Filter {" "}
            <select value={props.size} onChange={props.filterProducts}>
            <option value="all">ALL</option>
            <option value="poster">Poster</option>
            <option value="postcard">Postcard</option>
            <option value="print">Print</option>
            </select>
            </div>
        </div>
    )
}

export default Filter
