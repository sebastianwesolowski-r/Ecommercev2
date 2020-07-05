import React, {useContext} from 'react';

import {GlobalContext} from '../../context/global.state';

import {CollectionContainer, CollectionTitle} from './collection.styles';

import CollectionCategory from '../collection-category/collection-category.component';

const Collection = ({match}) => {

    const {selectCollection} = useContext(GlobalContext);

    const collection = selectCollection(match.params.collectionName);
    const {title, categories, season} = collection;

    return (
        <CollectionContainer>
            <CollectionTitle>{title} <span>{season}</span></CollectionTitle>
            {
                categories.map(category => (
                    <CollectionCategory key={category.id} category={category} />
                ))
            }
        </CollectionContainer>
    );
};

export default Collection;