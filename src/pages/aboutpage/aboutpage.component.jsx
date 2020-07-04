import React from 'react';

import {AboutPageContainer, AboutHeader, AboutCompany} from './aboutpage.styles';
import {LocationsContainer, Location} from '../../components/location/location.styles';

const AboutPage = () => (
    <AboutPageContainer>
        <AboutHeader>About</AboutHeader>
        <AboutCompany>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia dapibus auctor. Suspendisse elementum, elit vel placerat ultrices, nisi leo ultrices lectus, posuere vulputate arcu tellus sed odio. In aliquet condimentum ante id scelerisque. Aenean ac urna quis nulla euismod dictum. Nam pharetra, magna vitae aliquet gravida, erat quam tempor est, eget pretium turpis lacus vel mi. Maecenas turpis leo, varius ut augue vel, condimentum ullamcorper leo. Sed imperdiet tortor tortor, et mattis dolor tincidunt non. Maecenas ac nulla ut nulla aliquet vestibulum. Nam imperdiet ipsum quis massa elementum blandit. Donec id dui mauris. Morbi eu commodo augue.
        </AboutCompany>
        <LocationsContainer>
            <Location>Paris <span>206 Avenue de l'Opéra, 75001</span></Location>
            <Location>Warsaw <span>Zlota 309, 00-120</span></Location>
            <Location>London <span>UNIT 101, COVENT GARDEN, W2CE 8RB</span></Location>
        </LocationsContainer>
    </AboutPageContainer>
);

export default AboutPage;