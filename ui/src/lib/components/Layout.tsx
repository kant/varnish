
import * as React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { SiderProps } from 'antd/lib/layout/Sider';
import { convertPixelsToRem } from '../utils/base';

export type LayoutVariant = 'app' | 'default' | 'demo';

export const LayoutHeader = styled(Layout.Header)``;

export const LayoutFooter = styled(Layout.Footer)``;

export const BackgroundLayout = styled(Layout)<{ color?: string }>`
    && {
        background: ${({theme, color}) => color ? theme.color[color] : 'none'}
    }
`;

export const ContentAndFooterLayout = styled(BackgroundLayout)<{marginleft?: string}>`
    margin-left: ${({marginleft}) => marginleft};

    transition: margin-left 0.2s;
`;

export const PaddedContent = styled(Layout.Content)<{layout?: LayoutVariant}>`
    && {
        max-width: ${({theme, layout}) => (layout === 'app') ? 'initial' : theme.breakpoints.xl};
        margin: ${({theme, layout}) => (layout === 'app') ? 0 : '0 auto'};
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

const StyledSider = styled(Layout.Sider)`
    && {
        border-right: ${({theme}) => `1px solid ${theme.palette.border.main}`};
        position: fixed;
        background: white;
        overflow-y: auto;
        overflow-x: hidden;
        ul {
            border-right: none;
            height: 100%;
        }
    }
`;

interface LeftSiderProps extends SiderProps {
    alwaysVisible?: boolean;
    children: React.ReactNode | React.ReactNodeArray;
}
interface LeftSiderState {
    isCollapsed: boolean;
}
export class LeftSider extends React.PureComponent<LeftSiderProps, LeftSiderState> {
    private elRef: React.RefObject<React.PureComponent<LeftSiderProps>>;
    private lastScrollY: number = 0;

    constructor(props: LeftSiderProps) {
        super(props);
        this.state = {
            isCollapsed: false
        };
        this.elRef = React.createRef();
    }

    onScroll = () => {
        if (this.elRef.current !== null) {
            const distance = window.scrollY - this.lastScrollY;
            this.lastScrollY = window.scrollY;
            const isCollapsed = distance > 0 && window.scrollY > 15; // > 15 is a hack because the header does not scroll properly at the start
            this.setState({ isCollapsed })
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    getStyle() {
        let top = 125; // magic numbers are from inspecting the header.... we could pass them in
        if (!this.props.alwaysVisible && this.state.isCollapsed && this.elRef.current !== null) {
           top = 93;
        }
        return {
            top: convertPixelsToRem(top),
            height: `calc(100vh - ${convertPixelsToRem(top)})`,
            transition: 'top 200ms ease-in-out, height 200ms ease-in-out'
         };
    }

    render() {
        return (
            <StyledSider {
                ...this.props}
                breakpoint="md"
                trigger={null}
                ref={this.elRef}
                style={this.getStyle()}>
                {this.props.children}
            </StyledSider>
        )
    }
}
