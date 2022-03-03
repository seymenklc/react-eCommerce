import { findTotalPrice } from "../../utils/findTotalPrice";
// redux
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
// components
import CartProduct from "../Cart Product/CartProduct";
import Wrapper from "../styled/Wrapper";
// styles
import './Cart.css';

export default function Cart() {
    const dispatch = useDispatch();
    const { cart: { cart } } = useSelector(state => state);

    const handleRemoveFromCart = (id) => dispatch(removeFromCart(id));

    let total;
    if (cart?.length) {
        total = findTotalPrice(cart) || 0;
    }

    return cart && (
        <Wrapper>
            {!cart?.length && <Wrapper>There is no item in cart</Wrapper>}
            {cart.map(product => (
                <CartProduct
                    key={product.id}
                    product={product}
                    productQty={product.productQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            ))}
            <div className="checkout">
                <div className="total">
                    <div>
                        <div className="Subtotal">Sub-Total</div>
                        <div className="items">{cart?.length} items</div>
                    </div>
                    <div className="total-amount">${total}</div>
                </div>
                <button className="button">Checkout</button>
            </div>
        </Wrapper>
    );
}
