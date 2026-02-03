import React from "react";
import { styled } from "styled-components";
import { OpenLightboxProps } from "./SharedStyles";

const lofiHomeSrc = require("../assets/Cisco/LofiHome.jpg");
const lofiServerSrc = require("../assets/Cisco/ServerPage.jpg");
const lofiFirmwareUpgrade1Src = require("../assets/Cisco/LofiFirmwareUpgrade1.jpg");
const lofiFirmwareUpgrade2Src = require("../assets/Cisco/LofiFirmwareUpgrade2.jpg");
const lofiFirmwareUpgrade3Src = require("../assets/Cisco/LofiFirmwareUpgrade3.jpg");
const midFiHomeSrc = require("../assets/Cisco/MidfiLandingPage.jpg");
const midFiServerProfileSrc = require("../assets/Cisco/ServerProfilePage.jpg");
const midFiFavoritesSrc = require("../assets/Cisco/FavoritesMenu.jpg");
const midFiRecentsSrc = require("../assets/Cisco/RecentsMenu.jpg");
const newUserFlow1Src = require("../assets/Cisco/NewUserFlow1.jpg");
const newUserFlow2Src = require("../assets/Cisco/NewUserFlow2.jpg");
const newUserFlow3Src = require("../assets/Cisco/NewUserFlow3.jpg");
const newUserFlow4Src = require("../assets/Cisco/NewUserFlow4.jpg");
const newUserFlow5Src = require("../assets/Cisco/NewUserFlow5.jpg");
const midFiHome2Src = require("../assets/Cisco/MidfiLandingPageNoAlarms.jpg");
const aiFlow1Src = require("../assets/Cisco/AIFlow1.jpg");
const aiFlow2Src = require("../assets/Cisco/AIFlow2.jpg");
const aiFlow3Src = require("../assets/Cisco/AIFlow3.jpg");
const customize1Src = require("../assets/Cisco/Customize1.jpg");
const customize2Src = require("../assets/Cisco/Customize2.jpg");
const expandable1Src = require("../assets/Cisco/Expandable1.jpg");
const expandable2Src = require("../assets/Cisco/Expandable2.jpg");

const DesktopWireframes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px 0;
`;

const DesktopWireframe = styled.img`
    width: calc(50% - 20px);
    height: fit-content;
    outline: 1px solid #000000;
    @media(max-width: 1200px) {
        width: calc(100% - 32px);
    }
`;

const ThinDesktopWireframe = styled.img`
    width: calc(33% - 20px);
    height: fit-content;
    outline: 1px solid #000000;
    @media(max-width: 1200px) {
        width: calc(100% - 32px);
    }
