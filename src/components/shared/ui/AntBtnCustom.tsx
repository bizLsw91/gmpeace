// src/components/CustomButton.tsx
"use client";

import React from 'react';
import { Button, ButtonProps } from 'antd';
import styled from 'styled-components';

interface CustomButtonProps extends ButtonProps {
    hovercolor?: string;
    smalleffectcolor?: string;
    enablehover?: 'true'|'false';
}

const StyledButton = styled(Button)<{ hovercolor: string; smalleffectcolor:string; dimcolor:string; enablehover: string }>`
    border-color: #5e5c5c;
    color: #626161;
    font-family: "Nanum Gothic", sans-serif;
    font-size: 14px;
    font-weight: bold;
    height: auto;
    padding: 5px 10px;
    @media (min-width: 480px) {
        font-size: 15px;
    }
    @media (min-width: 768px) {
        font-size: 16px;
    }

    ${({enablehover, hovercolor, smalleffectcolor, dimcolor}) => enablehover==='true' ? `
        &:hover {
            background-color: ${hovercolor} !important;
            border-color: ${hovercolor} !important;
            color: white !important;
        }
    ` : `
        &:hover {
            background-color: ${dimcolor} !important;
            border-color: ${smalleffectcolor} !important;
            color: ${smalleffectcolor} !important;
        }
    `}
`;

const AntdBtnCustom: React.FC<CustomButtonProps> = ({ children, hovercolor = '#071934', enablehover = 'true', ...props }) => {
    const smalleffectcolor = '#404e69'
    const dimcolor = '#f6f7f8'
    return (
        <StyledButton hovercolor={hovercolor} enablehover={enablehover} smalleffectcolor={smalleffectcolor} dimcolor={dimcolor} {...props} type="default">
            {children}
        </StyledButton>
    );
};

export default AntdBtnCustom;
