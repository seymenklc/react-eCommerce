import { useState } from 'react';

import { useFetchProducts } from '../hooks/useFetchProducts';

// Components
import Loader from './Loader/Loader';
import Product from './Product/Product';
import Pagination from './Pagination/Pagination';
import SelectCategory from './Select Category/SelectCategory';
import { usePagination } from '../hooks/usePagination';

const categories = [
    'all',
    'jewelery',
    "men's clothing",
    'electronics',
    "women's clothing"
];

const baseURL = 'https://fakestoreapi.com/products/';

export default function Products() {
    const [category, setCategory] = useState(categories[0]);
    const { data: products, isPending, error } = useFetchProducts(
        category === 'all' ? baseURL : baseURL + `category/${category}`
    );
    const { currentItems, paginate, pageNums } = usePagination(products);

    const pagination = () => {
        return !isPending && (
            <Pagination pageNums={pageNums} paginate={paginate} />
        );
    };

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <Loader />}
            {!isPending && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {pagination()}
                    <SelectCategory categories={categories} setCategory={setCategory} category={category} />
                </div>
            )}
            {products && currentItems.map(product => (
                <Product key={product.id} product={product} />
            ))}
            {pagination()}
        </div>
    );
}