`;

export const LofiWireframes = (props: OpenLightboxProps) => {
    return <DesktopWireframes>
        <DesktopWireframe src={lofiHomeSrc} alt='Cisco Low-Fidelity Home Page' onClick={() => props.openLightbox(lofiHomeSrc, 'Cisco Low-Fidelity Home Page')} />
        <DesktopWireframe src={lofiServerSrc} alt='Cisco Low-Fidelity Server Page' onClick={() => props.openLightbox(lofiServerSrc, 'Cisco Low-Fidelity Server Page')} />
        <DesktopWireframe src={lofiFirmwareUpgrade1Src} alt='Cisco Low-Fidelity Firmware Upgrade 1' onClick={() => props.openLightbox(lofiFirmwareUpgrade1Src, 'Cisco Low-Fidelity Firmware Upgrade 1')} />
        <DesktopWireframe src={lofiFirmwareUpgrade2Src} alt='Cisco Low-Fidelity Firmware Upgrade 2' onClick={() => props.openLightbox(lofiFirmwareUpgrade2Src, 'Cisco Low-Fidelity Firmware Upgrade 2')} />
        <DesktopWireframe src={lofiFirmwareUpgrade3Src} alt='Cisco Low-Fidelity Firmware Upgrade 3' onClick={() => props.openLightbox(lofiFirmwareUpgrade3Src, 'Cisco Low-Fidelity Firmware Upgrade 3')} />
    </DesktopWireframes>
}

export const MidStageWireframes = (props: OpenLightboxProps) => {
    return <DesktopWireframes>
        <DesktopWireframe src={midFiHomeSrc} alt='Cisco Mid-Fidelity Home Page' onClick={() => props.openLightbox(midFiHomeSrc, 'Cisco Mid-Fidelity Home Page')} />
        <DesktopWireframe src={midFiServerProfileSrc} alt='Cisco Mid-Fidelity Server Profile Page' onClick={() => props.openLightbox(midFiServerProfileSrc, 'Cisco Mid-Fidelity Server Profile Page')} />
        <ThinDesktopWireframe src={midFiFavoritesSrc} alt='Cisco Mid-Fidelity Favorites Menu' onClick={() => props.openLightbox(midFiFavoritesSrc, 'Cisco Mid-Fidelity Favorites Menu')} />
        <ThinDesktopWireframe src={midFiRecentsSrc} alt='Cisco Mid-Fidelity Recents Menu' onClick={() => props.openLightbox(midFiRecentsSrc, 'Cisco Mid-Fidelity Recents Menu')} />
        <DesktopWireframe src={newUserFlow1Src} alt='Cisco Mid-Fidelity New User Flow 1' onClick={() => props.openLightbox(newUserFlow1Src, 'Cisco Mid-Fidelity New User Flow 1')} />
        <DesktopWireframe src={newUserFlow2Src} alt='Cisco Mid-Fidelity New User Flow 2' onClick={() => props.openLightbox(newUserFlow2Src, 'Cisco Mid-Fidelity New User Flow 2')} />
        <DesktopWireframe src={newUserFlow3Src} alt='Cisco Mid-Fidelity New User Flow 3' onClick={() => props.openLightbox(newUserFlow3Src, 'Cisco Mid-Fidelity New User Flow 3')} />
        <DesktopWireframe src={newUserFlow4Src} alt='Cisco Mid-Fidelity New User Flow 4' onClick={() => props.openLightbox(newUserFlow4Src, 'Cisco Mid-Fidelity New User Flow 4')} />
        <DesktopWireframe src={newUserFlow5Src} alt='Cisco Mid-Fidelity New User Flow 5' onClick={() => props.openLightbox(newUserFlow5Src, 'Cisco Mid-Fidelity New User Flow 5')} />
        <br />
        <DesktopWireframe src={midFiHome2Src} alt='Cisco Mid-Fidelity Home Page No Alarms' onClick={() => props.openLightbox(midFiHome2Src, 'Cisco Mid-Fidelity Home Page No Alarms')} />
        <br />
        <ThinDesktopWireframe src={aiFlow1Src} alt='Cisco Mid-Fidelity AI Flow 1' onClick={() => props.openLightbox(aiFlow1Src, 'Cisco Mid-Fidelity AI Flow 1')} />
        <ThinDesktopWireframe src={aiFlow2Src} alt='Cisco Mid-Fidelity AI Flow 2' onClick={() => props.openLightbox(aiFlow2Src, 'Cisco Mid-Fidelity AI Flow 2')} />
        <ThinDesktopWireframe src={aiFlow3Src} alt='Cisco Mid-Fidelity AI Flow 3' onClick={() => props.openLightbox(aiFlow3Src, 'Cisco Mid-Fidelity AI Flow 3')} />
    </DesktopWireframes>
}

export const FinalIterationWireframes = (props: OpenLightboxProps) => {
    return <DesktopWireframes>
        <DesktopWireframe src={customize1Src} alt='Cisco Final Iteration Customize 1' onClick={() => props.openLightbox(customize1Src, 'Cisco Final Iteration Customize 1')} />
        <DesktopWireframe src={customize2Src} alt='Cisco Final Iteration Customize 2' onClick={() => props.openLightbox(customize2Src, 'Cisco Final Iteration Customize 2')} />
        <DesktopWireframe src={expandable1Src} alt='Cisco Final Iteration Expandable 1' onClick={() => props.openLightbox(expandable1Src, 'Cisco Final Iteration Expandable 1')} />
        <DesktopWireframe src={expandable2Src} alt='Cisco Final Iteration Expandable 2' onClick={() => props.openLightbox(expandable2Src, 'Cisco Final Iteration Expandable 2')} />
    </DesktopWireframes>
}