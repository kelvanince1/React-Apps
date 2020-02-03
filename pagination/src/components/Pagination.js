import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i ++) {
       pageNumbers.push(i);
   }

    return (
        <div>
            <ul
                style={{
                    'listStyleType': 'none'
                }}
            >
                {
                    pageNumbers.map(number => (
                        <li
                            key={number}
                            style={{
                                'display': 'inline',
                                'margin': '10px',
                                'padding': '5px',
                                'border': '2px solid #eee',
                                'cursor': 'pointer',
                                'color': 'blue'
                            }}
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination;