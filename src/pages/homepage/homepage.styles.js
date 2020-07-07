import styled from 'styled-components';

export const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 180px;
`;

export const DirectoryNavigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60px;
    height: 15px;
    margin-top: 50px;
`;

export const NavigationDot = styled.div`
    width: 12px;
    height: 12px;
    border: 2px solid;
    border-radius: 100%;
    cursor: pointer;
    transition-duration: 200ms;
    transition-delay: 50ms;
    &:hover {
        background-color: #000000;
    }
`;