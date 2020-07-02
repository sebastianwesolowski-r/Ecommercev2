import React from 'react';

import {Link} from 'react-router-dom';

import {HeaderContainer, HeaderCompanyName, HeaderNavigation, HeaderNavigationItem} from './header.styles';

import {ReactComponent as Cart} from '../../assets/cart.svg';

const Header = () => (
    <HeaderContainer>
        <HeaderCompanyName>Clothing Company</HeaderCompanyName>
        <HeaderNavigation>
            <ul>
                <HeaderNavigationItem><Link to="/">Products</Link></HeaderNavigationItem>
                <HeaderNavigationItem><Link to="/">Sale</Link></HeaderNavigationItem>
                <HeaderNavigationItem><Link to="/">About</Link></HeaderNavigationItem>
            </ul>
        </HeaderNavigation>
        <Link to="/cart"><Cart/></Link>
    </HeaderContainer>
);

export default Header;