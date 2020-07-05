import styled from 'styled-components';

export const DirectoryContainer = styled.div`
    position: relative;
    width: 100%;
    height: 80%;
    max-height: 620px;
    background-image: url(${props => props.collectionImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0 60px;
`;

export const DirectoryTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 32%;
    font-size: 24px;
    letter-spacing: 1px;
    span {
        font-size: 16px;
        margin-top: 25px;
    }
`;

export const ShopNow = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 120px;
    bottom: 8%;
    font-size: 16px;
    cursor: pointer;
    svg {
        margin-left: 15px;
    }
`;