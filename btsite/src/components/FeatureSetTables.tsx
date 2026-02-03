import React from "react";
import styled, { css } from "styled-components";
import { CaseStudyType, themeColors } from "./SharedStyles";

const jCrewStyle = css`
    background-color: #f0f1f2;
`;

const amigurumateStyle = css`
    background-color: #DADDF2;
`;

const zynoStyle = css`
    background-color: #EFBC9D;
`;

const FeatureSetTable = styled.table<{$borderColor: string, $caseStudyType: CaseStudyType}>`
    border-collapse: collapse;
    font-family: 'IBM Plex Sans', sans-serif;
    width: 100%;
    text-align: left;
    border-radius: 4px;
    overflow-x: scroll;
    th, td {
        padding: 8px;
    }
    td {
        padding-left: 16px;
    }
    tr:nth-child(even) {
        ${props => (props.$caseStudyType===CaseStudyType.JCrew && jCrewStyle)}
        ${props => (props.$caseStudyType===CaseStudyType.Amigurumate && amigurumateStyle)}
        ${props => (props.$caseStudyType===CaseStudyType.Zyno && zynoStyle)}
    }
    tr:nth-child(2n+3) {
        background-color: ${themeColors.neutralLight};
    }
    
    tr:last-child > td {
        border-bottom: 1px solid ${props => props.$borderColor};
    }
    @media(max-width: 450px) {
        margin-left: -16px;
    }
`;

const PriorityTd = styled.td<{$innerColor: string, $outerColor: string}>`
    outline: 2px solid ${props => props.$outerColor};
    outline-offset: -2px;
    background-color: ${props => props.$innerColor};
    @media(max-width: 450px) {
        word-wrap: break-word;
        max-width: 80px;
        padding: 4px !important;
    }
`;

const DescTd = styled.td<{$borderColor: string}>`
    border-right: 1px solid ${props => props.$borderColor};
`;

const HeaderRow = styled.tr<{$color: string, $bgColor: string}>`
    color: ${props => props.$color};
    background-color: ${props => props.$bgColor};
`;

type FeatureSetDatumType = {
    name: string;
    description: string;
}

type FeatureSetDataType = {
    1: FeatureSetDatumType[];
    2: FeatureSetDatumType[];
    3: FeatureSetDatumType[];
    4: FeatureSetDatumType[];
}

const AmigurumateData: FeatureSetDataType = {
    1: [{
            name: "Digital Patterns",
            description: "Unify patterns into digital format so that they're easy to work with and don't take up too much storage space."
        },
        {
            name: "Instruction Edits",
            description: "Allow people to modify individual lines within the pattern while going through it."
        },
        {
            name: "Pattern Bookmark",
            description: "Enable users to track exactly where they are within a pattern by making it clear which rows and stitches have been completed, and which ones they have yet to complete."
    }], 
    2: [{
            name: "Stitch Cheat Sheet",
            description: "A cheat sheet that clarifies what a shorthand means, with links to resources that can teach or remind you how to do them"
        }],
    3: [{
            name: "Ravelry Integration",
            description: "Users can import patterns from ravelry (as long as they've been stored appropriately)"
        },
        {
            name: "Cloud Setup",
            description: "Allow people to access their project on whichever devices are supported."
        }],
    4: [{
            name: "Optional Motivational Notifications",
            description: "Users can choose to turn on a notification that will remind them about their projects if they have gone a week without a change in any of their projects. Could also add points and achievements for keeping up with it."
        },
        {
            name: "Sharing Finished Products",
            description: "Allow users to share the finished product of individual patterns, and full projects, with each other."
        },
        {
            name: "Import Public Domain Patterns",
            description: "Allow users to import certain projects that are in the public domain into their library, modify said projects, and share the modied version like on github."
    }]
};

const JCrewData: FeatureSetDataType = {
    1: [{
            name: "Droplist",
            description: "User should be able to set the price at which they would like to buy the item."
        },
        {
            name: "Queue",
            description: "Users should be notified about a product reaching the price they droplisted at in the order with which they droplisted the item."
        }], 
    2: [{
            name: "Droplist Percent",
            description: "User should know what percentage discount their desired price would be at, as well as be able to set a percent off instead of a price."
        },
        {
            name: "Manage Droplists",
            description: "Users should be able to look at their active droplists, and remove/delete/cancel any droplists that they no longer want from their account."
        }],
    3: [{
            name: "Rewards Priority",
            description: "J.Crew shoppers who spend a lot or are part of a rewards program can buy their droplisted products a day or a few hours earlier."
        }],
    4: [{
            name: "Droplist Completion",
            description: "Droplists should be removed/deleted upon purchase of item."
        }]
};

