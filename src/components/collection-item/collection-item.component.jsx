import React from 'react';

import {ItemContainer, ItemImage, ItemPrice} from './collection-item.styles';

const CollectionItem = ({item}) => {

    const {itemPrice, itemColor, itemName, itemImg} = item;

    const itemHeading = `${itemName.toLowerCase()} / ${itemColor.toLowerCase()}`;

    return (
        <ItemContainer>
            <ItemImage src={itemImg} />
            <p>{itemHeading}</p>
            <ItemPrice>${itemPrice}</ItemPrice>
        </ItemContainer>
    );
};

export default CollectionItem;