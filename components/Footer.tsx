import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { palette } from '../theme/palette';
import { Color } from '../theme/colors';

/*
    NOTE: This must import `ExternalLink` individually, instead of using the
    barrel file (i.e. `import { ExternalLink } from './link'`), as otherwise
    `react-router-dom` is required by all users of the `Footer`. This ensures
    sites that use an alternative router (i.e. those powered by say, NextJS)
    to be able to use the `Footer`.
*/
import { ExternalLink } from './link/ExternalLink';
import { Body } from './typography';
import { LayoutFooter } from './Layout';
import { LayoutVariant, LayoutContext } from '../layout';

export type FooterVariant = 'default' | 'dark';

interface Props {
    variant?: FooterVariant;
    children?: React.ReactNode | React.ReactNodeArray;
    /* If true, the background of the parent "page" (the body and html elements)
       is adjusted to match that of the footer. */
    setPageBackground?: boolean;
    layout?: LayoutVariant;
    className?: string;
}

export class Footer extends React.PureComponent<Props> {
    static defaultProps = {
        setPageBackground: true
    };

    render() {
        const contrast = this.props.variant === 'dark' ? true : undefined;
        return (
            <LayoutContext.Consumer>
                {({ layoutVariant }) => (
                    <StyledFooter
                        contrast={contrast}
                        layout={layoutVariant}
                        className={this.props.className}>
                        {this.props.setPageBackground ? (
                            <WithPageBackground
                                color={
                                    contrast ? palette.background.dark : palette.background.light
                                }
                            />
                        ) : null}
                        {this.props.children ? (
                            this.props.children
                        ) : (
                            <Body>
                                <ExternalLink contrast={contrast} href="https://allenai.org">
                                    © The Allen Institute for Artificial Intelligence
                                </ExternalLink>{' '}
                                - All Rights Reserved |{' '}
                                <ExternalLink
                                    contrast={contrast}
                                    href="https://allenai.org/privacy-policy.html">
                                    Privacy Policy
                                </ExternalLink>{' '}
                                |{' '}
                                <ExternalLink
                                    contrast={contrast}
                                    href="https://allenai.org/terms.html">
                                    Terms of Use
                                </ExternalLink>
                            </Body>
                        )}
                    </StyledFooter>
                )}
            </LayoutContext.Consumer>
        );
    }
}

const WithPageBackground = createGlobalStyle<{ color: Color }>`
    html, body {
        background: ${({ color }) => `${color}`};
    }
`;

const StyledFooter = styled(LayoutFooter)<{ contrast?: boolean; layout?: LayoutVariant }>`
    && {
        background: ${({ theme, contrast }) =>
            contrast ? theme.palette.background.dark : theme.palette.background.light};
        color: ${({ theme, contrast }) =>
            contrast ? theme.palette.text.contrast : theme.palette.text.default};
        text-align: ${({ layout }) => (layout !== 'app' ? 'center' : null)};
    }
`;
