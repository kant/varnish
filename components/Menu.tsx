
import * as React from 'react';
import styled, { StyledComponentBase } from 'styled-components';
import { Menu } from 'antd';

import { Columns } from './Columns';

// Styled version of Menu statics.
export const MenuSubMenu = styled(Menu.SubMenu)``;
export const MenuItem = styled(Menu.Item)``;
export const MenuDivider = styled(Menu.Divider)``;
export const MenuItemGroup = styled(Menu.ItemGroup)``;


// Menu Item styled for top menu
export const TopMenuItem = styled(MenuItem)`
    a:hover {
        text-decoration: none;
    }
`;

// Menu Item styled for left menu
export const LeftMenuItem = styled(MenuItem) <{ spacing?: string }>`
    &&& {
        height: auto;
        line-height: ${({ theme }) => theme.typography.body.lineHeight};
        padding-top: ${({ theme, spacing }) => theme.spacing[spacing || 'sm']};
        padding-bottom: ${({ theme, spacing }) => theme.spacing[spacing || 'sm']};
        margin: 0;
        transition: none;

        a:hover {
            text-decoration: none;
        }
    }
`;

// Menu Item columns for text with an icon
export const IconMenuItemColumns = styled(Columns).attrs({
    count: 2
})`
    grid-template-columns: min-content 1fr;
    justify-items: start;
    align-items: baseline;
    grid-gap: 0;
`;

// Our exported styled component version of AntTabs will need to have a reference to the styled
// component version of Menu.
// There is a type swap here, this makes typescript happy (Antd.Menu.SubMenu => MenuSubMenu).
// This is fine, since consumers will use the styled version and 'ref' grabs the inner component.
class VarnishMenu extends Menu {
    static SubMenu = MenuSubMenu as any;
    static Item = MenuItem as any;
}

// Styled left version of Menu.
const StyledLeftMenu = styled(VarnishMenu).attrs(() => ({
    mode: 'inline'
}))`
    border-right: none;
    transition: none;
    width: calc(100% - 1px);
`;

// Styled top version of Menu.
const StyledTopMenu = styled(VarnishMenu).attrs({
    mode: "horizontal"
})`
    && {
        display: flex;
        line-height: 77px;
        border-bottom: 0;
    }
`;

// AntTabs has static properties, but they are lost when converting to a styled component.
// This interface tells typescript about the styled component version of the statics.
interface WithStaticProps extends StyledComponentBase<typeof Menu, any, any, any> {
    SubMenu: typeof MenuSubMenu;
    Item: typeof MenuItem;
    Divider: typeof MenuDivider;
    ItemGroup: typeof MenuItemGroup;
}

// We trick Typescript here by first casting to unknown and then casting to the type we'd like to export.
// We do this so that the exported type includes the static properties, which we lose otherwise.
export const LeftMenu = StyledLeftMenu as unknown as WithStaticProps;
export const TopMenu = StyledTopMenu as unknown as WithStaticProps;
