import React, {useState, useContext} from 'react';

import {GlobalContext} from '../../context/global.state';

import {ItemContainer, ItemImage, ItemPrice} from './collection-item.styles';

import CartButton from '../cart-button/cart-button.component';

const CollectionItem = ({item, inCart}) => {

    const {addItemToCart, removeItemFromCart, selectItemQuantity} = useContext(GlobalContext);

    const {itemPrice, itemColor, itemName, itemImg} = item;

    const itemHeading = `${itemName.toLowerCase()} / ${itemColor.toLowerCase()}`;

    let itemQuantity = null

    if(inCart) {
        itemQuantity = selectItemQuantity(item.id);
    }

    return (
        <ItemContainer>
            <ItemImage src={itemImg} />
            <CartButton onClick={() => {inCart ? removeItemFromCart(item) : addItemToCart(item)}}>{inCart ? 'Remove from cart' : 'Add to cart'}</CartButton>
            <p>{itemHeading}</p>
            <ItemPrice>${itemPrice} {inCart && itemQuantity > 1 ? <span>({itemQuantity})</span> : null}</ItemPrice>
        </ItemContainer>
    );
};

export default CollectionItem;