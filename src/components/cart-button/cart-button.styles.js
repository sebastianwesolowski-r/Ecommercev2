import styled from 'styled-components';

export const CartBtn = styled.button`
    display: none;
    width: 165px;
    height: 50px;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 17px;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    background: none;
    outline: none;
    cursor: pointer;
    transition-duration: 110ms;
    &:active {
        background-color: #FFFFFF;
    }
`;