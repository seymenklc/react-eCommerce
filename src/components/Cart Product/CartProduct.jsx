import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
// redux
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../redux/actions/favoritesActions";
import { decrementAmount, incrementAmount } from "../../redux/actions/cartActions";

export default function CartProduct({ product, productQty, handleRemoveFromCart }) {
    const dispatch = useDispatch();
    const { addToast } = useToasts();

    const handleIncrement = () => dispatch(incrementAmount(product.id));
    const handleDecrement = () => dispatch(decrementAmount(product.id));

    const handleAdd = () => {
        dispatch(addToFavorites(product));
        addToast('Added to favorites!', {
            appearance: 'info',
            autoDismiss: true,
        });
    };

    return (
        <div className="CartContainer">
            <div className="Cart-Items">
                <div className="image-box">
                    <Link to={`product/${product.id}`}>
                        <img
                            src={product.image}
                            style={{ height: "120px" }}
                            alt={product.title}
                        />
                    </Link>
                </div>
                <div className="about">
                    <h1 className="title">{product.title}</h1>
                    <h3 className="subtitle">{product.category}</h3>
                </div>
                <div className="counter">
                    <div className="amount-btn" onClick={handleIncrement}>
                        +
                    </div>
                    <div className="count">{productQty}</div>
                    <div className="amount-btn" onClick={handleDecrement}>
                        -
                    </div>
                </div>
                <div className="prices">
                    <div className="amount">$ {product.price}</div>
                    <div className="remove" onClick={() => handleRemoveFromCart(product.id)}>
                        <u>Remove</u>
                    </div>
                    <div className='save' onClick={handleAdd}>
                        Add to favorites
                    </div>
                </div>
            </div>
        </div>
    );
}
