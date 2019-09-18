
import * as React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';

import { Columns } from './Columns';

export const TopMenu = styled(Menu).attrs({
    mode: "horizontal"
})`
    && {
        display: flex;
        line-height: 77px;
        border-bottom: 0;
    }
`;

export const MenuItem = styled(Menu.Item)``;

export const TopMenuItem = styled(MenuItem)`
    a:hover {
        text-decoration: none;
    }
`;

export const LeftMenu = styled(Menu).attrs(() => ({
    mode: 'inline'
}))`
    border-right: none;
    transition: none;
`;

export const LeftMenuItem = styled(MenuItem)<{spacing?: string}>`
    &&& {
        height: auto;
        line-height: ${({ theme }) => theme.typography.body.lineHeight};
        padding-top: ${({theme, spacing}) => theme.spacing[spacing || 'sm']};
        padding-bottom: ${({theme, spacing}) => theme.spacing[spacing || 'sm']};
        margin: 0;
        transition: none;

        a:hover {
            text-decoration: none;
        }
    }
`;

export const IconMenuItemColumns = styled(Columns).attrs({
    count: 2
})`
    grid-template-columns: min-content 1fr;
    justify-items: start;
    align-items: baseline;
    grid-gap: 0;
`;
