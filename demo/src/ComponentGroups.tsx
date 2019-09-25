import * as React from 'react';
import { DefaultVarnishTheme } from '@allenai/varnish/theme';

import { AppRoute, AppRouteGroup } from './AppRoute';
import {
    Breakpoints,
    Buttons,
    Colors,
    Forms,
    Headers,
    Icons,
    Links,
    Modal,
    Palette,
    Spacing,
    Typography,
    Tables,
    Tabs,
    About
} from './pages';

// menu icons
import colorIcon from './icons/color-14px.svg';
import paletteIcon from './icons/palette-14px.svg';
import textIcon from './icons/text-14px.svg';
import buttonsIcon from './icons/buttons-14px.svg';
import linksIcon from './icons/links-14px.svg';
import tutorialsIcon from './icons/tutorials-14px.svg';
import icons2Icon from './icons/icons-2-14px.svg';
import spacingIcon from './icons/spacing-14px.svg';
import breakpointIcon from './icons/breakpoint-14px.svg';
import headerFooterIcon from './icons/header-footer-14px.svg';
import tablesIcon from './icons/tables-14px.svg';
import modalIcon from './icons/modal-2-14px.svg';
import tabIcon from './icons/tab-14px.svg';

// these will be shown outside of a group
export const topLevelRoutes: AppRoute[] = [
    {
        path: '/',
        exact: true,
        label: 'Welcome',
        iconSrc: paletteIcon,
        component: About
    }
];

const componentRoot = '/components';
export const componentGroups: AppRouteGroup[] = [
    {
        label: 'Visual',
        routes: [
            {
                path: `${componentRoot}/colors`,
                label: 'Colors',
                iconSrc: colorIcon,
                component: Colors
            },
            {
                path: `${componentRoot}/palette`,
                label: 'Palette',
                iconSrc: paletteIcon,
                component: Palette
            }
        ]
    },
    {
        label: 'General',
        routes: [
            {
                path: `${componentRoot}/buttons`,
                label: 'Buttons',
                iconSrc: buttonsIcon,
                component: Buttons
            },
            {
                path: `${componentRoot}/icons`,
                label: 'Icons',
                iconSrc: icons2Icon,
                component: Icons
            },
            {
                path: `${componentRoot}/typography`,
                label: 'Typography',
                iconSrc: textIcon,
                component: Typography
            },
            {
                path: `${componentRoot}/links`,
                label: 'Links',
                iconSrc: linksIcon,
                component: Links
            }
        ]
    },
    {
        label: 'Layout',
        routes: [
            {
                path: `${componentRoot}/spacing`,
                label: 'Spacing',
                iconSrc: spacingIcon,
                component: Spacing
            },
            {
                path: `${componentRoot}/breakpoints`,
                label: 'Breakpoints',
                iconSrc: breakpointIcon,
                component: Breakpoints
            },
            {
                path: `${componentRoot}/grid`,
                label: 'Grid',
                iconSrc: tablesIcon,
                component: Breakpoints,
                disabled: true,
                tag: {label: 'Coming Soon', color: DefaultVarnishTheme.color.B4}
            },
            {
                path: `${componentRoot}/layout`,
                label: 'Layout',
                iconSrc: headerFooterIcon,
                component: Breakpoints,
                disabled: true,
                tag: {label: 'Coming Soon', color: DefaultVarnishTheme.color.B4}
            }
        ]
    },
    {
        label: 'Navigation',
        routes: [
            {
                path: `${componentRoot}/headers`,
                label: 'Header & Footer',
                iconSrc: headerFooterIcon,
                component: Headers
            },
        ]
    },
    {
        label: 'Data Entry',
        routes: [
            {
                path: `${componentRoot}/forms`,
                label: 'Forms',
                iconSrc: tutorialsIcon,
                component: Forms
            }
        ]
    },
    {
        label: 'Data Display',
        routes: [
            {
                path: `${componentRoot}/tabs`,
                label: 'Tabs',
                iconSrc: tabIcon,
                component: Tabs,
                tag: {label: 'NEW', color: DefaultVarnishTheme.color.O4}
            },
            {
                path: `${componentRoot}/tables`,
                label: 'Tables',
                iconSrc: tablesIcon,
                component: Tables
            },
        ]
    },
    {
        label: 'Feedback',
        routes: [
            {
                path: `${componentRoot}/modals`,
                label: 'Modal',
                iconSrc: modalIcon,
                component: Modal
            },
        ]
    }
];
