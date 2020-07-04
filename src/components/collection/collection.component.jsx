import React, {useContext} from 'react';

import {GlobalContext} from '../../context/global.state';

const Collection = ({match}) => {

    const {selectCollection} = useContext(GlobalContext);

    const collection = selectCollection(match.params.collectionName);



    return (
        <div></div>
    );
};

export default Collection;