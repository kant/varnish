
import * as React from 'react';
import styled from 'styled-components';
import { Layout as AntLayout } from 'antd';
import { SiderProps } from 'antd/lib/layout/Sider';
import { BasicProps } from 'antd/lib/layout/layout';

import { LayoutVariant, LayoutContext } from '../layout';

export const LayoutHeader = styled(AntLayout.Header)``;

export const LayoutFooter = styled(AntLayout.Footer)``;

export const Layout = styled(AntLayout)<{ bgcolor?: string }>`
    && {
        background: ${({theme, bgcolor}) => bgcolor ? theme.color[bgcolor] : 'none'}
    }
`;

interface ContentProps extends BasicProps {
    children: React.ReactNode | React.ReactNodeArray;
    className?: string;
}

export const Content = ({ children, className, ...basicProps }: ContentProps) => (
    <LayoutContext.Consumer>
        {({ layoutVariant }) => (
            <ContentContainer
                layout={layoutVariant}
                className={className}
                {...basicProps}
            >
                {children}
            </ContentContainer>
        )}
    </LayoutContext.Consumer>
);

const ContentContainer = styled(AntLayout.Content)<{layout?: LayoutVariant}>`
    max-width: ${({theme, layout}) => (layout === 'hcenter') ? theme.breakpoints.xl : undefined};
    width: 100%;
    ${({ layout }) => layout === 'hcenter' ? 'margin: 0 auto;' : ''}
    padding: ${({theme}) => theme.spacing.lg};

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        padding: ${({theme}) => theme.spacing.sm};
    }
`;

interface LeftSiderProps extends SiderProps {
    width: number | string;
    collapsedWidth: number | string;
}

export const LeftSider = (props: LeftSiderProps) => (
    <LayoutContext.Consumer>
        {({ currentHeaderHeight }) => (
            <StyledLeftSider
                trigger={null}
                breakpoint="md"
                {...props}
            >
                <FixedContainer
                    paddingTop={currentHeaderHeight}
                    breakpoint={props.breakpoint || "md"}
                    width={props.width}
                    collapsedWidth={props.collapsedWidth}
                >
                    {props.children}
                </FixedContainer>
            </StyledLeftSider>
        )}
    </LayoutContext.Consumer>

);

const StyledLeftSider = styled(AntLayout.Sider)`
    background: ${({ theme }) => theme.color.white};
    transition: none;
`;

const FixedContainer = styled.div<{ paddingTop: number, width: number | string, collapsedWidth: number | string, breakpoint: string }>`
    border-right: 1px solid ${({ theme }) => theme.palette.border.main};
    position: fixed;
    top: 0;
    bottom: 0;
    width: ${({ width }) => width};
    padding-top: ${({ paddingTop }) => paddingTop}px;
    transition: padding-top 200ms ease-in-out;
    overflow: auto;

    @media screen and (max-width: ${({ theme, breakpoint }) => theme.breakpoints[breakpoint]}) {
        width: ${({ collapsedWidth }) => collapsedWidth};
    }
`;
