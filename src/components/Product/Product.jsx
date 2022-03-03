import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
// redux
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
// styles
import './Product.css';

export default function Product({ product }) {
    const { addToast } = useToasts();
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        // adding productQty property to product
        product.productQty = 1;
        dispatch(addToCart(product));
        // notify user 
        addToast('Added to cart!', { appearance: 'info', autoDismiss: true, });
    };

    return (
        <div id="container">
            <div className="product-details">
                <h1>{product.title.substring(0, 15)}...</h1>
                <p className="information">{product.description.substring(0, 100)}...</p>
                <div className="control">
                    <button className="btn" onClick={handleAddToCart}>
                        <span className="price">{product.price} $</span>
                        <span className="buy">Add To Cart</span>
                    </button>
                </div>
            </div>
            <Link to={`/product/${product.id}`}>
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                    <div className="info">
                        <h2>Description</h2>
                        <ul>
                            <li><strong>Category: </strong>{product.category}</li>
                            <li><strong>Count: </strong>{product.rating.count}</li>
                            <li><strong>Rate: </strong>{product.rating.rate}</li>
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    );
}