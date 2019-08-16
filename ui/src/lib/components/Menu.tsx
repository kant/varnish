
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
    }
`;

export const MenuItem = styled(Menu.Item)``;

export const TopMenuItem = styled(MenuItem)`
    &&& {
       
    }
`;


export const LeftMenu = styled(Menu).attrs({
    mode: "inline"
})``;

export const LeftMenuItem = styled(MenuItem)<{spacing?: string}>`
    &&& {
        height: initial;
        line-height: 1.4;
        padding-bottom: ${({theme, spacing}) => theme.spacing[spacing || 'sm']};
        padding-top: ${({theme, spacing}) => theme.spacing[spacing || 'sm']};
        margin-bottom: ${({theme, spacing}) => `-${theme.spacing[spacing || 'sm'].getRemValue() / 2}rem`};
        margin-top: ${({theme, spacing}) => `-${theme.spacing[spacing || 'sm'].getRemValue() / 2}rem`};
    }
`;

export const IconMenuItemColumns = styled(Columns).attrs({
    count: 2
})`
    grid-template-columns: min-content 1fr;
    justify-items: start;
    align-items: baseline;
    grid-gap: 0;

    svg {
        vertical-align: middle;
    }
`;
