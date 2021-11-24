import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

// Hooks
import { useFetchProducts } from '../../hooks/useFetchProducts';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

// Components
import Loader from '../../components/Loader/Loader';
import Wrapper from '../../components/styled/Wrapper';

import './ProductDetail.css';

export default function ProductDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { addToast } = useToasts();
    const { id: productId } = useParams();
    const { data: product, isPending, error } = useFetchProducts(`https://fakestoreapi.com/products/${productId}`);

    if (isPending) return <Loader />;
    if (error) return <div>{error}</div>;

    const handleClick = () => {
        dispatch(addToCart(product));
        setTimeout(() => history.push('/home'), 1500);

        addToast("Added to cart, you're being redirected to home page", {
            appearance: 'info',
            autoDismiss: true,
        });
    };

    return product && (
        <Wrapper>
            <div className="container">
                <div className="imgBx">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="details">
                    <div className="content">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <h3>$ {product.price}</h3>
                        <button onClick={handleClick}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper >
    );
}
