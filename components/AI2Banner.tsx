import * as React from 'react';
import styled from 'styled-components';

import { AI2Logo } from './';
import { Content } from './Layout';
import { LayoutVariant } from '../layout';

export const AI2Banner = React.forwardRef<HTMLDivElement, { layout?: LayoutVariant }>(
    (props, ref) => (
        <DarkBanner ref={ref}>
            <BannerContent>
                <BannerLink href="https://allenai.org">
                    <AI2Logo color="white" size="micro" />
                </BannerLink>
            </BannerContent>
        </DarkBanner>
    )
);

const BannerLink = styled.a`
    display: inline-block;
    padding: 5px 0 2px 0;
`;

const BannerContent = styled(Content)`
    padding-top: 0;
    padding-bottom: 0;
`;

const DarkBanner = styled.div`
    background: ${({ theme }) => theme.palette.background.dark};
    padding: ${({ theme }) => `${theme.spacing.xxs} 0`};
    line-height: 1;
`;