const ZynoData: FeatureSetDataType = {
    1: [{
            name: "Link",
            description: "Ability to link listing profile"
        },
        {
            name: "Crawl",
            description: "Ability to automatically crawl listings"
        },
        {
            name: "Account",
            description: "Users should have an account"
        },
        {
            name: "AI integration",
            description: "AI integration to generate posts"
        },
        {
            name: "One Click",
            description: "One Click approval and submission of generated posts"
        }],
    2: [{
            name: "Edit",
            description: "Ability to edit post text"
        },
        {
            name: "Asset Management",
            description: "Ability to change which Video/Images are used from listing page"
        },
        {
            name: "Upload Assets",
            description: "Ability to replace post assets with uploaded ones"
        }],
    3: [{
            name: "Analytics",
            description: "Ability to view Analytics on posts"
        },
        {
            name: "AI Tours",
            description: "AI generated video house tours"
        },
        {
            name: "Scheduling",
            description: "Users can choose posting times"
        }],
    4: [{
            name: "Pricing Tiers",
            description: "Users should be able to have more features available to them at higher pricing tiers"
        },
        {
            name: "Hours Saved",
            description: "Tally of hours saved by using service"
        },
        {
            name: "Tuned Models",
            description: "Multiple AI models that fit different marketing strategies"
        },
        {
            name: "Articles",
            description: "Articles on what kinds of posts are generating the most engagement"
        }]
};

export interface FeatureSetType {
    headerColor: string;
    headerBgColor: string;
    caseStudyType: CaseStudyType;
}

export const FeatureSet = (props: FeatureSetType) => {
    let data: FeatureSetDataType;
    switch (props.caseStudyType) {
        case CaseStudyType.Amigurumate:
            data = AmigurumateData;
            break;
        case CaseStudyType.JCrew:
            data = JCrewData;
            break;
        case CaseStudyType.Zyno:
            data = ZynoData;
            break;
        default:
            data=AmigurumateData;
    }
    return (
        <FeatureSetTable $borderColor={props.headerBgColor} $caseStudyType={props.caseStudyType}>
            <thead>
                <HeaderRow $color={props.headerColor} $bgColor={props.headerBgColor}>
                    <th>Priority</th>
                    <th>Name</th>
                    <th>Description</th>
                </HeaderRow>
            </thead>
            <tbody>
                {data[1].map((entry, index) => {
                    return <tr key={entry.name}>
                        {index === 0 && <PriorityTd $outerColor='#ff9900' $innerColor='#f6b26b' rowSpan={data[1].length}>P1: Must have</PriorityTd>}
                        <td>{entry.name}</td>
                        <DescTd $borderColor={props.headerBgColor}>{entry.description}</DescTd>
                    </tr>
                })}
                {data[2].map((entry, index) => {
                    return <tr key={entry.name}>
                        {index === 0 && <PriorityTd $outerColor='#f1c232' $innerColor='#ffd966' rowSpan={data[2].length}>P2: Nice to have</PriorityTd>}
                        <td>{entry.name}</td>
                        <DescTd $borderColor={props.headerBgColor}>{entry.description}</DescTd>
                    </tr>
                })}
                {data[3].map((entry, index) => {
                    return <tr key={entry.name}>
                        {index === 0 && <PriorityTd $outerColor='#6aa84f' $innerColor='#93c47d' rowSpan={data[3].length}>P3: Surprising and Delightful</PriorityTd>}
                        <td>{entry.name}</td>
                        <DescTd $borderColor={props.headerBgColor}>{entry.description}</DescTd>
                    </tr>
                })}
                {data[4].map((entry, index) => {
                    return <tr key={entry.name}>
                        {index === 0 && <PriorityTd $outerColor='#6d9eeb' $innerColor='#a4c2f4' rowSpan={data[4].length}>P4: Later Considerations</PriorityTd>}
                        <td>{entry.name}</td>
                        <DescTd $borderColor={props.headerBgColor}>{entry.description}</DescTd>
                    </tr>
                })}
            </tbody>
        </FeatureSetTable>
    );
}