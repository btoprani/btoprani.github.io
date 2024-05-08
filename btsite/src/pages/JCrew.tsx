import React from 'react';
import styled, { css } from 'styled-components';
import { HMW2, HMW3, bgText, bgText2, conclusionText, featureSetText, goalText, hifiText1, hifiText2, lofiText, personaText, problemStatmentText, researchText1, researchText2, userFlowText } from '../components/JCrewContent';
import Navbar from '../components/Navbar';
import { CaseStudyType, Competitors, PersonaImage, themeColors } from '../components/SharedStyles';
import { FeatureSet } from '../components/FeatureSetTables';
import { HifiWireframes, LofiWireframes } from '../components/JCrewWireframes';

const personaImageSrc = require("../assets/JCrew/Persona.jpg");
const userFlowSrc = require("../assets/JCrew/UserFlows.webp");
const affinityMapSrc = require("../assets/JCrew/AffinityMap.webp");
const projectGoalsSrc = require("../assets/JCrew/ProjectGoals.webp");
const demoSrc = require("../assets/JCrew/Demo.jpg");

const textCSS = css`
    font-family: "soleil", Helvetica, Arial, sans-serif;
    color: #000;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0.3px;
    line-height: 24px;
    white-space: pre-wrap;
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    iframe {
        margin: 40px 0;
        align-self: center;
        border: 1px solid rgba(0, 0, 0, 0.1);
        width: 100%;
        aspect-ratio: 16/9;
    }
`;

const NavbarWrapper = styled.div`
    width: 100vw;
    max-width: 100%;
    background: ${themeColors.neutralDark};
    margin-bottom: 60px;
`;

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px calc((100vw - 20px) / 6 + 20px);
    gap: 40px;
    .competitors svg {
        max-height: 100px;
        width: auto;
        max-width: 200px;
        min-height: 50px;
    }
`;

const TextBlock = styled.span`
    ${textCSS}
    .boldText {
        font-weight: 700;
    }
`;

const JCrewLogo = styled.img`
    height: 96px;
    width: auto;
    max-width: 459px;
    object-fit: contain;
    margin: 64px 0;
`;

const HiddenH1 = styled.h1`
    display: none;
`;

const SectionTitle = styled.h2`
    font-family: "soleil", Helvetica, Arial, sans-serif;
    color: #000;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.3px;
    line-height: 36.8px;
    margin: 0;
    margin-top: 40px;
`;

const CompetitorImage = styled.img`
    max-height: 100px;
    width: auto;
    max-width: 200px;
    min-height: 50px;
`;

const PullQuoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
    hr {
        color: #000;
        width: 100%;
        border: 1px solid #000;
        height: 3px;
        background-color: #000;
    }
`;

const PullQuote = styled.span`
    font-size: 24px;
    font-weight: 600;
    font-style: italic;
    color: #000;
    font-family: "soleil", Helvetica, Arial, sans-serif;
    margin-top: 40px;
    letter-spacing: 1.5px;
`;

const HMWList = styled.ul`
    margin: 0;
    li {
        ${textCSS}
        :first-child {
            margin-bottom: 20px;
        }
    }
`;

const DemoImg = styled.img`
    width: 100%;
    height: auto;
`;

