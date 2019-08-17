import * as React from 'react';
import styled from 'styled-components';
import { LayoutVariant } from './Layout';

export const MaxWidthCenteredContent = styled.div<{layoutVariant?: LayoutVariant}>`
    max-width: ${({theme, layoutVariant}) => (layoutVariant !== 'app') ? theme.breakpoints.xl : undefined};
    margin: 0 auto;
    padding: ${({theme}) => `0 ${theme.spacing.lg}`};

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        padding: ${({theme}) => `0 ${theme.spacing.sm}`};
    }
`;
