import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
    return (
        <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
                <button key={index + 1} onClick={() => paginate(index + 1)}>{index + 1}</button>
            ))}
        </div>
    );
};

export default Pagination;
