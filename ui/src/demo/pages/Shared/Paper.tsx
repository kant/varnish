import * as React from 'react';
import styled from 'styled-components';

export const LightPaper = styled.div`
    max-width: max-content;
    background: ${({theme}) => theme.palette.background.light};
    padding: ${({theme}) => theme.spacing.md};
    border-radius: ${({theme}) => `${theme.shape.borderRadius}px`};
`;

export const DarkPaper = styled(LightPaper)`
    background: ${({theme}) => theme.palette.background.dark};
    color: ${({theme}) => theme.palette.text.contrast};
`;

export const WhitePaper = styled(LightPaper)`
    background: ${({theme}) => theme.palette.common.white};
`;
