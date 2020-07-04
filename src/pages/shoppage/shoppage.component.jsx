import React from 'react';
import {Route} from 'react-router-dom';

import Collection from '../../components/collection/collection.component';

const ShopPage = ({match}) => (
    <Route path={`${match.path}/:collectionName`} component={Collection} />
);

export default ShopPage;