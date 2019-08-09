import * as React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';

export const Spacer = styled.div`
    display: flex;
    flex-grow: 1;
`

export const TransparentLayout = styled(Layout)`
    && {
        background: none;
    }
`;

export const WhiteBackground = styled.div`
    background: ${({ theme }) => theme.palette.common.white};
`;

export const TopMenu = styled(Menu).attrs({
    mode: "horizontal"
})`
    && {
        display: flex;
        line-height: 77px;
    }
`;

export const LeftMenu = styled(Menu).attrs({
    mode: "inline"
})`
`;

// todo: left sider does should move up when ai2logo disappears
export const LeftSider = styled(Layout.Sider).attrs({
    breakpoint: "sm",
    collapsedWidth: 0
})`
    && {
        background: none;
        overflow: auto;
        height: 100vh;
        position: fixed;
        left: 0;
        ul {
            height: 100%;
        }
    }
`;

export const PaddedContent = styled(Layout.Content)`
    && {
        max-width: ${({theme}) => theme.breakpoints.xl};
        margin: 0 auto;
        padding: ${({theme}) => `0 ${theme.spacing.lg} ${theme.spacing.xxl}`};
        width: 100%;

        @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
            padding: ${({theme}) => `0 ${theme.spacing.sm}`};
        }
    }
`;

export const Page = styled.div`
    padding: ${({theme}) => `${theme.spacing.lg} 0`};
`;
