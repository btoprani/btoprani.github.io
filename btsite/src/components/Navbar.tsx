// Import React and styled-components at the top
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MenuTitleStyle, themeColors } from './SharedStyles';
import { Link } from 'react-router-dom';
import { Logos } from './Logo';
import { Squash as Hamburger } from 'hamburger-react';
import { useOutsideClick } from './OutsideClick';

// Styled component for the top bar
const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 10px 4px;
    position: sticky;
    & > a {
        z-index: 5;
    }
`;

// Styled component for the links section of the page.
const LinksUl = styled.ul`
    display: flex;
    height: 74px;
    flex-direction: row;
    gap: 32px;
    padding: 16px;
    align-items: center;
    list-style-type: none;
    margin-right: 20px;
    @media(max-width: 530px) {
        display: none;
    }
`;

const MobileLinksDiv = styled.div`
    display: none;
    box-sizing: border-box;
    z-index: 0;
    .hamburger-react {
        z-index: 5;
        div {
            color: ${themeColors.neutralLight};
            border-radius: 2px;
        }
    } 
    @media(max-width: 530px) {
        display: flex;
    }
`;

const MobileMenu = styled.div<{$isOpen: boolean}>`
    background-color: ${themeColors.neutralDark};
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    padding-top: 100px;
    z-index: 0;
    transition: all 0.5s ease-in-out;
    top: ${props => props.$isOpen ? '0' : '-340px'};
`;

const MobileUl = styled.ul`
    ${MenuTitleStyle}
    display: flex;
    flex-direction: column;
    margin: 24px 0;
    list-style-type: none;
`;

// Styled component for the links in the navigation bar.
const LinkLi = styled.li`
    * {
        ${MenuTitleStyle}
        text-decoration: none;
    }
    div {
        position: absolute;
        background: ${themeColors.neutralLight};
        padding: 8px;
        border-radius: 0 0 4px 4px;
        border-color: ${themeColors.neutralDark};
        border-width: 2px;
        border-style: none solid solid;
        a {
            color: ${themeColors.neutralDark};
        }
    }
`;

const MobileLinkLi = styled.li`
    * {
        ${MenuTitleStyle}
        text-decoration: none;
    }
`;

const openCaratCSS = css`
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(1, -1);
    top: -5px;
`;

const DropdownButton = styled.button<{$open?: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
        background: none;
    }
    &::after {
        content: '▾';
        display: inline-block;
        margin-left: 8px;
        position: relative;
        top: 5px;
        ${props => (props.$open && openCaratCSS)}
    }
`;

const Submenu = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 530px) {
        margin: 16px;
    }
`;

export interface NavbarProps {
    altLogo: boolean;
}

// The persistant menu bar at the top of the page for everything
const Navbar = (props: NavbarProps) => {
    return (
        <NavBar>
            <Link to="/">
                <Logos {...props} />
            </Link>
            <DesktopLinks />
        </NavBar>
    );
};

const DesktopLinks = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return <>
        <LinksUl>
            <LinkLi>
                <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)} $open={dropdownOpen}>Case Studies</DropdownButton>
                {dropdownOpen &&
                    <Submenu>
                        <Link to='/cisco'>Cisco</Link>
                        <Link to='/amigurumate'>Amigurumate</Link>
                        <Link to='/jcrew'>J.Crew</Link>
                    </Submenu>}
            </LinkLi>
            <LinkLi>
                <Link to='/about'>
                    About
                </Link>
            </LinkLi>
        </LinksUl>
        <MobileLinks />
    </>
}

const MobileLinks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(() => {
        setIsOpen(false);
    })

    return (
        <MobileLinksDiv ref={ref}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
            <MobileMenu $isOpen={isOpen}>
                <MobileUl>
                    <MobileLinkLi>
                        Case Studies
                        <Submenu>
                            <Link to='/amigurumate'>Amigurumate</Link>
                            <Link to='/jcrew'>J.Crew</Link>
                            <Link to='/zyno'>Zyno</Link>
                        </Submenu>
                        <Link to='/about'>
                            About
                        </Link>
                    </MobileLinkLi>
                </MobileUl>
            </MobileMenu>
        </MobileLinksDiv>
    );
}

export default Navbar;