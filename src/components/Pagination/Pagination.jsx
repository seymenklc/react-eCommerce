import { Link } from "react-router-dom";
// styles
import './Pagination.css';

export default function Pagination({ pageNums, paginate }) {
    return (
        <nav className='pagination'>
            {pageNums.map(number => (
                <li className='paginate' key={number}>
                    <Link className='page_link' to='#' onClick={() => paginate(number)} >
                        {number}
                    </Link>
                </li>
            ))}
        </nav>
    );
}