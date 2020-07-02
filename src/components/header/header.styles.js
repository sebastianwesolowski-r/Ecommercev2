import styled, {css} from 'styled-components';

const displayFlex = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderContainer = styled.div`
    ${displayFlex};
    width: 100%;
    height: 60px;
    position: relative;
    padding-top: 40px;
`;

export const HeaderCompanyName = styled.div`
    font-size: 20px;
`;

export const HeaderNavigation = styled.nav`
    width: 400px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    ul {
        ${displayFlex};
        width: 100%;
        list-style-type: none;
    }
`;

export const HeaderNavigationItem = styled.li`
    font-size: 16px;
    padding: 0;
    margin: 0;
    a {
        text-decoration: none;
        color: #000000;
    }
`;
