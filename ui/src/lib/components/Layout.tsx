
import * as React from 'react';
import styled from 'styled-components';
import { Layout as AntLayout } from 'antd';
import { SiderProps } from 'antd/lib/layout/Sider';
import { BasicProps } from 'antd/lib/layout/layout';

import { convertPixelsToRem } from '../utils/base';
import { LayoutVariant, LayoutContext } from '../layout';

export const LayoutHeader = styled(AntLayout.Header)``;

export const LayoutFooter = styled(AntLayout.Footer)``;

export const Layout = styled(AntLayout)<{ bgcolor?: string }>`
    && {
        background: ${({theme, bgcolor}) => bgcolor ? theme.color[bgcolor] : 'none'}
    }
`;

export const ContentAndFooterLayout = styled(Layout)<{marginleft?: string}>`
    margin-left: ${({marginleft}) => marginleft};
    transition: margin-left 0.2s;
`;

const StyledSider = styled(AntLayout.Sider)`
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
    max-width: ${({theme, layout}) => (layout === 'default') ? theme.breakpoints.xl : undefined};
    ${({ layout }) => layout === 'default' ? 'margin: 0 auto;' : ''}
    padding: ${({theme}) => theme.spacing.lg};

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        padding: ${({theme}) => theme.spacing.sm};
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
