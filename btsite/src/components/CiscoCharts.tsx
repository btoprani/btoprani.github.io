import React from "react";
import { styled } from "styled-components";
import { PieBox, PieChart, PieContainer } from "./SharedStyles";
import { Pie } from "react-chartjs-2";

//Pie title haha
const Pietle = styled.span`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    max-width: 300px;
    text-align: center;
`;

const fullDataset = [{
    label: 'Percent Product Managers',
    data: [100],
    backgroundColor: ['#373C42'],
    hoverOffet: 4
}];

const eightyDataset = [{
    label: 'Percent Stakeholders',
    data: [80, 20],
    backgroundColor: ['#373C42', '#1D69CC'],
    hoverOffset: 4
}];

const sixtySixDataset = [{
    label: 'Percent Stakeholders',
    data: [66, 33],
    backgroundColor: ['#373C42', '#1D69CC'],
    hoverOffset: 4
}];

const utData1 = {
    labels: ["Asked to reorder Home Page widgets"],
    datasets: fullDataset
};

const utData2 = {
    labels: ["Asked for better customizability", "Did not mention customizability"],
    datasets: eightyDataset
};

const utData3 = {
    labels: ["Wanted to see more AI-based insights and recommendations for changes since user's last login/shift", "Were satisfied with the AI customization at this juncture"],
    datasets: sixtySixDataset
};

export const UsabilityTestingCharts = () => {
    return <PieBox>
        <PieChart>
            <Pietle>Product Managers requesting Home Page Widget reorder to emphasize changes since last login/shift</Pietle>
            <PieContainer><Pie data={utData1} /></PieContainer>
        </PieChart>
        <PieChart>
            <Pietle>Stakeholders asking for better customizability</Pietle>
            <PieContainer><Pie data={utData2} /></PieContainer>
        </PieChart>
        <PieChart>
            <Pietle>Stakeholders wanting more AI-based insights and recommendations for changes since last login/shift</Pietle>
            <PieContainer><Pie data={utData3} /></PieContainer>
        </PieChart>
    </PieBox>
}