// Import React and styled-components at the top
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MenuTitleStyle, themeColors } from './SharedStyles';
import { Link } from 'react-router-dom';

// Styled component for the top bar
const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 10px 4px;
    position: sticky;
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

const openCaratCSS = css`
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(1, -1);
    top: -5px;
`;

const DropdownButton = styled.button<{open?: boolean}>`
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
        ${props => (props.open && openCaratCSS)}
    }
`;

const Submenu = styled.div`
    display: flex;
    flex-direction: column;

`;

// The persistant menu bar at the top of the page for everything
const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <NavBar>
            <Link to="/">
                <svg width="364" height="80" viewBox="0 0 364 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 18.5L21.348 29.25V50.75L40 61.5L58.652 50.75V29.25L40 18.5Z" fill="#4C212A" stroke="#FCF7F8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M40 18.5L27.688 31.547L21.348 50.75L40 53.414L58.652 50.75L52.312 31.547L40 18.5Z" stroke="#FCF7F8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M40 53.414L27.688 31.547M40 53.414L52.312 31.547M40 53.414V61.5M27.688 31.547H52.312M27.688 31.547L21.348 29.25M52.312 31.547L58.652 29.25" stroke="#FCF7F8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37.1022 41.0106C37.0671 41.0301 37.03 41.0497 36.9909 41.0692C36.9557 41.0848 36.9245 41.0985 36.8971 41.1102C36.8737 41.1219 36.8542 41.1278 36.8385 41.1278C36.7526 41.1278 36.7096 41.0829 36.7096 40.993C36.7096 40.9462 36.7311 40.909 36.7741 40.8817C37.3913 40.5419 38.0163 40.1298 38.6491 39.6454C39.2858 39.161 39.6022 38.5008 39.5983 37.6649C39.5944 37.1415 39.4186 36.6024 39.071 36.0477C38.7233 35.493 38.196 35.2157 37.4889 35.2157C37.0085 35.2157 36.5632 35.3856 36.153 35.7255C35.7428 36.0614 35.5378 36.4383 35.5378 36.8563C35.5378 37.2899 35.6628 37.6688 35.9128 37.993C36.1628 38.3173 36.5632 38.5204 37.1139 38.6024C37.5553 38.6141 37.9108 38.5223 38.1803 38.327C38.2155 38.2997 38.2565 38.2587 38.3034 38.204C38.3542 38.1454 38.403 38.1161 38.4499 38.1161C38.5085 38.1161 38.5456 38.1415 38.5612 38.1923C38.5768 38.243 38.5671 38.286 38.5319 38.3212C38.4421 38.4188 38.3151 38.5184 38.151 38.62C37.8932 38.784 37.5983 38.8661 37.2663 38.8661C36.3796 38.8778 35.7663 38.661 35.4264 38.2157C35.0866 37.7665 34.9499 37.1903 35.0163 36.4872C35.0827 35.784 35.403 35.1864 35.9772 34.6942C36.5553 34.202 37.2214 33.9715 37.9753 34.0028C38.6198 34.0301 39.1354 34.1688 39.5221 34.4188C39.9089 34.6688 40.2038 34.9833 40.4069 35.3622C40.4264 35.4051 40.4577 35.4227 40.5007 35.4149C40.5475 35.4149 40.5749 35.3915 40.5827 35.3446C40.6921 34.9501 40.8971 34.6317 41.1979 34.3895C41.5026 34.1473 41.8893 34.0262 42.3581 34.0262C42.8073 34.0262 43.1999 34.1708 43.5358 34.4598C43.8718 34.745 44.1159 35.2098 44.2682 35.8544C44.3815 36.2801 44.5397 36.4891 44.7428 36.4813C44.8249 36.4813 44.8718 36.5145 44.8835 36.5809C44.8991 36.6434 44.8678 36.6942 44.7897 36.7333L43.4655 37.3485C43.4225 37.3719 43.405 37.4051 43.4128 37.4481C43.4167 37.4911 43.4421 37.5184 43.4889 37.5301C43.9538 37.6356 44.362 37.8895 44.7135 38.2919C45.069 38.6903 45.2468 39.1766 45.2468 39.7508C45.2311 40.6532 44.6374 41.4501 43.4655 42.1415C42.821 42.5165 42.1999 42.7372 41.6022 42.8036C41.0046 42.87 40.4421 42.8114 39.9147 42.6278C39.3132 42.4169 38.7975 42.0633 38.3678 41.5673C37.9421 41.0673 37.5202 40.8817 37.1022 41.0106ZM40.9811 38.245L43.2663 37.1669C43.3014 37.1395 43.319 37.1122 43.319 37.0848C43.319 37.0458 43.3034 37.0165 43.2721 36.9969C43.0065 36.8407 42.8073 36.5028 42.6745 35.9833C42.569 35.6005 42.4362 35.2899 42.276 35.0516C42.1159 34.8133 41.8815 34.7098 41.5729 34.7411C41.1589 34.8348 40.9147 35.0575 40.8405 35.409C40.7702 35.7606 40.7604 36.161 40.8112 36.6102C40.8971 37.3329 40.694 37.9872 40.2018 38.5731C39.7096 39.1551 39.1882 39.6493 38.6374 40.0555C38.9889 40.0516 39.3542 40.2313 39.7331 40.5946C39.9987 40.8563 40.2741 41.0985 40.5593 41.3212C40.8483 41.5438 41.153 41.7294 41.4733 41.8778C41.8757 42.0692 42.278 42.1434 42.6803 42.1005C43.0827 42.0536 43.4284 41.8426 43.7175 41.4676C43.9284 41.1942 44.0358 40.8758 44.0397 40.5126C44.0475 40.1454 43.9108 39.7762 43.6296 39.4051C43.3522 39.034 43.0046 38.7801 42.5866 38.6434C42.1725 38.5067 41.655 38.4579 41.0339 38.4969C40.9479 38.5008 40.8971 38.4696 40.8815 38.4032C40.8698 38.3329 40.903 38.2801 40.9811 38.245Z" fill="#FCF7F8" />
                    <path d="M77.84 26.12L83.44 25.88C85.92 25.88 87.9333 26.4667 89.48 27.64C91.0533 28.8133 91.84 30.4267 91.84 32.48C91.84 35.52 89.88 37.64 85.96 38.84C88.1467 38.84 89.9733 39.52 91.44 40.88C92.9333 42.24 93.68 43.9867 93.68 46.12C93.68 51.3733 90.2667 54 83.44 54L78.6 53.76L73.8 54C73.72 53.92 73.68 53.6933 73.68 53.32C73.68 52.92 73.76 52.64 73.92 52.48C74.88 52.48 75.56 52.32 75.96 52C76.3867 51.6533 76.6 51.12 76.6 50.4L76.8 29.44C76.8 28.72 76.6 28.2 76.2 27.88C75.8 27.56 75.1067 27.4 74.12 27.4C73.96 27.2667 73.88 27 73.88 26.6C73.88 26.1733 73.9067 25.9333 73.96 25.88L77.84 26.12ZM81.52 38.44C83.6 38.44 85.28 37.9733 86.56 37.04C87.8667 36.08 88.52 34.7467 88.52 33.04C88.52 29.6267 86.3333 27.92 81.96 27.92C81.1067 27.92 80.2 28 79.24 28.16L79.72 38.44H81.52ZM83.56 51.76C85.5067 51.76 87.08 51.28 88.28 50.32C89.48 49.36 90.08 47.9733 90.08 46.16C90.08 44.3467 89.3467 42.9733 87.88 42.04C86.4133 41.08 84.6267 40.6 82.52 40.6C81.6933 40.6 80.8 40.68 79.84 40.84L80.2 48.76C80.2533 49.9333 80.52 50.7333 81 51.16C81.48 51.56 82.3333 51.76 83.56 51.76ZM102.243 37.88C104.563 35.56 106.816 34.4 109.003 34.4C110.816 34.4 112.27 34.9733 113.363 36.12C114.483 37.2667 115.07 38.7733 115.123 40.64L115.403 50.52C115.43 51.2667 115.67 51.8 116.123 52.12C116.576 52.4133 117.336 52.56 118.403 52.56C118.536 52.6933 118.603 52.96 118.603 53.36C118.603 53.7333 118.576 53.9467 118.523 54L113.763 53.76L108.883 54C108.803 53.92 108.763 53.7067 108.763 53.36C108.763 52.9867 108.843 52.72 109.003 52.56C110.016 52.56 110.736 52.4133 111.163 52.12C111.616 51.8 111.856 51.2667 111.883 50.52L112.043 41.36C112.07 40.0267 111.71 38.9467 110.963 38.12C110.216 37.2933 109.176 36.88 107.843 36.88C106.51 36.88 105.016 37.64 103.363 39.16C102.856 39.64 102.563 39.9067 102.483 39.96L102.803 50.52C102.83 51.2667 103.056 51.8 103.483 52.12C103.91 52.4133 104.63 52.56 105.643 52.56C105.776 52.6933 105.843 52.96 105.843 53.36C105.843 53.7333 105.816 53.9467 105.763 54L101.163 53.76L96.0831 54C96.0031 53.92 95.9631 53.7067 95.9631 53.36C95.9631 52.9867 96.0431 52.72 96.2031 52.56C97.2698 52.56 98.0431 52.4133 98.5231 52.12C99.0298 51.8 99.2831 51.2667 99.2831 50.52L99.4031 28.52C99.4031 27.16 98.2965 26.48 96.0831 26.48C96.0031 26.4 95.9631 26.1867 95.9631 25.84C95.9631 25.4667 96.0431 25.2 96.2031 25.04C97.2165 24.96 98.0431 24.84 98.6831 24.68C99.3498 24.4933 99.9498 24.1333 100.483 23.6C100.59 23.4933 100.816 23.44 101.163 23.44C101.51 23.44 101.763 23.4933 101.923 23.6L102.243 37.88ZM125.792 54.4C124.326 54.4 123.086 53.9333 122.072 53C121.059 52.04 120.552 50.8267 120.552 49.36C120.552 47.8933 121.166 46.68 122.392 45.72C123.646 44.7333 125.712 43.9467 128.592 43.36L131.352 42.8V41.8C131.352 39.9333 131.032 38.5867 130.392 37.76C129.779 36.9067 128.739 36.48 127.272 36.48C125.246 36.48 124.232 36.8933 124.232 37.72C124.232 37.88 124.392 38.1467 124.712 38.52C125.032 38.8667 125.192 39.2533 125.192 39.68C125.192 40.08 125.006 40.4133 124.632 40.68C124.286 40.92 123.819 41.04 123.232 41.04C122.646 41.04 122.166 40.8667 121.792 40.52C121.446 40.1733 121.272 39.6933 121.272 39.08C121.272 37.72 121.926 36.6 123.232 35.72C124.566 34.84 126.006 34.4 127.552 34.4C130.059 34.4 131.846 34.9333 132.912 36C133.979 37.04 134.512 38.44 134.512 40.2C134.512 40.2533 134.459 43.4133 134.352 49.68C134.326 51.3867 134.899 52.24 136.072 52.24C136.552 52.24 137.099 52.1067 137.712 51.84C137.899 52.16 137.992 52.4667 137.992 52.76C137.992 53.0267 137.966 53.1867 137.912 53.24C137.646 53.5067 137.179 53.76 136.512 54C135.846 54.2667 135.139 54.4 134.392 54.4C133.246 54.4 132.286 53.68 131.512 52.24C129.832 53.68 127.926 54.4 125.792 54.4ZM129.312 45.4C127.259 45.9067 125.886 46.4267 125.192 46.96C124.526 47.4667 124.192 48.1733 124.192 49.08C124.192 49.96 124.432 50.68 124.912 51.24C125.392 51.8 125.979 52.08 126.672 52.08C127.366 52.08 128.166 51.9333 129.072 51.64C130.006 51.32 130.806 50.96 131.472 50.56L131.392 44.88L129.312 45.4ZM155.341 35.04L158.981 34.8C159.035 34.8533 159.061 35.08 159.061 35.48C159.061 35.8533 158.995 36.1067 158.861 36.24C158.035 36.24 157.435 36.36 157.061 36.6C156.688 36.84 156.381 37.2933 156.141 37.96L150.101 54C149.995 54.1067 149.568 54.16 148.821 54.16C148.075 54.16 147.661 54.1067 147.581 54L140.861 37.96C140.595 37.2933 140.261 36.84 139.861 36.6C139.488 36.36 138.821 36.24 137.861 36.24C137.701 36.08 137.621 35.8267 137.621 35.48C137.621 35.1067 137.661 34.88 137.741 34.8L142.301 35.04L147.101 34.8C147.208 34.88 147.261 35.0933 147.261 35.44C147.261 35.7867 147.168 36.0533 146.981 36.24C145.275 36.24 144.421 36.5733 144.421 37.24C144.421 37.3467 144.475 37.5867 144.581 37.96L149.141 50.76L153.181 37.96C153.261 37.6933 153.301 37.48 153.301 37.32C153.301 36.6 152.488 36.24 150.861 36.24C150.701 36.08 150.621 35.8267 150.621 35.48C150.621 35.1067 150.661 34.88 150.741 34.8L155.341 35.04ZM176.272 51.64C174.432 53.48 172.126 54.4 169.352 54.4C166.606 54.4 164.486 53.4667 162.992 51.6C161.499 49.7067 160.752 47.32 160.752 44.44C160.752 41.5333 161.486 39.1333 162.952 37.24C164.446 35.3467 166.486 34.4 169.072 34.4C171.686 34.4 173.606 35.32 174.832 37.16C176.086 38.9733 176.712 41.32 176.712 44.2H164.272C164.272 46.36 164.739 48.1867 165.672 49.68C166.632 51.1467 167.992 51.88 169.752 51.88C172.152 51.88 174.179 51.28 175.832 50.08C175.939 50.16 176.072 50.3467 176.232 50.64C176.392 50.9333 176.472 51.1467 176.472 51.28C176.472 51.3867 176.406 51.5067 176.272 51.64ZM164.312 42.12L169.952 42.16C171.979 42.16 173.059 42.08 173.192 41.92C173.219 41.7867 173.232 41.56 173.232 41.24C173.232 39.9867 172.872 38.8533 172.152 37.84C171.432 36.8267 170.392 36.32 169.032 36.32C167.699 36.32 166.606 36.8533 165.752 37.92C164.926 38.96 164.446 40.36 164.312 42.12ZM185.886 37.88C188.206 35.56 190.326 34.4 192.246 34.4C194.193 34.4 195.713 34.9733 196.806 36.12C197.926 37.2667 198.513 38.7733 198.566 40.64L198.846 50.52C198.873 51.2667 199.113 51.8 199.566 52.12C200.02 52.4133 200.78 52.56 201.846 52.56C201.98 52.6933 202.046 52.96 202.046 53.36C202.046 53.7333 202.02 53.9467 201.966 54L197.206 53.76L192.326 54C192.246 53.92 192.206 53.7067 192.206 53.36C192.206 52.9867 192.286 52.72 192.446 52.56C193.46 52.56 194.18 52.4133 194.606 52.12C195.06 51.8 195.3 51.2667 195.326 50.52L195.486 41.36C195.513 40.0267 195.153 38.9467 194.406 38.12C193.66 37.2933 192.62 36.88 191.286 36.88C190.326 36.88 189.326 37.28 188.286 38.08C187.94 38.3467 187.513 38.7067 187.006 39.16C186.526 39.6133 186.233 39.88 186.126 39.96L186.446 50.52C186.473 51.2667 186.7 51.8 187.126 52.12C187.553 52.4133 188.273 52.56 189.286 52.56C189.42 52.6933 189.486 52.96 189.486 53.36C189.486 53.7333 189.46 53.9467 189.406 54L184.806 53.76L179.726 54C179.646 53.92 179.606 53.7067 179.606 53.36C179.606 52.9867 179.686 52.72 179.846 52.56C180.913 52.56 181.686 52.4133 182.166 52.12C182.673 51.8 182.926 51.2667 182.926 50.52L183.046 39.32C183.046 38.5733 182.793 38.0533 182.286 37.76C181.806 37.44 181.02 37.28 179.926 37.28C179.846 37.2 179.806 36.9867 179.806 36.64C179.806 36.2667 179.886 36 180.046 35.84C180.153 35.84 180.406 35.8133 180.806 35.76C181.206 35.7067 181.46 35.68 181.566 35.68C181.673 35.6533 181.873 35.6133 182.166 35.56C182.486 35.48 182.726 35.3867 182.886 35.28C183.42 34.9867 183.78 34.7467 183.966 34.56C184.18 34.3467 184.46 34.24 184.806 34.24C185.153 34.24 185.406 34.2933 185.566 34.4L185.886 37.88ZM223.723 53.76L218.963 54C218.883 53.92 218.843 53.68 218.843 53.28C218.843 52.88 218.909 52.6133 219.043 52.48C220.003 52.48 220.683 52.32 221.083 52C221.509 51.6533 221.723 51.12 221.723 50.4L221.883 28H218.643C217.043 28 215.936 28.3333 215.323 29C214.736 29.6667 214.309 30.76 214.043 32.28C213.936 32.3867 213.669 32.44 213.243 32.44C212.843 32.44 212.603 32.3867 212.523 32.28L213.203 25.48C216.163 25.7733 219.523 25.92 223.283 25.92C227.043 25.92 230.429 25.7733 233.443 25.48L234.043 32.28C233.936 32.3867 233.669 32.44 233.243 32.44C232.843 32.44 232.603 32.3867 232.523 32.28C232.256 30.76 231.829 29.6667 231.243 29C230.683 28.3333 229.603 28 228.003 28H224.683L225.403 50.4C225.429 51.12 225.629 51.6533 226.003 52C226.403 52.32 227.083 52.48 228.043 52.48C228.176 52.6133 228.243 52.88 228.243 53.28C228.243 53.68 228.203 53.92 228.123 54L223.723 53.76ZM236.075 51.6C234.689 49.7067 233.995 47.3067 233.995 44.4C233.995 41.4933 234.689 39.1067 236.075 37.24C237.489 35.3467 239.609 34.4 242.435 34.4C245.262 34.4 247.409 35.3467 248.875 37.24C250.369 39.1333 251.115 41.52 251.115 44.4C251.115 47.28 250.369 49.6667 248.875 51.56C247.409 53.4533 245.262 54.4 242.435 54.4C239.609 54.4 237.489 53.4667 236.075 51.6ZM246.835 50.08C247.422 48.8533 247.715 47.08 247.715 44.76C247.715 42.44 247.249 40.4533 246.315 38.8C245.409 37.1467 244.089 36.32 242.355 36.32C240.009 36.32 238.515 37.3733 237.875 39.48C237.555 40.6 237.395 42 237.395 43.68C237.395 46.2133 237.849 48.28 238.755 49.88C239.689 51.4533 241.102 52.24 242.995 52.24C244.889 52.24 246.169 51.52 246.835 50.08ZM270.339 44.2C270.339 42.0933 269.873 40.2933 268.939 38.8C268.006 37.28 266.633 36.52 264.819 36.52C263.939 36.52 262.993 36.8667 261.979 37.56C260.966 38.2533 260.219 39.0267 259.739 39.88L260.059 48.16C260.086 49.2267 260.619 50.2133 261.659 51.12C262.726 52.0267 263.793 52.48 264.859 52.48C268.513 52.48 270.339 49.72 270.339 44.2ZM258.779 64.96L253.699 65.2C253.619 65.12 253.579 64.8933 253.579 64.52C253.579 64.1733 253.659 63.92 253.819 63.76C254.886 63.76 255.659 63.6 256.139 63.28C256.646 62.9867 256.899 62.4667 256.899 61.72L257.019 39.32C257.019 38.5733 256.753 38.0533 256.219 37.76C255.713 37.44 254.886 37.28 253.739 37.28C253.659 37.2 253.619 36.9867 253.619 36.64C253.619 36.2667 253.699 36 253.859 35.84C255.326 35.6533 256.659 35.2267 257.859 34.56C258.073 34.4533 258.326 34.4 258.619 34.4C258.913 34.4 259.139 34.4533 259.299 34.56L259.659 37.64C261.366 35.48 263.379 34.4 265.699 34.4C268.393 34.4 270.419 35.3067 271.779 37.12C273.139 38.9067 273.819 41.24 273.819 44.12C273.819 47 273.059 49.44 271.539 51.44C270.046 53.4133 268.019 54.4 265.459 54.4C263.459 54.4 261.673 53.6133 260.099 52.04L260.419 61.72C260.446 62.4667 260.686 62.9867 261.139 63.28C261.619 63.6 262.393 63.76 263.459 63.76C263.593 63.8933 263.659 64.1467 263.659 64.52C263.659 64.92 263.633 65.1467 263.579 65.2L258.779 64.96ZM281.994 53.76L276.914 54C276.834 53.92 276.794 53.7067 276.794 53.36C276.794 52.9867 276.874 52.72 277.034 52.56C278.1 52.56 278.874 52.4133 279.354 52.12C279.86 51.8 280.114 51.2667 280.114 50.52L280.234 39.32C280.234 38.5733 279.98 38.0533 279.474 37.76C278.994 37.44 278.207 37.28 277.114 37.28C277.034 37.2 276.994 36.9867 276.994 36.64C276.994 36.2667 277.074 36 277.234 35.84C277.34 35.84 277.594 35.8133 277.994 35.76C278.394 35.7067 278.647 35.68 278.754 35.68C278.86 35.6533 279.06 35.6133 279.354 35.56C279.674 35.48 279.914 35.3867 280.074 35.28C280.607 34.9867 280.967 34.7467 281.154 34.56C281.367 34.3467 281.647 34.24 281.994 34.24C282.34 34.24 282.594 34.2933 282.754 34.4L283.154 38.56C283.634 37.4933 284.407 36.5333 285.474 35.68C286.567 34.8267 287.727 34.4 288.954 34.4C289.674 34.4 290.274 34.64 290.754 35.12C291.26 35.5733 291.514 36.1333 291.514 36.8C291.514 37.44 291.327 37.96 290.954 38.36C290.58 38.7333 290.1 38.92 289.514 38.92C288.234 38.92 287.594 38.4667 287.594 37.56C287.594 37.32 287.66 37.1067 287.794 36.92C287.927 36.7333 287.994 36.6 287.994 36.52C287.994 36.44 287.9 36.4 287.714 36.4C287.047 36.4 286.14 37.1467 284.994 38.64C283.874 40.1333 283.327 41.4933 283.354 42.72L283.634 50.52C283.66 51.2667 283.9 51.8 284.354 52.12C284.834 52.4133 285.607 52.56 286.674 52.56C286.807 52.6933 286.874 52.96 286.874 53.36C286.874 53.7333 286.847 53.9467 286.794 54L281.994 53.76ZM298.8 54.4C297.333 54.4 296.093 53.9333 295.08 53C294.067 52.04 293.56 50.8267 293.56 49.36C293.56 47.8933 294.173 46.68 295.4 45.72C296.653 44.7333 298.72 43.9467 301.6 43.36L304.36 42.8V41.8C304.36 39.9333 304.04 38.5867 303.4 37.76C302.787 36.9067 301.747 36.48 300.28 36.48C298.253 36.48 297.24 36.8933 297.24 37.72C297.24 37.88 297.4 38.1467 297.72 38.52C298.04 38.8667 298.2 39.2533 298.2 39.68C298.2 40.08 298.013 40.4133 297.64 40.68C297.293 40.92 296.827 41.04 296.24 41.04C295.653 41.04 295.173 40.8667 294.8 40.52C294.453 40.1733 294.28 39.6933 294.28 39.08C294.28 37.72 294.933 36.6 296.24 35.72C297.573 34.84 299.013 34.4 300.56 34.4C303.067 34.4 304.853 34.9333 305.92 36C306.987 37.04 307.52 38.44 307.52 40.2C307.52 40.2533 307.467 43.4133 307.36 49.68C307.333 51.3867 307.907 52.24 309.08 52.24C309.56 52.24 310.107 52.1067 310.72 51.84C310.907 52.16 311 52.4667 311 52.76C311 53.0267 310.973 53.1867 310.92 53.24C310.653 53.5067 310.187 53.76 309.52 54C308.853 54.2667 308.147 54.4 307.4 54.4C306.253 54.4 305.293 53.68 304.52 52.24C302.84 53.68 300.933 54.4 298.8 54.4ZM302.32 45.4C300.267 45.9067 298.893 46.4267 298.2 46.96C297.533 47.4667 297.2 48.1733 297.2 49.08C297.2 49.96 297.44 50.68 297.92 51.24C298.4 51.8 298.987 52.08 299.68 52.08C300.373 52.08 301.173 51.9333 302.08 51.64C303.013 51.32 303.813 50.96 304.48 50.56L304.4 44.88L302.32 45.4ZM318.699 37.88C321.019 35.56 323.139 34.4 325.059 34.4C327.005 34.4 328.525 34.9733 329.619 36.12C330.739 37.2667 331.325 38.7733 331.379 40.64L331.659 50.52C331.685 51.2667 331.925 51.8 332.379 52.12C332.832 52.4133 333.592 52.56 334.659 52.56C334.792 52.6933 334.859 52.96 334.859 53.36C334.859 53.7333 334.832 53.9467 334.779 54L330.019 53.76L325.139 54C325.059 53.92 325.019 53.7067 325.019 53.36C325.019 52.9867 325.099 52.72 325.259 52.56C326.272 52.56 326.992 52.4133 327.419 52.12C327.872 51.8 328.112 51.2667 328.139 50.52L328.299 41.36C328.325 40.0267 327.965 38.9467 327.219 38.12C326.472 37.2933 325.432 36.88 324.099 36.88C323.139 36.88 322.139 37.28 321.099 38.08C320.752 38.3467 320.325 38.7067 319.819 39.16C319.339 39.6133 319.045 39.88 318.939 39.96L319.259 50.52C319.285 51.2667 319.512 51.8 319.939 52.12C320.365 52.4133 321.085 52.56 322.099 52.56C322.232 52.6933 322.299 52.96 322.299 53.36C322.299 53.7333 322.272 53.9467 322.219 54L317.619 53.76L312.539 54C312.459 53.92 312.419 53.7067 312.419 53.36C312.419 52.9867 312.499 52.72 312.659 52.56C313.725 52.56 314.499 52.4133 314.979 52.12C315.485 51.8 315.739 51.2667 315.739 50.52L315.859 39.32C315.859 38.5733 315.605 38.0533 315.099 37.76C314.619 37.44 313.832 37.28 312.739 37.28C312.659 37.2 312.619 36.9867 312.619 36.64C312.619 36.2667 312.699 36 312.859 35.84C312.965 35.84 313.219 35.8133 313.619 35.76C314.019 35.7067 314.272 35.68 314.379 35.68C314.485 35.6533 314.685 35.6133 314.979 35.56C315.299 35.48 315.539 35.3867 315.699 35.28C316.232 34.9867 316.592 34.7467 316.779 34.56C316.992 34.3467 317.272 34.24 317.619 34.24C317.965 34.24 318.219 34.2933 318.379 34.4L318.699 37.88ZM343.602 29.52C343.602 30.1867 343.389 30.72 342.962 31.12C342.536 31.4933 341.976 31.68 341.282 31.68C340.616 31.68 340.082 31.4667 339.682 31.04C339.282 30.6133 339.082 30.08 339.082 29.44C339.082 28.7733 339.282 28.2267 339.682 27.8C340.082 27.3467 340.602 27.12 341.242 27.12C341.882 27.12 342.429 27.3467 342.882 27.8C343.362 28.2533 343.602 28.8267 343.602 29.52ZM341.802 53.76L336.722 54C336.642 53.92 336.602 53.7067 336.602 53.36C336.602 52.9867 336.682 52.72 336.842 52.56C337.909 52.56 338.682 52.4133 339.162 52.12C339.669 51.8 339.922 51.2667 339.922 50.52L339.962 39.68C339.962 38.32 338.856 37.64 336.642 37.64C336.562 37.56 336.522 37.3467 336.522 37C336.522 36.6267 336.602 36.36 336.762 36.2C337.589 36.2 338.376 36.1067 339.122 35.92C339.869 35.7067 340.362 35.5333 340.602 35.4C340.869 35.24 341.082 35.08 341.242 34.92C341.429 34.7333 341.696 34.64 342.042 34.64C342.389 34.64 342.642 34.6933 342.802 34.8L343.442 50.52C343.469 51.2667 343.709 51.8 344.162 52.12C344.642 52.4133 345.416 52.56 346.482 52.56C346.616 52.6933 346.682 52.96 346.682 53.36C346.682 53.7333 346.656 53.9467 346.602 54L341.802 53.76Z" fill="#FCF7F8" />
                </svg>
            </Link>
            <LinksUl>
                <LinkLi>
                    <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)} open={dropdownOpen}>Case Studies</DropdownButton>
                    {dropdownOpen && 
                        <Submenu>
                            <Link to='/amigurumate'>Amigurumate</Link>
                            <Link to='/jcrew'>J.Crew</Link>
                            <Link to='/zyno'>Zyno</Link>
                        </Submenu>}
                </LinkLi>
                <LinkLi>
                    <Link to='/about'>
                        About
                    </Link>
                </LinkLi>
                <LinkLi>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </LinkLi>
            </LinksUl>
        </NavBar>
    );
};

export default Navbar;