// src/components/CustomButton.tsx
"use client";

import React from 'react';
import { Button, ButtonProps } from 'antd';
import styled from 'styled-components';

interface CustomButtonProps extends ButtonProps {
    hoverColor?: string;
    smallEffectColor?: string;
    enableHover?: boolean;
}

const StyledButton = styled(Button)<{ hoverColor: string; smallEffectColor:string; dimColor:string; enableHover: boolean }>`
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

    ${({enableHover, hoverColor, smallEffectColor, dimColor}) => enableHover ? `
        &:hover {
            background-color: ${hoverColor} !important;
            border-color: ${hoverColor} !important;
            color: white !important;
        }
    ` : `
        &:hover {
            background-color: ${dimColor} !important;
            border-color: ${smallEffectColor} !important;
            color: ${smallEffectColor} !important;
        }
    `}
`;

const AntdBtnCustom: React.FC<CustomButtonProps> = ({ children, hoverColor = '#071934', enableHover = true, ...props }) => {
    const smallEffectColor = '#404e69'
    const dimColor = '#f6f7f8'
    return (
        <StyledButton hoverColor={hoverColor} enableHover={enableHover} smallEffectColor={smallEffectColor} dimColor={dimColor} {...props} type="default">
            {children}
        </StyledButton>
    );
};

export default AntdBtnCustom;
