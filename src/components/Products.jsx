import { useState } from 'react';

import { useFetchProducts } from '../hooks/useFetchProducts';

// Components
import Loader from './Loader/Loader';
import Product from './Product/Product';
import Pagination from './Pagination/Pagination';
import SelectCategory from './Select Category/SelectCategory';

const categories = [
    'all',
    'jewelery',
    "men's clothing",
    'electronics',
    "women's clothing"
];

const baseURL = 'https://fakestoreapi.com/products/';

export default function Products() {
    const [productsPerPage,] = useState(5);
    const [category, setCategory] = useState(categories[0]);
    const [currentPage, setCurrentPage] = useState(1);

    const {
        data: products,
        isPending,
        error
    } = useFetchProducts(category === 'all' ? baseURL : baseURL + `category/${category}`);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pagination = () => {
        return !isPending && (
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products?.length}
                paginate={paginate}
            />
        );
    };

    if (isPending) return <Loader />;
    if (error) return <div>{error}</div>;

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {pagination()}
                <SelectCategory
                    categories={categories}
                    setCategory={setCategory}
                    category={category}
                />
            </div>

            {products && (
                currentProducts?.map(product => (
                    <Product key={product.id} product={product} />
                ))
            )}

            {pagination()}
        </>
    );
}