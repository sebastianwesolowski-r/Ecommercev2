import React from 'react';

import {CartBtn} from './cart-button.styles';

const CartButton = ({children, ...props}) => (
    <CartBtn {...props}>{children}</CartBtn>
);

export default CartButton;