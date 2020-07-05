import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 220px;
    height: 270px;
    font-size: 13px;
    font-weight: 400;
    margin-right: 75px;
    p {
        margin: 4px 0;
    }
`;

export const ItemImage = styled.img`
    width: 220px;
    height: 195px;
    margin-bottom: 5px;
`;

export const ItemPrice = styled.p`
    color: rgba(0, 0, 0, 0.65);
`;