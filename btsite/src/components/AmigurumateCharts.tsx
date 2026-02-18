import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { PieBox, PieChart, PieContainer } from "./SharedStyles";

Chart.register(ArcElement, Tooltip, Legend);

//Pie title haha
const Pietle = styled.span`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    max-width: 300px;
    text-align: center;
`;

const fullFiveDataset = [{
    label: 'Users',
    data: [5],
    backgroundColor: ['#4A3E59'],
    hoverOffet: 4
}];
const fourDataset = [{
    label: 'Users',
    data: [4, 1],
    backgroundColor: ['#4A3E59', '#B285F2'],
    hoverOffset: 4
}];

const threeDataset = [{
    label: 'Users',
    data: [3, 2],
    backgroundColor: ['#4A3E59', '#B285F2'],
    hoverOffset: 4
}];

const utData1 = {
    labels: ["Prefered below set of wireframes"],
    datasets: fullFiveDataset
};

const utData2 = {
    labels: ["Wanted completed patterns at the end.", "Wanted patterns in order of creation"],
    datasets: fourDataset
};

const utData3 = {
    labels: ["Liked the outlines more", "Didn't care"],
    datasets: threeDataset
}

const utData4 = {
    labels: ["Wanted arrows and increments", "Didn't care"],
    datasets: fourDataset
}

const utData5 = {
    labels: ["Wanted stitch shorthand modals", "Didn't care"],
    datasets: fourDataset
}

const utData6 = {
    labels: ["Wanted ordered lists of patterns"],
    datasets: fullFiveDataset
}

const iData1 = {
    labels: ["25-35 years old", ">35 years old"],
    datasets: fourDataset
}

const iData2 = {
    labels: ["Work in an office", "Don't work in an office"],
    datasets: threeDataset
}

const iData3 = {
    labels: ["Lack free time for fiber art"],
    datasets: fullFiveDataset
}

export const UserTestingCharts = () => {
    return (
        <PieBox>
            <PieChart>
                <Pietle>User preference for above or below Low-Fidelity wireframes</Pietle>
                <PieContainer><Pie data={utData1} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User preference for patterns being in ordered list</Pietle>
                <PieContainer><Pie data={utData6} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User preference for completed pattern location</Pietle>
                <PieContainer><Pie data={utData2} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User preference for cards to have outlines or not</Pietle>
                <PieContainer><Pie data={utData3} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User preference for stitch counter to have arrows or imcrements</Pietle>
                <PieContainer><Pie data={utData4} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User preference for tapping a stitch shorthand opening a modal</Pietle>
                <PieContainer><Pie data={utData5} /></PieContainer>
            </PieChart>
        </PieBox>
    );
};

export const InterviewPieCharts = () => {
    return (
        <PieBox>
            <PieChart>
                <Pietle>Interviewee Age Range</Pietle>
                <PieContainer><Pie data={iData1} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>Proportion of office workers</Pietle>
                <PieContainer><Pie data={iData2} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>Lacking free time for fiber art</Pietle>
                <PieContainer><Pie data={iData3} /></PieContainer>
            </PieChart>
        </PieBox>
    );
}