export default function JCrew() {
    return (
        <PageContainer>
            <NavbarWrapper>
                <Navbar />
            </NavbarWrapper>
            <PageContent>
                <HiddenH1>J.Crew</HiddenH1>
                <JCrewLogo src="https://www.jcrew.com/next-static/images/sidecar-modules/navigation/jcrew-logo-fall-21.svg" alt="J.Crew Logo" />
                <SectionTitle>BACKGROUND</SectionTitle>
                <TextBlock>{bgText}<span className='boldText'>Droplist</span>{bgText2}</TextBlock>
                <SectionTitle>RESEARCH</SectionTitle>
                <TextBlock>{researchText1}</TextBlock>
                <Competitors className='competitors'>
                    <a href="https://www.joinhoney.com/"><svg width="80" height="35" viewBox="0 0 80 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M70.7048 32.6272C69.8186 33.6634 68.0197 33.508 67.7243 31.9927C67.5832 31.2414 67.7885 30.3348 68.1097 29.7001C68.8292 28.3143 70.1268 27.1746 71.6045 26.799C71.6045 27.6538 71.6045 28.7806 71.5787 29.6484C71.5528 30.6069 71.3475 31.8631 70.7048 32.6272ZM56.4059 12.1507C57.2283 12.2024 57.8836 13.109 57.665 14.6502C57.3953 16.4765 55.8921 18.4321 54.1835 18.8724C53.9134 18.225 53.7852 16.9039 53.9392 15.6087C54.222 13.2384 55.4296 12.0987 56.4059 12.1507ZM24.3779 20.9836C23.1059 19.274 23.1572 17.2017 23.5557 15.2332C24.8018 18.0566 28.1293 18.5488 30.1848 18.1343C29.9151 20.3102 28.7842 22.214 26.8317 22.214C25.7397 22.227 24.9429 21.7478 24.3779 20.9836ZM28.8744 13.0053C29.5012 13.6504 29.9241 14.5909 30.1177 15.6349C30.1189 15.6347 30.1206 15.6475 30.1206 15.6475C30.1198 15.6432 30.1187 15.6392 30.1177 15.6349C28.6798 15.8415 27.2935 15.5694 26.2793 14.7797C25.547 14.1969 25.3542 13.2774 25.6626 12.7204C26.112 11.9175 27.4613 11.5677 28.8744 13.0053ZM9.29525 2.38496C10.1814 1.33595 11.9801 1.50417 12.2629 3.01964C12.404 3.7578 12.2114 4.66438 11.8904 5.29905C11.1707 6.68488 9.8731 7.82458 8.39561 8.21314C8.39561 7.34552 8.38273 6.23159 8.42156 5.36378C8.44713 4.40547 8.65282 3.13611 9.29525 2.38496ZM74.8805 24.8432C74.8932 20.3362 74.8805 15.8289 74.8805 11.3216C74.8805 10.2079 71.7071 10.143 71.6045 11.2699C71.6045 11.7232 71.6045 12.1894 71.5914 12.6427C71.5403 15.1165 70.3711 19.7402 68.4311 21.4239C67.9044 21.8774 67.4288 21.9032 67.0951 21.6571C66.7995 21.4369 66.7222 20.8801 66.7222 20.4009V19.7792C66.7222 16.9946 66.7353 14.1192 66.7222 11.3346C66.7222 10.2207 63.549 10.143 63.4462 11.2699C63.4462 13.8601 63.4462 16.3729 63.4593 18.9373C61.3649 22.3047 56.5216 23.8849 54.5174 19.8957C55.7637 20.3749 57.0868 20.1418 57.9862 19.6625C59.5408 18.8337 60.7226 17.4608 60.9539 15.2849C61.1723 8.91255 52.8218 8.04493 50.9587 14.5338C50.6505 15.6087 50.4835 16.7614 50.5221 17.8881C50.5603 18.9631 50.7789 19.9604 51.1515 20.8412C50.4704 21.5146 49.6869 21.9809 48.9033 21.9551C47.8753 21.9162 47.9783 20.634 47.9783 19.8957V15.0388C47.9783 14.456 47.9783 13.8731 47.9268 13.3034C47.7599 11.6067 46.4751 10.2596 44.6765 10.1429C42.1197 10.1042 40.3212 12.5003 39.4348 15.1295C39.4221 13.6659 39.4348 12.7981 39.4348 11.3216C39.4221 10.2207 36.48 10.143 36.1459 11.3086C35.722 12.7851 34.3343 13.9378 33.0368 14.6243C32.6386 13.653 32.1377 12.7594 31.4439 11.9952C28.5916 8.87379 24.4679 9.44374 22.0523 12.021C20.1381 14.0675 19.5602 17.7587 20.5879 20.3489C19.8299 21.2557 18.7894 21.9939 17.8643 21.9551C17.4016 21.9292 17.1448 21.6571 17.0291 21.2297C16.9134 20.8152 16.9393 20.3232 16.9393 19.8957C16.9393 18.2767 16.9263 16.6577 16.9393 15.0388C16.9393 14.456 16.9393 13.8731 16.888 13.3034C16.7208 11.6067 15.7315 10.2466 13.8559 10.1302C10.6313 9.98753 9.3337 13.1349 8.38273 15.7252V10.1949C9.06381 10.0782 9.71912 9.90981 10.3741 9.71563C17.4787 7.65637 16.1041 0.131325 10.8112 0.00187051C7.23953 -0.0758411 5.11961 2.29427 5.14556 5.89478V8.22613C3.86069 8.03195 2.89703 6.34826 2.35763 5.26029C2.28036 5.09189 2.20327 4.92348 2.12638 4.75507C2.06217 4.58666 1.88224 4.49616 1.715 4.5479C1.57391 4.58666 1.43262 4.6386 1.29113 4.69034C0.777493 4.92348 0.353239 5.32502 0.147936 5.85602C-0.224608 6.80154 0.147936 7.81179 0.802867 8.52399C1.88224 9.66389 3.60387 10.0782 5.11961 10.1559C5.10673 14.6502 5.11961 19.1315 5.11961 23.6258C5.17093 24.2605 6.03194 24.4289 6.53289 24.4417C7.0598 24.4547 8.203 24.2863 8.21607 23.5611L8.25451 23.0041C8.47289 21.0096 10.3741 13.0313 12.7766 13.0183C13.3677 13.0183 13.6633 13.4068 13.6633 13.9898V21.1003C13.6633 23.302 14.8965 24.7785 17.1319 24.7785C18.8664 24.7915 20.4335 23.5221 21.3714 21.9421C21.4998 22.1105 21.6027 22.2917 21.7439 22.4472C22.9644 23.8849 24.7631 24.8045 26.8188 24.8175C31.3023 24.7525 33.6019 20.8672 33.4352 17.0463C34.4758 16.4636 35.4137 15.7122 36.1328 14.7797V23.6258C36.1843 24.2605 37.0838 24.4289 37.5849 24.4417C38.1115 24.4547 39.255 24.2863 39.255 23.5611L39.3064 23.0041L39.4604 21.5276C39.6918 19.4683 41.2206 13.0313 43.8286 13.0183C44.4065 13.0183 44.7023 13.4068 44.7023 13.9898V21.1003C44.7023 23.302 45.9357 24.7785 48.1836 24.7785C49.7384 24.7915 51.1515 23.7683 52.1022 22.4214C53.3612 23.9884 55.2885 24.908 57.6006 24.908C60.3117 24.908 62.277 23.7035 63.5877 21.7607C63.8831 23.4316 64.7695 24.7525 66.9409 24.7785C69.1889 24.7915 70.8978 21.6313 71.6045 19.7273V24.8175C70.9361 24.9339 70.2812 25.1023 69.626 25.2965C62.5214 27.343 63.8831 34.8808 69.1762 34.9975C72.7605 35.0882 74.8674 32.7179 74.8547 29.1174C74.8547 28.5087 74.8418 27.369 74.8547 26.7731C76.1265 26.9674 77.1029 28.6641 77.6298 29.7521C77.7195 29.9205 77.7968 30.0887 77.861 30.2571C77.9381 30.4255 78.1049 30.5032 78.2849 30.4643C78.4262 30.4255 78.5675 30.3738 78.6959 30.3088C79.2228 30.0759 79.6468 29.6873 79.8523 29.1434C80.2249 28.1978 79.8523 27.2006 79.1841 26.4882C78.118 25.3355 76.3833 24.9339 74.8805 24.8432Z" fill="#F26C25"></path><path d="M22.447 5.0801C23.8635 5.0801 25.0643 4.0467 25.2849 2.64629C25.507 1.23461 24.4028 0.00321933 22.8398 0H20.3206C20.2241 0 20.1404 0.070825 20.1259 0.165795L19.0023 7.29339C18.9846 7.40445 19.0699 7.50425 19.1826 7.50425H20.5154C20.612 7.50425 20.6957 7.43343 20.7102 7.33846L21.0402 5.24589C21.0547 5.14931 21.1384 5.0801 21.2349 5.0801H22.447ZM23.5625 2.58351C23.4804 3.10504 23.0764 3.48975 22.3038 3.48975H21.317L21.6164 1.59196H22.5854C23.3838 1.59196 23.6446 2.06359 23.5625 2.58351Z" fill="#003087"></path><path d="M31.0587 2.2459H29.7935C29.6969 2.2459 29.6132 2.31672 29.5988 2.41169L29.5569 2.67407C29.5569 2.67407 28.575 1.60042 26.835 2.32477C25.837 2.74006 25.3589 3.59962 25.1545 4.22578C25.1545 4.22578 24.5074 6.13645 25.9706 7.18756C25.9706 7.18756 27.3275 8.19843 28.8535 7.12479L28.8277 7.29219C28.81 7.40326 28.8953 7.50306 29.008 7.50306H30.2732C30.3698 7.50306 30.4535 7.43223 30.468 7.33726L31.2374 2.45515C31.2567 2.34569 31.1714 2.2459 31.0587 2.2459ZM29.1996 4.94369C29.0885 5.6439 28.5154 6.15899 27.7782 6.15899C27.6334 6.15899 27.4998 6.13967 27.3806 6.10104C26.835 5.92559 26.5227 5.40084 26.6128 4.83263C26.7239 4.13242 27.2985 3.61733 28.0358 3.61733C28.1806 3.61733 28.3142 3.63664 28.4334 3.67528C28.9806 3.85073 29.2897 4.37548 29.1996 4.94369Z" fill="#003087"></path><path d="M40.6702 5.0801C42.0867 5.0801 43.2875 4.0467 43.508 2.64629C43.7301 1.23461 42.6259 0.00321933 41.0629 0H38.5438C38.4472 0 38.3635 0.070825 38.349 0.165795L37.2255 7.29339C37.2078 7.40445 37.2931 7.50425 37.4058 7.50425H38.7386C38.8352 7.50425 38.9189 7.43343 38.9333 7.33846L39.2633 5.24589C39.2778 5.14931 39.3615 5.0801 39.4581 5.0801H40.6702ZM41.7857 2.58351C41.7036 3.10504 41.2996 3.48975 40.5269 3.48975H39.5402L39.8396 1.59196H40.8086C41.607 1.59196 41.8678 2.06359 41.7857 2.58351Z" fill="#0070E0"></path><path d="M49.2819 2.24692H48.0167C47.9201 2.24692 47.8364 2.31774 47.8219 2.41271L47.7801 2.67509C47.7801 2.67509 46.7982 1.60144 45.0581 2.32579C44.0601 2.74108 43.5821 3.60064 43.3776 4.2268C43.3776 4.2268 42.7305 6.13747 44.1937 7.18858C44.1937 7.18858 45.5507 8.19945 47.0766 7.1258L47.0509 7.29321C47.0332 7.40428 47.1185 7.50408 47.2312 7.50408H48.4964C48.5929 7.50408 48.6766 7.43325 48.6911 7.33828L49.4605 2.45617C49.4799 2.34671 49.3946 2.24692 49.2819 2.24692ZM47.4227 4.94471C47.3116 5.64492 46.7386 6.16001 46.0014 6.16001C45.8565 6.16001 45.7229 6.14069 45.6038 6.10206C45.0581 5.92661 44.7458 5.40186 44.836 4.83364C44.9471 4.13344 45.5217 3.61835 46.2589 3.61835C46.4038 3.61835 46.5374 3.63766 46.6565 3.6763C47.2038 3.85175 47.5129 4.3765 47.4227 4.94471Z" fill="#0070E0"></path><path d="M35.7044 2.36834L34.1784 4.94381L33.4042 2.38766C33.3784 2.30396 33.3028 2.24762 33.2159 2.24762H31.8396C31.7398 2.24762 31.6674 2.34581 31.6995 2.44078L33.0871 6.74663L31.8331 8.77481C31.772 8.873 31.8428 9.00016 31.9587 9.00016H33.4412C33.5281 9.00016 33.607 8.95509 33.6521 8.88105L37.5265 2.47136C37.5861 2.37317 37.5153 2.24762 37.3994 2.24762H35.9169C35.8299 2.24762 35.7495 2.2943 35.7044 2.36834Z" fill="#003087"></path><path d="M50.7061 0.166844L49.5826 7.29444C49.5648 7.4055 49.6502 7.5053 49.7628 7.5053H51.0956C51.1922 7.5053 51.2759 7.43448 51.2904 7.33951L52.414 0.211915C52.4317 0.100848 52.3463 0.00104668 52.2337 0.00104668H50.9009C50.8027 -0.000562982 50.7206 0.0702645 50.7061 0.166844Z" fill="#0070E0"></path></svg></a>
                    <a href="https://keepa.com/"><svg version="1.1" id="keepa" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 281.1 80.8" enableBackground="new 0 0 281.1 80.8" xmlSpace="preserve"> <g> <g> <path className="svgKeepaShadow" fill="#CDCCCC" d="M116.7,60.4H109c0-0.3-1.3-2.3-4-6.1c-3.1-4.4-5.9-8.1-8.5-11c-3.5-3.9-6-5.9-7.7-5.9h-1.1 c0,5.5,0.1,13.1,0.4,23h-6.6c0.4-7.3,0.5-15.3,0.5-24c0-8.2-0.2-15.5-0.5-21.7h6.6c-0.2,6.2-0.4,12.6-0.4,19h0.8 c1.3,0,4.5-3,9.7-9c5.1-6,7.7-9.3,7.7-10h7.3c0,0.7-2.5,3.6-7.5,8.7c-5,5.1-8.7,8.5-11.2,10.3V34c2.7,1,7.2,5.7,13.5,14 C113.8,55.5,116.7,59.7,116.7,60.4z"></path> <path className="svgKeepaShadow" fill="#CDCCCC" d="M151,39.8c0,1,0,2.3-0.1,4.1l-24.2,0.4c0.2,3.4,1.6,6.3,4,8.6c2.4,2.3,5.6,3.5,9.6,3.5 c3.6,0,6.9-0.4,10-1.3l-0.6,5c-2.3,0.9-5.6,1.4-9.9,1.4c-6.1,0-10.7-1.7-13.9-5C122.6,53,121,49,121,44.2c0-5.1,1.5-9.5,4.4-13.2 c2.9-3.7,6.8-5.5,11.8-5.5c4.5,0,8,1.3,10.3,4S151,35.6,151,39.8z M145.1,39.8c0-6.6-2.8-9.9-8.3-9.9c-5.6,0-8.9,3.4-9.9,10.3 L145.1,39.8z"></path> <path className="svgKeepaShadow" fill="#CDCCCC" d="M187.9,39.8c0,1,0,2.3-0.1,4.1l-24.2,0.4c0.2,3.4,1.6,6.3,4,8.6c2.4,2.3,5.6,3.5,9.6,3.5 c3.6,0,6.9-0.4,10-1.3l-0.6,5c-2.3,0.9-5.6,1.4-9.9,1.4c-6.1,0-10.7-1.7-13.9-5c-3.2-3.3-4.8-7.4-4.8-12.2c0-5.1,1.5-9.5,4.4-13.2 s6.8-5.5,11.8-5.5c4.5,0,8,1.3,10.3,4S187.9,35.6,187.9,39.8z M182,39.8c0-6.6-2.8-9.9-8.3-9.9c-5.6,0-8.9,3.4-9.9,10.3L182,39.8z "></path> <path className="svgKeepaShadow" fill="#CDCCCC" d="M227.9,42.3c0,5.1-1.4,9.5-4.3,13.3c-2.9,3.8-6.9,5.7-12.1,5.7c-4.3,0-7.1-0.8-8.5-2.3h-0.4 c0,6.5,0.1,12.3,0.2,17.4h-6.6c0.5-6.2,0.8-13.9,0.8-23.1c0-11.3-0.6-20-1.8-26.2l6.2-0.9l0.5,3.5h0.4c2.3-2.6,6-4,11-4 c4.5,0,8,1.6,10.6,4.9S227.9,37.8,227.9,42.3z M221.7,43.2c0-3.5-0.9-6.4-2.7-8.9c-1.8-2.5-4.4-3.7-7.7-3.7 c-4.2,0-7.2,1.3-9.1,3.8c0.4,7.9,0.6,14.6,0.6,20.3c1.9,1.6,4.4,2.4,7.4,2.4c3.9,0,6.8-1.4,8.7-4.1 C220.7,50.3,221.7,47,221.7,43.2z"></path> <path className="svgKeepaShadow" fill="#CDCCCC" d="M262.4,60.4l-5.5,0.2c-0.3-1.1-0.4-2.2-0.4-3.3h-0.4c-2.9,2.6-6.8,3.9-11.8,3.9c-2.7,0-5-0.8-7-2.4 s-2.9-3.8-2.9-6.8c0-3.6,1.5-6.5,4.6-8.7c3-2.2,8.7-3.3,17-3.5c0.1-0.6,0.1-1.2,0.1-1.9c0-2.9-0.8-4.8-2.3-5.8 c-1.5-1-3.9-1.4-7-1.4c-3.7,0-7.3,0.5-10.9,1.4l0.6-4.9c3.5-1,7.6-1.5,12.1-1.5c4.2,0,7.4,0.9,9.7,2.6s3.4,4.7,3.4,8.8 c0,1.1-0.1,3.1-0.2,6c-0.1,2.9-0.2,4.8-0.2,5.8C261.5,53.3,261.8,57.1,262.4,60.4z M256.2,53.6c-0.1-3.6-0.2-6.8-0.2-9.6 c-4.4,0-7.8,0.3-10.1,1c-3.8,1.2-5.8,3.4-5.8,6.7c0,3.2,2.3,4.8,6.8,4.8C250.8,56.5,253.9,55.5,256.2,53.6z"></path> </g> <g> <g> <path className="svgKeepa" fill="#000000" d="M115.3,59h-7.7c0-0.3-1.3-2.3-4-6.1c-3.1-4.4-5.9-8.1-8.5-11c-3.5-3.9-6-5.9-7.7-5.9h-1.1 c0,5.5,0.1,13.1,0.4,23h-6.6c0.4-7.3,0.5-15.3,0.5-24c0-8.2-0.2-15.5-0.5-21.7h6.6c-0.2,6.2-0.4,12.6-0.4,19h0.8 c1.3,0,4.5-3,9.7-9c5.1-6,7.7-9.3,7.7-10h7.3c0,0.7-2.5,3.6-7.5,8.7c-5,5.1-8.7,8.5-11.2,10.3v0.4c2.7,1,7.2,5.7,13.5,14 C112.4,54.1,115.3,58.3,115.3,59z"></path> <path className="svgKeepa" fill="#000000" d="M149.5,38.4c0,1,0,2.3-0.1,4.1l-24.2,0.4c0.2,3.4,1.6,6.3,4,8.6c2.4,2.3,5.6,3.5,9.6,3.5 c3.6,0,6.9-0.4,10-1.3l-0.6,5c-2.3,0.9-5.6,1.4-9.9,1.4c-6.1,0-10.7-1.7-13.9-5c-3.2-3.3-4.8-7.4-4.8-12.2 c0-5.1,1.5-9.5,4.4-13.2s6.8-5.5,11.8-5.5c4.5,0,8,1.3,10.3,4S149.5,34.2,149.5,38.4z M143.7,38.4c0-6.6-2.8-9.9-8.3-9.9 c-5.6,0-8.9,3.4-9.9,10.3L143.7,38.4z"></path> <path className="svgKeepa" fill="#000000" d="M186.5,38.4c0,1,0,2.3-0.1,4.1l-24.2,0.4c0.2,3.4,1.6,6.3,4,8.6c2.4,2.3,5.6,3.5,9.6,3.5 c3.6,0,6.9-0.4,10-1.3l-0.6,5c-2.3,0.9-5.6,1.4-9.9,1.4c-6.1,0-10.7-1.7-13.9-5c-3.2-3.3-4.8-7.4-4.8-12.2 c0-5.1,1.5-9.5,4.4-13.2s6.8-5.5,11.8-5.5c4.5,0,8,1.3,10.3,4S186.5,34.2,186.5,38.4z M180.6,38.4c0-6.6-2.8-9.9-8.3-9.9 c-5.6,0-8.9,3.4-9.9,10.3L180.6,38.4z"></path> <path className="svgKeepa" fill="#000000" d="M226.5,40.9c0,5.1-1.4,9.5-4.3,13.3c-2.9,3.8-6.9,5.7-12.1,5.7c-4.3,0-7.1-0.8-8.5-2.3h-0.4 c0,6.5,0.1,12.3,0.2,17.4h-6.6c0.5-6.2,0.8-13.9,0.8-23.1c0-11.3-0.6-20-1.8-26.2l6.2-0.9l0.5,3.5h0.4c2.3-2.6,6-4,11-4 c4.5,0,8,1.6,10.6,4.9S226.5,36.4,226.5,40.9z M220.2,41.8c0-3.5-0.9-6.4-2.7-8.9c-1.8-2.5-4.4-3.7-7.7-3.7 c-4.2,0-7.2,1.3-9.1,3.8c0.4,7.9,0.6,14.6,0.6,20.3c1.9,1.6,4.4,2.4,7.4,2.4c3.9,0,6.8-1.4,8.7-4.1 C219.3,48.9,220.2,45.6,220.2,41.8z"></path> <path className="svgKeepa" fill="#000000" d="M261,59l-5.5,0.2c-0.3-1.1-0.4-2.2-0.4-3.3h-0.4c-2.9,2.6-6.8,3.9-11.8,3.9c-2.7,0-5-0.8-7-2.4 s-2.9-3.8-2.9-6.8c0-3.6,1.5-6.5,4.6-8.7c3-2.2,8.7-3.3,17-3.5c0.1-0.6,0.1-1.2,0.1-1.9c0-2.9-0.8-4.8-2.3-5.8 c-1.5-1-3.9-1.4-7-1.4c-3.7,0-7.3,0.5-10.9,1.4l0.6-4.9c3.5-1,7.6-1.5,12.1-1.5c4.2,0,7.4,0.9,9.7,2.6s3.4,4.7,3.4,8.8 c0,1.1-0.1,3.1-0.2,6c-0.1,2.9-0.2,4.8-0.2,5.8C260.1,51.9,260.4,55.7,261,59z M254.8,52.2c-0.1-3.6-0.2-6.8-0.2-9.6 c-4.4,0-7.8,0.3-10.1,1c-3.8,1.2-5.8,3.4-5.8,6.7c0,3.2,2.3,4.8,6.8,4.8C249.4,55.1,252.5,54.1,254.8,52.2z"></path> </g> </g> </g> <g> <g> <path className="svgKeepaShadow" fill="#CDCCCC" d="M46.4,45.8h-13v13H21.6v-13h-13V34h13V21h11.8v13h13V45.8z M22.2,34.6v10.6h10.4V34.6H22.2z"></path> </g> <g> <g> <path className="svgKeepa" fill="#000000" d="M45,44.4h-13v13H20.1v-13h-13V32.6h13v-13h11.8v13h13V44.4z M20.8,33.2v10.6h10.4V33.2H20.8z"></path> </g> </g> </g> </svg></a>
                    <a href="https://bananarepublic.gap.com/"><CompetitorImage src='https://bananarepublic.gap.com/Asset_Archive/BRWeb/content/0016/264/099/assets/BR_Logo_black.svg' alt="Banana Republic Logo" /></a>
                    <a href="https://camelcamelcamel.com/"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 1586.2 483"><path d="M20 177a45 45 0 0 1 5-9c3-4 3-8 7-12 4-5 4-10 7-14 7-10 19-16 27-24 11-11 9-21 15-33 7-13 18-23 26-36 7-12 12-25 22-36 36-36 66 12 85 36 11 15 23 32 40 42s37 9 52 21c11 10 20 22 31 30 12 9 25 11 35-1 12-13 3-26 8-40 3-8 10-10 12-18 4-16-1-23 11-37 8-7 15-16 26-16 12 0 19 10 30 14 13 6 33 2 35 21 0 0 21-3 23-2 5 3 9 12 11 18s4 23-9 22l-16 10c-20 13-36 31-44 53-9 23-24 58-41 77-12 13-30 28-48 32-26 5-43-39-67-21s-16 57-23 82-51 57-19 83c7 6 38 13 20 26-7 4-36-5-31 11 3 11 32 6 21 20-10 12-33 7-45 0s-18-13-16-20 12-15 15-25c4-14 5-28 5-42-1-21 0-42 1-63 1-13 8-43-3-53-10-11-34-1-46 2-19 5-42 10-61 1-6-3-7-8-15-8-9 1-16 11-19 17s-13 21-13 28v48c0 27 3 32 26 47 10 6 14 18 19 28-10 1-24 5-33 2-19-5-7-15-13-27-3-8-14-16-19-24l-19-34c-1 17-6 41 1 56 7 13 23 15 29 28 14 26-31 41-38 13-6 1-14 0-15-7 0 2 12-6 13-7 3-4 2-7 3-11 1-10-1-20-3-29-4-16-13-33-13-50v-67c0-21-17-30-10-51 6-16 10-35 18-51Z" style={{fill:"#ab3838"}} transform="translate(-1)"/><path d="M548 177a45 45 0 0 1 5-9c4-4 4-8 7-12 5-5 4-11 7-14 7-10 19-16 28-24 10-11 8-21 15-33 7-13 17-24 25-36 7-12 12-26 22-36 36-36 67 12 85 36 12 15 24 32 40 42s37 9 52 21c11 9 20 22 32 30 11 8 24 11 34-1 12-13 3-26 9-40 2-8 10-10 11-18 4-16-1-23 12-37 7-7 14-16 25-16 12 0 19 9 30 14 13 6 33 2 35 21 0 0 21-3 23-2 5 3 9 12 11 17 3 7 4 24-9 22l-16 11c-19 13-35 31-44 53-8 23-24 58-41 76-12 14-29 29-48 32-25 6-43-38-67-20s-15 56-22 81c-7 26-52 58-19 84 7 6 38 13 19 26-7 4-36-6-31 11 4 10 33 6 22 19-10 13-34 8-45 1-12-7-19-13-17-20s12-15 15-25c4-14 5-28 5-42 0-21 0-42 2-63 1-13 8-43-3-53-11-11-35-1-46 2-19 5-43 9-62 1-6-3-7-8-15-8-9 1-15 10-19 17s-13 20-13 28v48c0 27 3 32 26 46 10 7 14 19 19 29-10 1-23 4-33 2-19-6-7-15-13-28-3-7-14-16-18-23l-20-34c-1 17-6 40 2 56 6 13 22 15 29 28 14 25-31 41-39 13-6 1-14 0-14-7 0 2 12-6 12-7 3-4 3-7 3-11 2-10-1-20-3-29-3-16-13-34-13-50v-67c0-21-17-30-9-51 5-16 10-35 17-51Z" data-name="Large" style={{fill:"#de8d3d"}} transform="translate(-1)"/><path d="M1077 177a45 45 0 0 1 5-9c4-4 4-8 7-12 5-5 4-11 7-14 7-10 19-16 28-24 10-11 8-21 15-33 7-13 17-24 25-36s12-26 22-36c36-36 67 12 85 36 12 15 24 32 40 42s38 9 52 21c11 9 20 22 32 30 11 8 24 11 34-1 12-13 3-26 9-40 2-8 10-10 11-18 4-16-1-23 12-37 7-7 14-16 25-16 12 0 19 9 30 14 13 6 33 2 35 21 0 0 21-3 23-2 5 3 9 12 11 17 3 7 4 24-9 22l-16 11c-19 13-35 31-44 53-8 23-24 58-41 76-12 14-29 29-48 32-25 6-43-38-67-20s-16 56-22 81c-7 26-52 58-19 84 7 6 37 13 19 26-7 4-36-6-31 11 4 10 33 6 21 19-10 13-33 8-44 1-12-7-19-13-17-20s12-15 15-25c4-14 5-28 5-42 0-21 0-42 2-63 1-13 7-43-3-53-11-11-35-1-47 2-19 5-42 9-61 1-6-3-7-8-15-8-9 1-15 10-19 17s-13 20-13 28v48c0 27 3 32 26 46 10 7 14 19 19 29-10 1-23 4-33 2-19-6-7-15-13-28-3-7-14-16-18-23l-20-34c-1 17-6 40 2 56 6 13 22 15 28 28 15 25-30 41-38 13-6 1-14 0-15-7 1 2 13-6 13-7 3-4 3-7 3-11 1-10-1-20-3-29-3-16-13-34-13-50v-67c0-21-17-30-9-51 5-16 10-35 17-51Z" data-name="Large" style={{fill:"#a19b86"}} transform="translate(-1)"/></svg></a>
                </Competitors>
                <TextBlock>{researchText2}</TextBlock>
                <img src={affinityMapSrc} alt='J.Crew Affinity Map' />
                <TextBlock>{personaText}</TextBlock>
                <PersonaImage src={personaImageSrc} />
                <TextBlock>{goalText}</TextBlock>
                <img src={projectGoalsSrc} alt='J.Crew Project Goals' />
                <TextBlock>{problemStatmentText}</TextBlock>
                <PullQuoteContainer>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011C3 9.511 5.457 6.374 9.03 4.823L9.923 6.201C6.588 8.005 5.936 10.346 5.676 11.822C6.213 11.544 6.916 11.447 7.605 11.511C9.409 11.678 10.831 13.159 10.831 15C10.831 15.9283 10.4623 16.8185 9.80587 17.4749C9.1495 18.1312 8.25926 18.5 7.331 18.5C6.81766 18.4955 6.31034 18.389 5.83856 18.1866C5.36679 17.9841 4.93999 17.6899 4.583 17.321ZM14.583 17.321C13.553 16.227 13 15 13 13.011C13 9.511 15.457 6.374 19.03 4.823L19.923 6.201C16.588 8.005 15.936 10.346 15.676 11.822C16.213 11.544 16.916 11.447 17.605 11.511C19.409 11.678 20.831 13.159 20.831 15C20.831 15.9283 20.4623 16.8185 19.8059 17.4749C19.1495 18.1312 18.2593 18.5 17.331 18.5C16.8177 18.4955 16.3103 18.389 15.8386 18.1866C15.3668 17.9841 14.94 17.6899 14.583 17.321Z" fill="black"/>
                    </svg>
                    <hr />
                    <PullQuote>HOW MIGHT WE HELP CLOTHES SHOPPERS WHO CAN'T AFFORD J.CREW CLOTHES THEY LIKE TO BE ABLE TO BUY THOSE CLOTHES?&rdquo;</PullQuote>
                </PullQuoteContainer>
                <HMWList>
                    <li>{HMW2}</li>
                    <li>{HMW3}</li>
                </HMWList>
                <TextBlock>{featureSetText}</TextBlock>
                <FeatureSet headerColor='#ffffff' headerBgColor='#000000' caseStudyType={CaseStudyType.JCrew} />
                <TextBlock>{userFlowText}</TextBlock>
                <img src={userFlowSrc} alt='J.Crew User Flow' />
                <SectionTitle>LOW-FIDELITY WIREFRAMES</SectionTitle>
                <TextBlock>{lofiText}</TextBlock>
                <LofiWireframes />
                <SectionTitle>HIGH-FIDELITY WIREFRAMES</SectionTitle>
                <TextBlock>{hifiText1}</TextBlock>
                <HifiWireframes />
                <SectionTitle>HIGH-FIDELITY PROTOTYPE</SectionTitle>
                <TextBlock>{hifiText2}</TextBlock>
                <a href='https://www.figma.com/proto/9Vcjtjj8PH2BY5uC6JwZ6t/J.CrewWireframes?page-id=11%3A19&type=design&node-id=120-1115&viewport=1319%2C485%2C0.18&t=MiiMZq2Ekn4a15Tw-1&scaling=scale-down&starting-point-node-id=120%3A1115&mode=design'>
                    <DemoImg src={demoSrc} alt="J.Crew Droplist Demo" />
                </a>
                <SectionTitle>CONCLUSION</SectionTitle>
                <TextBlock>{conclusionText}</TextBlock>
            </PageContent>
        </PageContainer>
    );
}