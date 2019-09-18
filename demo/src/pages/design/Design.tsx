import * as React from 'react';
import { RouteComponentProps } from 'react-router';

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
    Tabs
} from '..';
import {  LeftMenuPage } from '../shared';
import { AppRoute } from '../../AppRoute';

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

export class Design extends React.PureComponent<RouteComponentProps> {
    parentPath = '/design';
    routes: AppRoute[] = [
        {
            path: `${this.parentPath}/colors`,
            label: 'Colors',
            component: Colors,
            iconSrc: colorIcon
        },
        {
            path: `${this.parentPath}/palette`,
            label: 'Palette',
            component: Palette,
            iconSrc: paletteIcon
        },
        {
            path: `${this.parentPath}/typography`,
            label: 'Typography',
            component: Typography,
            iconSrc: textIcon
        },
        {
            path: `${this.parentPath}/buttons`,
            label: 'Buttons',
            component: Buttons,
            iconSrc: buttonsIcon
        },
        {
            path: `${this.parentPath}/links`,
            label: 'Links',
            component: Links,
            iconSrc: linksIcon
        },
        {
            path: `${this.parentPath}/forms`,
            label: 'Forms',
            component: Forms,
            iconSrc: tutorialsIcon
        },
        {
            path: `${this.parentPath}/icons`,
            label: 'Icons',
            component: Icons,
            iconSrc: icons2Icon
        },
        {
            path: `${this.parentPath}/spacing`,
            label: 'Spacing',
            component: Spacing,
            iconSrc: spacingIcon
        },
        {
            path: `${this.parentPath}/breakpoints`,
            label: 'Breakpoints',
            component: Breakpoints,
            iconSrc: breakpointIcon
        },
        {
            path: `${this.parentPath}/headers`,
            label: 'Header & Footer',
            component: Headers,
            iconSrc: headerFooterIcon
        },
        {
            path: `${this.parentPath}/tables`,
            label: 'Tables',
            component: Tables,
            iconSrc: tablesIcon
        },
        {
            path: `${this.parentPath}/modals`,
            label: 'Modal',
            component: Modal,
            iconSrc: modalIcon
        },
        {
            path: `${this.parentPath}/tabs`,
            label: 'Tabs',
            component: Tabs,
            iconSrc: tabIcon
        }
    ];

    render() {
        return (
            <LeftMenuPage {...this.props} routes={this.routes} parentPath={this.parentPath}/>
        )
    }
}
