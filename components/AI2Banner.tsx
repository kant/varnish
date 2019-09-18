import * as React from 'react';
import styled from 'styled-components';

import { Content } from './Layout';
import { LayoutVariant } from '../layout';

import microLogo from './logo-ai2-micro-25.svg';

export const AI2Banner = React.forwardRef<HTMLDivElement, {layout?: LayoutVariant}>(
    (props, ref) => (
        <DarkBanner ref={ref}>
            <BannerContent>
                <BannerLink href="https://allenai.org">
                    <Logo
                        src={microLogo}
                        width="412"
                        height="25"
                        alt="Allen Institute for Artificial Intelligence"
                    />
                </BannerLink>
            </BannerContent>
        </DarkBanner>
    )
);

const BannerLink = styled.a`
    display: inline-block;
`;

const BannerContent = styled(Content)`
    padding-top: 0;
    padding-bottom: 0;
`;

const Logo = styled.img`
    display: inline-block;
    max-width: 100%;
`;

const DarkBanner = styled.div`
    background: ${({theme}) => theme.palette.background.dark};
    padding: ${({theme}) => `${theme.spacing.xxs} 0`};
    line-height: 1;
`;
