import * as React from 'react';
import styled from 'styled-components';

export const SectionWithDivider = styled.section`
    padding-top: ${({theme}) => theme.spacing.xl};
    margin-top: ${({theme}) => theme.spacing.xl};
    border-top: 1px solid ${({theme}) => theme.palette.border.main};
`;
