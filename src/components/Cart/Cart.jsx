import { findTotalPrice } from "../../utils/findTotalPrice";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

import CartProduct from "../Cart Product/CartProduct";
import Wrapper from "../styled/Wrapper";

import './Cart.css';

export default function Cart() {
    const dispatch = useDispatch();
    const { cart: { cart } } = useSelector(state => state);

    const handleRemoveFromCart = (id) => dispatch(removeFromCart(id));

    if (!cart?.length) return <Wrapper>There is no item in cart</Wrapper>;

    let total;
    if (cart?.length) {
        total = findTotalPrice(cart) || 0;
    }

    return cart && (
        <Wrapper>
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
                        <div className="items">2 items</div>
                    </div>
                    <div className="total-amount">${total}</div>
                </div>
                <button className="button">Checkout</button>
            </div>
        </Wrapper>
    );
}
