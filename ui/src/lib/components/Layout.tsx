
import * as React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

export type LayoutVariant = 'app' | 'default' | 'demo';

export const TransparentLayout = styled(Layout)`
    && {
        background: none;
    }
`;

export const WhiteLayout = styled(TransparentLayout)`
    && {
        background: ${({theme}) => theme.palette.common.white};
    }
`;

// todo: left sider does should move up when ai2logo disappears
export const LeftSider = styled(Layout.Sider).attrs({
    breakpoint: "md",
    trigger: null
})`
    && {
        border-right: ${({theme}) => `1px solid ${theme.palette.border.main}`};
        position: fixed;
        background: white;
        overflow-y: auto;
        overflow-x: hidden;
        height: calc(100vh - 100px);
        ul {
            border-right: none;
            height: 100%;
        }
    }
`;

export const ContentAndFooterLayout = styled(TransparentLayout)<{marginleft?: string}>`
    margin-left: ${({marginleft}) => marginleft};

    transition: margin-left 0.2s;
`;

export const PaddedContent = styled(Layout.Content)<{layoutVariant?: LayoutVariant}>`
    && {
        max-width: ${({theme, layoutVariant}) => (layoutVariant === 'app') ? 'initial' : theme.breakpoints.xl};
        margin: ${({theme, layoutVariant}) => (layoutVariant === 'app') ? 0 : '0 auto'};
        padding: ${({theme}) => `0 ${theme.spacing.lg} ${theme.spacing.xxl}`};
        width: 100%;

        @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
            padding: ${({theme}) => `0 ${theme.spacing.sm}`};
        }
    }
`;

export const Page = styled.div`
    padding: ${({theme}) => `${theme.spacing.lg} 0`};
    min-height: 44rem;
`;

export const LayoutHeader = styled(Layout.Header)``;

export const LayoutFooter = styled(Layout.Footer)``;
