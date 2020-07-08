import styled from 'styled-components';

export const LocationsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    position: absolute;
    bottom: 60px;
    @media (max-width: 800px) {
        flex-direction: column;
        position: static;
        bottom: 0;
        margin: 40px 0;
    }
`;

export const Location = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    margin-right: 70px;
    span {
        width: 195px;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        margin-top: 15px;
    }
    @media (max-width: 800px) {
        margin: 10px 0;
    }
`;