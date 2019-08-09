import * as React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import { Body } from './typography';
import { ExternalLink } from './link/ExternalLink';

export type FooterVariant = 'default' | 'dark';

interface Props {
    variant?: FooterVariant;
    children?: React.ReactNode | React.ReactNodeArray;
}

export class Footer extends React.PureComponent<Props> {
    render() {
        let contrast = this.props.variant === 'dark';
        return (
            <StyledFooter contrast={contrast}>
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

const StyledFooter = styled(Layout.Footer)<({contrast: boolean})>`
    && {
        background: ${({theme, contrast}) => contrast ? theme.palette.background.dark : theme.palette.background.light};
        color: ${({theme, contrast}) => contrast ? theme.palette.text.contrast : theme.palette.text.default};
        text-align: center;
    }
`;
