import * as React from 'react';
import styled from 'styled-components';

import microLogo from './logo-ai2-micro-25.svg';
import { MaxWidthCenteredContent } from './MaxWidthCenteredContent';
import { LayoutVariant } from './Layout';

export const AI2Banner = React.forwardRef<HTMLDivElement, {layout?: LayoutVariant}>(
    (props, ref) => (
        <DarkBanner ref={ref}>
            <MaxWidthCenteredContent layout={props.layout}>
                <a href="https://allenai.org">
                    <Logo
                        src={microLogo}
                        width="412"
                        height="25"
                        alt="Allen Institute for Artificial Intelligence"
                    />
                </a>
            </MaxWidthCenteredContent>
        </DarkBanner>
    )
);

const Logo = styled.img`
    display: block;
    max-width: 100%;
`;

const DarkBanner = styled.div`
    background: ${({theme}) => theme.palette.background.dark};
    padding: ${({theme}) => `${theme.spacing.xxs} 0`};
`;
