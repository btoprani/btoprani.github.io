import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Title, themeColors } from '../components/SharedStyles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Lightbox, { Slide } from 'yet-another-react-lightbox';
import { Zoom } from "yet-another-react-lightbox/plugins"
import { Footer } from '../components/Footer';

const Headshot = require('../assets/btLinkedIn2.1.png');

const ContentPane = styled.div`
    margin: 20px calc((100vw - 20px) / 6 + 20px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(400, 700);
    grid-gap: 60px;
    align-items: start;
    max-height: 700px;
    justify-content: start;
    @media(max-width: 1200px) {
        margin: 16px;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        max-height: unset;
        grid-gap: 32px;
`;

const Content = styled.div`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    @media(max-width: 1200px) {
        overflow-y: scroll;
    }
`;

const Text = styled.span`
    color: ${themeColors.neutralLight};
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    @media(max-width: 1200px) {
        max-width: 100%;
    }
`;

const HeadshotImage = styled.img`
    max-height: 700px;
    object-fit: contain;
    width: 100%;
    object-position: left;
    @media(max-width: 1200px) {
        width: auto;
        justify-self: center;
        max-width: 100%;
    }
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${themeColors.secondary};
    min-height: 100vh;
    @media(max-width: 1200px) {
        h1 {
            margin: 16px;
        }
        width: 100vw;
    }
`;

const FooterContainer = styled.div`
    width: 100%;
`;

const About = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
    const [lightboxSlide, setLightboxSlide] = useState<Slide[]>([]);

    function openLightbox(imgSrc: string, altText: string) {
        setLightboxSlide([{
            src: imgSrc,
            alt: altText
        }]);
        setIsLightboxOpen(true);
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title data-rh="true">About Bhaven Toprani</title>
            </Helmet>
            <Lightbox
                open={isLightboxOpen}
                slides={lightboxSlide}
                close={() => setIsLightboxOpen(false)}
                render={{
                    buttonPrev: () => null, buttonNext: () => null
                }}
                plugins={[Zoom]}
                animation={{ zoom: 500 }}
            />
            <AboutContainer>
                <Navbar altLogo={false} />
                <Content>
                    <Title>About</Title>
                    <ContentPane>
                        <Text>
                            I started my UX journey as a Software Engineer. I had worked in QA Automation, Full Stack development, and Front End development. When I started my journey into UX, I worked with a rockstar designer the likes of whom I have yet to encounter again. Working with her allowed me to dive deep into responsive design and accessibility, which were the areas I specialized in within development. After that, I moved on to another company where I did not have that support. That vacuum motivated me to learn design so that I could create the quality design work myself. And if it helped take my career in a new direction, even better!
                            <br />
                            <br />
                            I am in the market for a UX Developer position with a hybrid remote working structure and a supportive working environment.
                        </Text>
                        <HeadshotImage src={Headshot} alt="Headshot" onClick={() => openLightbox(Headshot, "Headshot")} />
                    </ContentPane>
                </Content>
                <FooterContainer>
                    <Footer />
                </FooterContainer>
            </AboutContainer>
        </HelmetProvider>
    );
};

export default About;
