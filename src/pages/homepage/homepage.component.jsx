import React, {useState} from 'react';

import {HomepageContainer, DirectoryNavigation, NavigationDot} from './homepage.styles';

import Directory from '../../components/directory/directory.component';

const HomePage = ({collections}) => {

    const [collection, changeCollection] = useState(collections.men);

    return (
        <HomepageContainer>
            <Directory collection={collection} />
            <DirectoryNavigation>
                <NavigationDot style={{backgroundColor: `${collection === collections.men ? '#000000': ''}`}} onClick={() => changeCollection(collections.men)}/>
                <NavigationDot style={{backgroundColor: `${collection === collections.women ? '#000000': ''}`}} onClick={() => changeCollection(collections.women)}/>
            </DirectoryNavigation>
        </HomepageContainer>
    );
};

export default HomePage;