import { Link } from "react-router-dom";

import './Pagination.css';

export default function Pagination({ productsPerPage, totalProducts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='pagination'>
            {pageNumbers.map(number => (
                <li className='paginate' key={number}>
                    <Link className='page_link' to='#' onClick={() => paginate(number)} >
                        {number}
                    </Link>
                </li>
            ))}
        </nav>
    );
}
