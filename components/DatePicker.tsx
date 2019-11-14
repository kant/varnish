import React from 'react';
import styled from 'styled-components';
import * as Antd from 'antd';

import calenderIronSrc from './icons/form-calendar.svg';

export const DatePicker = styled(Antd.DatePicker).attrs(() => ({
    suffixIcon: <img src={calenderIronSrc} />
}))`
    width: 100%;

    input {
        padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
        height: initial;
        font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
    }
`;
