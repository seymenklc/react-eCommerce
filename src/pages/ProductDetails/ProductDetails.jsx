import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { addToCart } from '../../redux/actions/cartActions';
import { useParams, useHistory } from 'react-router-dom';
// Hooks
import { useFetchProducts } from '../../hooks/useFetchProducts';
// Components
import Loader from '../../components/Loader/Loader';
import Wrapper from '../../components/styled/Wrapper';
// styles
import './ProductDetail.css';

const baseURL = 'https://fakestoreapi.com/products/';

export default function ProductDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { addToast } = useToasts();
    const { id: productId } = useParams();
    const { data: product, isPending, error } = useFetchProducts(baseURL + productId);

    const handleClick = () => {
        dispatch(addToCart(product));
        setTimeout(() => history.push('/home'), 1500);
        // notify user
        addToast("Added to cart, you're being redirected to home page", {
            appearance: 'info',
            autoDismiss: true,
        });
    };

    return product && (
        <Wrapper>
            {isPending && <Loader />}
            {error && <div>{error}</div>}
            <div className="container">
                <div className="imgBx">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="details">
                    <div className="content">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <h3>$ {product.price}</h3>
                        <button onClick={handleClick}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </Wrapper >
    );
}