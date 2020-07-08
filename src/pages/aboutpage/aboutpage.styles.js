import styled from 'styled-components';

export const AboutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 150px;
    @media (max-width: 800px) {
        padding-top: 80px;
    }
`;

export const AboutHeader = styled.div`
    font-size: 40px;
    @media (max-width: 800px) {
        font-size: 35px;
    }
`

export const AboutCompany = styled.div`
    width: 100%;
    font-size: 20px;
    margin-top: 90px;
    @media (max-width: 800px) {
        font-size: 18px;
        margin-top: 60px;
    }
`;