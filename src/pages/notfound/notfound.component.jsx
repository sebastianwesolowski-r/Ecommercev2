import React from 'react';

import styled from 'styled-components';

const NotFoundContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 17px;
    padding-bottom: 100px;
`;

const NotFound = () => (
    <NotFoundContainer>- Page Not Found -</NotFoundContainer>
);

export default NotFound;