import styled, { css } from 'styled-components';

export const mobileBreakpoint1 = "770px";

export const themeColors = {
    neutralLight: '#FCF7F8',
    neutralDark: '#181311',
    background: '#053332',
    primary: '#00AFB9',
    secondary: '#4C212A'
}

export const H1 = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 64px;
    line-height: 83.2px;
    @media(max-width: ${mobileBreakpoint1}) {
        font-size: 48px;
        line-height: 62px;
    }
`;

export const H2 = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 48px;
    line-height: 62px;
`;

export const Subheader = styled.h3`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 46px;
`;

export const BodyText = styled.span`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    white-space: pre-wrap;
`;

export const MenuTitleStyle = css`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 28px;
    line-height: 36.4px;
    color: ${themeColors.neutralLight};
    @media(max-width: 530px) {
        font-size: 24px;
        line-height: 32px;
    }
`;

export const MenuSubtitleStyle = css`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 41.6px;
    color: ${themeColors.neutralLight};
`;

export const Title = styled(H1)`
    margin-left: calc((100vw - 20px) / 6 + 20px);
    margin-top: 40px;
    color: ${themeColors.primary};
    margin-bottom: 0px;
`;

export enum CaseStudyType {
    Amigurumate,
    JCrew,
    Cisco
}

export const Competitors = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    a {
        display: flex;
        align-items: center;
        height: 100px;
    }
    flex-wrap: wrap;
    gap: 40px;
    @media(max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const PersonaImage = styled.img`
    width: 50vw;
    align-self: center;
    height: auto;
    @media(max-width: 1200px) {
        width: 100%;
    }
`;

export const DemoImg = styled.img`
    width: 100%;
    height: auto;
`;

export const HeroSection = styled.div`
    padding: 80px calc((100vw - 20px) / 6 + 20px);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 40px;
    .designerName {
        color: ${themeColors.background};
    }
    & > * {
        flex: 1 1 0;
    }
    @media(max-width: 1600px) {
        flex-direction: column;
    }
    @media(max-width: 1000px) {
        padding: 40px 16px;
    }
`;

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
`;

export const Subtitle = styled.h3`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 41.6px;
    color: #000000;
    text-align: left;
`;

export const LogoImage = styled.img`
    width: 50%;
    height: auto;
    align-self: center;
    margin: 24px 0;
    @media(max-width: 1200px) {
        width: 100%;
    }
`;

export const PieBox = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
    flex-wrap: wrap;
`;

export const PieChart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-height: 300px;
`;

export const PieContainer = styled.div`
    max-height: 240px;
`;

export const SectionTitle = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;
    color: ${themeColors.neutralDark};
`;

export interface OpenLightboxProps {
    openLightbox: (imgSrc: string, altText: string) => void;
}