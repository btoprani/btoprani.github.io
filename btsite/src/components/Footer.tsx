import React from "react";
import styled from "styled-components";
import { BodyText, mobileBreakpoint1, themeColors } from "./SharedStyles";

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 24px calc((100vw - 20px) / 6 + 20px);
    gap: 80px;
    align-items: center;
    justify-content: center;
    background-color: ${themeColors.neutralDark};
    @media (max-width: 1300px) {
        flex-direction: column;
        gap: 20px;
    }
    @media(max-width: ${mobileBreakpoint1}) {
        padding: 24px 16px;
    }
`;

const ContactItem = styled.a`
    display: flex;
    flex-direction: row;
    color: ${themeColors.neutralLight};
    font-family: 'IBM Plex Sans', sans-serif;
    gap: 20px;
    align-items: center;
    text-decoration: none;
    width: fit-content;
    span {
        white-space: nowrap;
    }
`;

const FullLink = styled(BodyText)`
    display: initial;
    @media(max-width: 500px) {
        display: none;
    }
`;

const ShortenedLink = styled(BodyText)`
    display: none;
    @media(max-width: 500px) {
        display: initial;
    }
`;

export const Footer = () => {
    return <FooterContainer>
        <ContactItem href='https://www.linkedin.com/in/btoprani/'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_64_217)">
                    <path d="M0 2.865C0 1.2825 1.315 0 2.9375 0H37.0625C38.685 0 40 1.2825 40 2.865V37.135C40 38.7175 38.685 40 37.0625 40H2.9375C1.315 40 0 38.7175 0 37.135V2.865ZM12.3575 33.485V15.4225H6.355V33.485H12.3575ZM9.3575 12.955C11.45 12.955 12.7525 11.57 12.7525 9.835C12.715 8.0625 11.4525 6.715 9.3975 6.715C7.3425 6.715 6 8.065 6 9.835C6 11.57 7.3025 12.955 9.3175 12.955H9.3575ZM21.6275 33.485V23.3975C21.6275 22.8575 21.6675 22.3175 21.8275 21.9325C22.26 20.855 23.2475 19.7375 24.9075 19.7375C27.08 19.7375 27.9475 21.3925 27.9475 23.8225V33.485H33.95V23.125C33.95 17.575 30.99 14.995 27.04 14.995C23.855 14.995 22.4275 16.745 21.6275 17.9775V18.04H21.5875C21.6008 18.0191 21.6141 17.9983 21.6275 17.9775V15.4225H15.6275C15.7025 17.1175 15.6275 33.485 15.6275 33.485H21.6275Z" fill="#2867B2" />
                    <path d="M9.3575 12.955C11.45 12.955 12.7525 11.57 12.7525 9.835C12.715 8.0625 11.4525 6.715 9.3975 6.715C7.3425 6.715 6 8.065 6 9.835C6 11.57 7.3025 12.955 9.3175 12.955H9.3575Z" fill="#FCF7F8" />
                    <path d="M12.3575 33.485V15.4225H6.355V33.485H12.3575Z" fill="#FCF7F8" />
                    <path d="M21.6275 33.485V23.3975C21.6275 22.8575 21.6675 22.3175 21.8275 21.9325C22.26 20.855 23.2475 19.7375 24.9075 19.7375C27.08 19.7375 27.9475 21.3925 27.9475 23.8225V33.485H33.95V23.125C33.95 17.575 30.99 14.995 27.04 14.995C23.855 14.995 22.4275 16.745 21.6275 17.9775V18.04H21.5875L21.6275 17.9775V15.4225H15.6275C15.7025 17.1175 15.6275 33.485 15.6275 33.485H21.6275Z" fill="#FCF7F8" />
                </g>
                <defs>
                    <clipPath id="clip0_64_217">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <FullLink>
                https://www.linkedin.com/in/btoprani/
            </FullLink>
            <ShortenedLink>linkedin.com/in/btoprani</ShortenedLink>
        </ContactItem>
        <ContactItem href='mailto:bhaven@toprani.quest'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36 13.125L20 23.2812L4 13.125V9.0625L20 19.2188L36 9.0625M36 5H4C1.78 5 0 6.80781 0 9.0625V33.4375C0 34.5149 0.421427 35.5483 1.17157 36.3101C1.92172 37.072 2.93913 37.5 4 37.5H36C37.0609 37.5 38.0783 37.072 38.8284 36.3101C39.5786 35.5483 40 34.5149 40 33.4375V9.0625C40 6.80781 38.2 5 36 5Z" fill="#FCF7F8" />
            </svg>
            <BodyText>
                bhaven@toprani.quest
            </BodyText>
        </ContactItem>
        <ContactItem href='https://github.com/btoprani'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33337C17.8113 3.33337 15.6441 3.76447 13.622 4.60205C11.5999 5.43963 9.76257 6.66728 8.21493 8.21493C5.08932 11.3405 3.33337 15.5798 3.33337 20C3.33337 27.3667 8.11671 33.6167 14.7334 35.8334C15.5667 35.9667 15.8334 35.45 15.8334 35V32.1834C11.2167 33.1834 10.2334 29.95 10.2334 29.95C9.46671 28.0167 8.38337 27.5 8.38337 27.5C6.86671 26.4667 8.50004 26.5 8.50004 26.5C10.1667 26.6167 11.05 28.2167 11.05 28.2167C12.5 30.75 14.95 30 15.9 29.6C16.05 28.5167 16.4834 27.7834 16.95 27.3667C13.25 26.95 9.36671 25.5167 9.36671 19.1667C9.36671 17.3167 10 15.8334 11.0834 14.65C10.9167 14.2334 10.3334 12.5 11.25 10.25C11.25 10.25 12.65 9.80004 15.8334 11.95C17.15 11.5834 18.5834 11.4 20 11.4C21.4167 11.4 22.85 11.5834 24.1667 11.95C27.35 9.80004 28.75 10.25 28.75 10.25C29.6667 12.5 29.0834 14.2334 28.9167 14.65C30 15.8334 30.6334 17.3167 30.6334 19.1667C30.6334 25.5334 26.7334 26.9334 23.0167 27.35C23.6167 27.8667 24.1667 28.8834 24.1667 30.4334V35C24.1667 35.45 24.4334 35.9834 25.2834 35.8334C31.9 33.6 36.6667 27.3667 36.6667 20C36.6667 17.8113 36.2356 15.6441 35.398 13.622C34.5605 11.5999 33.3328 9.76257 31.7852 8.21493C30.2375 6.66728 28.4002 5.43963 26.3781 4.60205C24.356 3.76447 22.1887 3.33337 20 3.33337Z" fill="#FCF7F8" />
            </svg>
            <BodyText>
                https://github.com/btoprani
            </BodyText>
        </ContactItem>
    </FooterContainer>
}