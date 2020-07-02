import styled from 'styled-components';

export const DirectoryContainer = styled.div`
    width: 100%;
    height: 80%;
    background-image: ${props => props.collectionImage};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid;
`;