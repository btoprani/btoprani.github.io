import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { bgText, conclusionText, earlyStageWireframesText, featureSetText1, featureSetText1Bold1, featureSetText1P2, finalIterationText, HMW1, HMW2, midStageWireframesText, problemStatementBold1, problemStatementText1, problemStatementText1P2, prototypeText, researchBold1, researchBullet1, researchBullet2, researchText1, researchText1P2, researchText2, usabilityTestingBold1, usabilityTestingText1, usabilityTestingText1P2, userTestingBold1, userTestingText1, userTestingText1P2 } from "../components/CiscoContent";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Lightbox, { Slide } from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import { BodyText, CaseStudyType, DemoImg, HeroSection, HeroText, LogoImage, SectionTitle, Subtitle, themeColors } from "../components/SharedStyles";
import { FinalIterationWireframes, LofiWireframes, MidStageWireframes } from "../components/CiscoWireframes";
import { Footer } from "../components/Footer";
import { FeatureSet } from "../components/FeatureSetTables";
import { UsabilityTestingCharts } from "../components/CiscoCharts";

const ciscoLogoSrc = require("../assets/Cisco/CiscoLogo.svg").default;
const ciscoHeroSrc = require("../assets/Cisco/Screen.png");
const ciscoDemo1Src = require("../assets/Cisco/CiscoNewUserDemo.jpg");
const ciscoDemo2Src = require("../assets/Cisco/CiscoHomePageDemo.jpg");

const CiscoColors = {
    neutralLight: '#FFFFFF',
    neutralBlack: '#373C42',
    primary: '#1D69CC',
    offWhite: "#F7F7F7"
}

const HiddenH1 = styled.h1`
    display: none;
`;

const CiscoH2 = styled(SectionTitle)`
    margin-top: 60px;
    margin-bottom: 0;
    @media(max-width: 850px) {
        margin-top: 20px;
        margin-bottom: 0;
    }
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${CiscoColors.neutralLight};
    min-height: 100vh;
`;

const NavbarWrapper = styled.div`
    width: 100vw;
    max-width: 100%;
    background: ${themeColors.neutralDark};
`;

const CiscoHero = styled(HeroSection)`
    background-color: ${CiscoColors.offWhite};
    @media(max-width: 1000px) {
        div {
            gap: 40px;
        }
    }
    img {
        border-radius: 5px;
    }
`;

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px calc((100vw - 20px) / 6 + 20px);
    gap: 40px;
    img {
        cursor: pointer;
    }
    .boldText {
        font-weight: 700;
    }
    margin-bottom: 80px;
    @media(max-width: 950px) {
        margin: 0 32px 80px;
    }
`;

const HMWList = styled.ul`
    margin: 0;
    li {
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #000;
        white-space: pre-wrap;
        :first-child {
            margin-bottom: 20px;
        }
    }
`;

export default function Cisco() {
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
    const [lightboxSlide, setLightboxSlide] = useState<Slide[]>([]);

    function openLightbox(imgSrc: string, altText: string) {
        setLightboxSlide([{
            src: imgSrc,
            alt: altText
        }]);
        setIsLightboxOpen(true);
    }

    return <HelmetProvider>
        <Helmet>
            <title>Cisco Case Study by Bhaven Toprani</title>
        </Helmet>
        <Lightbox 
            open={isLightboxOpen} 
            slides={lightboxSlide} 
            close={()=>setIsLightboxOpen(false)} 
            render={{
                buttonPrev: ()=>null, buttonNext: ()=>null
            }}
            plugins={[Zoom]}
            animation={{zoom: 500}}
        />
        <PageContainer>
            <NavbarWrapper>
                <Navbar altLogo={false} />
            </NavbarWrapper>
            <CiscoHero>
                <HeroText>
                    <LogoImage src={ciscoLogoSrc} alt='Cisco Logo' />
                    <Subtitle>A Home Page and New User Experience for Cisco Intersight in 160 hours.<br /><br /><span className='designerName'>Role: UX/UI Designer</span></Subtitle>
                </HeroText>
                <LogoImage src={ciscoHeroSrc} alt='Cisco Hero' onClick={() => openLightbox(ciscoHeroSrc, 'Cisco Hero')} />
            </CiscoHero>
            <PageContent>
                <HiddenH1>Cisco</HiddenH1>
                <CiscoH2>Background</CiscoH2>
                <BodyText>{bgText}</BodyText>
                <CiscoH2>Research</CiscoH2>
                <BodyText>
                    {researchText1}<span className='boldText'>{researchBold1}</span>{researchText1P2}
                    <ol>
                        <li>{researchBullet1}</li>
                        <li>{researchBullet2}</li>
                    </ol>
                    {researchText2}
                </BodyText>
                <BodyText>{problemStatementText1}<span className='boldText'>{problemStatementBold1}</span>{problemStatementText1P2}</BodyText>
                <HMWList>
                    <li>{HMW1}</li>
                    <li>{HMW2}</li>
                </HMWList>
                <BodyText>{featureSetText1}<span className='boldText'>{featureSetText1Bold1}</span>{featureSetText1P2}</BodyText>
                <FeatureSet headerColor={CiscoColors.neutralLight} headerBgColor={CiscoColors.primary} caseStudyType={CaseStudyType.Cisco} />
                <CiscoH2>Early-Stage Wireframes</CiscoH2>
                <BodyText>{earlyStageWireframesText}</BodyText>
                <LofiWireframes openLightbox={openLightbox} />
                <BodyText>{userTestingText1}<span className='boldText'>{userTestingBold1}</span>{userTestingText1P2}</BodyText>
                <CiscoH2>Iterations</CiscoH2>
                <BodyText>{midStageWireframesText}</BodyText>
                <MidStageWireframes openLightbox={openLightbox} />
                <BodyText>{usabilityTestingText1}<span className='boldText'>{usabilityTestingBold1}</span>{usabilityTestingText1P2}</BodyText>
                <UsabilityTestingCharts />
                <CiscoH2>High-Fidelity Prototype</CiscoH2>
                <BodyText>{prototypeText}</BodyText>
                <a href="https://www.figma.com/proto/t6JFBSi68csuYk9wFZu2fs/ISPLAT-16104-Intersight-Landing-Page?page-id=23%3A2228&node-id=620-41367&p=f&viewport=1722%2C1108%2C0.13&t=cWZ2UGdZSRdqb3B8-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=620%3A41367&show-proto-sidebar=1">
                    <DemoImg src={ciscoDemo1Src} alt="New User Flow" />
                </a>
                <a href="https://www.figma.com/proto/t6JFBSi68csuYk9wFZu2fs/ISPLAT-16104-Intersight-Landing-Page?page-id=23%3A2228&node-id=438-48982&p=f&viewport=1722%2C1108%2C0.13&t=cWZ2UGdZSRdqb3B8-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=438%3A48982">
                    <DemoImg src={ciscoDemo2Src} alt="Home Page Flow" />
                </a>
                <CiscoH2>Final Iteration</CiscoH2>
                <BodyText>{finalIterationText}</BodyText>
                <FinalIterationWireframes openLightbox={openLightbox} />
                <CiscoH2>Conclusion</CiscoH2>
                <BodyText>{conclusionText}</BodyText>
            </PageContent>
            <Footer />
        </PageContainer>
    </HelmetProvider>
}