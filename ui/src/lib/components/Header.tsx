import * as React from 'react';
import styled from 'styled-components';

import { Columns } from './Columns';
import { LayoutHeader, LayoutVariant } from './Layout';
import { MaxWidthCenteredContent } from './MaxWidthCenteredContent';
import { AI2Banner } from './AI2Banner';


interface Props {
    alwaysVisible?: boolean;
    children: React.ReactNode | React.ReactNodeArray;
    layout?: LayoutVariant;
}

interface State {
    // isMobileNavVisible: boolean; // todo: support showing a different menu based on breakpoint
    isCollapsed: boolean;
}

export class Header extends React.PureComponent<Props, State> {
    private banner: React.RefObject<HTMLDivElement>;
    private lastScrollY: number = 0;

    constructor(props: Props) {
        super(props);
        this.state = {
            isCollapsed: false
        };
        this.banner = React.createRef();
    }

    onScroll = () => {
        // This implements logic that:
        //  1. If the user scrolls down the page, at all, the AI2 banner at the top is hidden.
        //  2. If the user scrolls up, at all, the AI2 banner becomes visible again.
        if (this.banner.current !== null) {
            const distance = window.scrollY - this.lastScrollY;
            this.lastScrollY = window.scrollY;
            if ( distance < 0 ) {
                this.setState({ isCollapsed: false });
            } else {
                this.setState({ isCollapsed: true });
            }
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    getTopOffset() {
        if (!this.props.alwaysVisible && this.state.isCollapsed && this.banner.current !== null) {
            return (
                -1 *
                (this.banner.current.getBoundingClientRect().height -
                    parseFloat(
                        window.getComputedStyle(this.banner.current).paddingBottom || "0"
                    ))
            );
        }
        return 0;
    }

    render() {
        return (
            <Sticky style={{ top: `${this.getTopOffset()}px` }}>
                <AI2Banner ref={this.banner} layout={this.props.layout} />
                <Content layout={this.props.layout}>
                    {this.props.children}
                </Content>
            </Sticky>
        )
    }
}

const Content = styled(MaxWidthCenteredContent)<{layout?: LayoutVariant}>`
    display: flex;
    align-items: center;
`;

const Sticky = styled(LayoutHeader)`
    && {
        position: sticky;
        top: 0;
        background: white;
        z-index: 1;
        width: 100%;
        box-shadow: 0px 4px 16px rgba(10, 41, 57, 0.08);
        height: initial; /* Ant sets a height, we need to unset that. */
        padding: 0;
        transition: top 200ms ease-in-out;
    }
`;

export const HeaderColumns = styled(Columns).attrs({
    breakpoint: 'xs'
})`
    width: 100%;
    align-items: center;
`;

export const HeaderTitle = styled.h5`
    margin: 0;
    font-size: 1.9rem;
    line-height: 1.65rem;
    @media (max-width: ${({theme}) => theme.breakpoints.xs}) {
        font-size: 1.75rem;
        line-height: 1.5rem;
    }
`;

export const HeaderSubTitle = styled(HeaderTitle)`
    text-transform: none;
`;
