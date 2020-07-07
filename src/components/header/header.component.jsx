import React from 'react';

import {Link} from 'react-router-dom';

import {HeaderContainer, HeaderCompanyName, HeaderNavigation, HeaderNavigationItem} from './header.styles';

import {ReactComponent as Cart} from '../../assets/cart.svg';

const Header = () => (
    <HeaderContainer>
        <HeaderCompanyName><Link to="/">Clothing Company</Link></HeaderCompanyName>
        <HeaderNavigation>
            <ul>
                <HeaderNavigationItem><Link to="/">Shop</Link></HeaderNavigationItem>
                <HeaderNavigationItem><Link to="/about">About</Link></HeaderNavigationItem>
            </ul>
        </HeaderNavigation>
        <Link to="/cart"><Cart/></Link>
    </HeaderContainer>
);

export default Header;