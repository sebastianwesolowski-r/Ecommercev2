import styled from 'styled-components';

export const CartpageContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 20px;
    padding-top: 120px;
`;

export const CartHeader = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 21px;
    margin-bottom: 80px;
    span {
        font-size: 15px;
        font-weight: 400;
        margin-top: 12px;
    }
`;

export const EmptyCart = styled.div`
    width: 100%;
    text-align: center;
    font-size: 15px;
    margin-top: 200px;
`;

export const CheckoutFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 75px;
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 17px;
`;