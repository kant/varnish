import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { palette } from '../theme/palette'
import { Color } from '../theme/colors';

import { ExternalLink } from './link';
import { Body } from './typography';
import { LayoutFooter, LayoutVariant } from './Layout';

export type FooterVariant = 'default' | 'dark';

interface Props {
    variant?: FooterVariant;
    children?: React.ReactNode | React.ReactNodeArray;
    /* If true, the background of the parent "page" (the body and html elements)
       is adjusted to match that of the footer. */
    setPageBackground?: boolean;
    layout?: LayoutVariant;
}

export class Footer extends React.PureComponent<Props> {
    static defaultProps = {
        setPageBackground: true
    }
    render() {
        let contrast = this.props.variant === 'dark' ? true : undefined
        return (
            <StyledFooter contrast={contrast} layout={this.props.layout}>
                {this.props.setPageBackground ? (
                    <WithPageBackground
                        color={contrast
                            ? palette.background.dark
                            : palette.background.light} />
                ) : null}
                {this.props.children
                    ? this.props.children
                    : (
                        <Body>
                            Proudly built at the
                            {' '}<ExternalLink contrast={contrast} href="https://allenai.org">Allen Institute for Artificial Intelligence (AI2)</ExternalLink>
                            {' '}| <ExternalLink contrast={contrast} href="https://allenai.org/privacy-policy.html">Privacy Policy</ExternalLink>
                            {' '}| <ExternalLink contrast={contrast} href="https://allenai.org/terms.html">Terms of Use</ExternalLink>
                        </Body>
                    )
                }
            </StyledFooter>
        )
    }
}

const WithPageBackground = createGlobalStyle<{ color: Color }>`
    html, body {
        background: ${({ color }) => `${color}`};
    }
`;

const StyledFooter = styled(LayoutFooter)<{contrast?: boolean, layout?: LayoutVariant}>`
    && {
        background: ${({theme, contrast}) => contrast ? theme.palette.background.dark : theme.palette.background.light};
        color: ${({theme, contrast}) => contrast ? theme.palette.text.contrast : theme.palette.text.default};
        text-align: ${({layout}) => (layout !== 'app') ? 'center' : undefined};
    }
`;
