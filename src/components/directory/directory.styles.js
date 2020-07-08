import styled from 'styled-components';

export const DirectoryContainer = styled.div`
    position: relative;
    width: 100%;
    height: 570px;
    background-image: url(${props => props.collectionImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0 60px;
    @media (max-width: 800px) {
        height: 400px;
    }
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
    @media (max-width: 800px) {
        top: 8%;
        font-size: 25px;
        span {
            font-size: 17px;
            margin-top: 10px;
        }
    }
`;

export const ShopNow = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 120px;
    bottom: 10%;
    font-size: 16px;
    cursor: pointer;
    svg {
        margin-left: 15px;
    }
    @media (max-width: 800px) {
        right: 180px;
        bottom: 4%;
        font-size: 24px;
    }
`;