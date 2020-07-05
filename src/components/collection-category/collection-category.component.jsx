import React from 'react';

import {CategoryContainer, CategoryTitle, CategoryItems} from './collection-category.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionCategory = ({category}) => {

    const {title, items} = category;

    return (
        <CategoryContainer>
            <CategoryTitle>- {title}</CategoryTitle>
            <CategoryItems>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
            </CategoryItems>
        </CategoryContainer>
    );
};

export default CollectionCategory;