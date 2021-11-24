export const findTotalPrice = (cart) => {
    return cart
        .reduce((total, item) => total += item.price * item.productQty, 0)
        .toFixed(2);
};