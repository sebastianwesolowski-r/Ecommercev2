import React from 'react';
import {withRouter} from 'react-router-dom';

import {ReactComponent as Arrow} from '../../assets/arrow.svg';

import {DirectoryContainer, DirectoryTitle, ShopNow} from './directory.styles';

const Directory = ({collection, history, match}) => {

    const {collectionImage, season, title} = collection;

    const collectionUrl = `shop/${title.toLowerCase()}`
    console.log(collectionUrl);

    return(
        <DirectoryContainer collectionImage={collectionImage}>
            <DirectoryTitle>
                {title}'s Collection
                <span>- {season}</span>
            </DirectoryTitle>
            <ShopNow onClick={() => history.push(`${match.url}${collectionUrl}`)}>Shop now <Arrow /></ShopNow>
        </DirectoryContainer>
    );
};

export default withRouter(Directory);