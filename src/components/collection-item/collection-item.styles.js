import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 220px;
    height: 270px;
    position: relative;
    font-size: 14px;
    font-weight: 400;
    margin-right: 72px;
    margin-bottom: 15px;
    p {
        margin: 4px 0;
    }
    &:hover {
        > div {
            filter: brightness(0.65);
        }
        button {
            display: block;
        }
    }
`;

export const ItemImage = styled.div`
    width: 220px;
    height: 200px;
    margin-bottom: 5px;
    background-image: url(${props => props.itemImg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const ItemPrice = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba(0, 0, 0, 0.65);
    span {
        color: #000000;
    }
`;