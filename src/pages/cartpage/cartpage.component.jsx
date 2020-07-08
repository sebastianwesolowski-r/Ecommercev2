import React, {useContext} from 'react';

import {CartpageContainer, CartHeader, EmptyCart, CheckoutFooter} from './cartpage.styles';
import {CategoryItems} from '../../components/collection-category/collection-category.styles';

import CollectionItem from '../../components/collection-item/collection-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

import {GlobalContext} from '../../context/global.state';

const CartPage = () => {

    const {cart, clearCart} = useContext(GlobalContext);

    const totalItems = cart.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0);
    const totalPrice = cart.reduce((accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.itemPrice, 0);

    return (
        <CartpageContainer>
            <CartHeader>
                Your cart
                <span>{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
            </CartHeader>
            {
                totalItems === 0 ? (
                    <EmptyCart>- Your cart is empty -</EmptyCart>
                ) : (
                    <CategoryItems>
                        {
                            cart.map(cartItem => (
                                <CollectionItem key={cartItem.id} item={cartItem} inCart/>
                            ))
                        }
                    </CategoryItems>
                )
            }
            <CheckoutFooter>
                Total: ${totalPrice}
                <StripeButton totalPrice={totalPrice} clearCart={clearCart}/>
                <span>Test: Card number: 4242 4242 4242 4242, MM YY: 04/24 CVC: 424</span>
            </CheckoutFooter>
        </CartpageContainer>
    );
};

export default CartPage;