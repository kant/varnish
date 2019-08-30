import * as React from 'react';
import styled from 'styled-components';
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
import {  LeftMenuPage } from '../Shared';
import { AppRoute } from '../../AppRoute';


export class Design extends React.PureComponent<RouteComponentProps> {
    parentPath = '/design';
    routes: AppRoute[] = [
        {
            path: `${this.parentPath}/colors`,
            label: 'Colors',
            component: Colors,
            icon: "bg-colors"
        },
        {
            path: `${this.parentPath}/palette`,
            label: 'Palette',
            component: Palette,
            icon: "font-colors"
        },
        {
            path: `${this.parentPath}/typography`,
            label: 'Typography',
            component: Typography,
            icon: "font-size"
        },
        {
            path: `${this.parentPath}/buttons`,
            label: 'Buttons',
            component: Buttons,
            icon: "switcher"
        },
        {
            path: `${this.parentPath}/links`,
            label: 'Links',
            component: Links,
            icon: "branches"
        },
        {
            path: `${this.parentPath}/forms`,
            label: 'Forms',
            component: Forms,
            icon: "form"
        },
        {
            path: `${this.parentPath}/icons`,
            label: 'Icons',
            component: Icons,
            icon: "file-image"
        },
        {
            path: `${this.parentPath}/spacing`,
            label: 'Spacing',
            component: Spacing,
            icon: "column-width"
        },
        {
            path: `${this.parentPath}/breakpoints`,
            label: 'Breakpoints',
            component: Breakpoints,
            icon: "desktop"
        },
        {
            path: `${this.parentPath}/headers`,
            label: 'Header & Footer',
            component: Headers,
            icon: "border-outer"
        },
        {
            path: `${this.parentPath}/tables`,
            label: 'Tables',
            component: Tables,
            icon: "table"
        },
        {
            path: `${this.parentPath}/modals`,
            label: 'Modal',
            component: Modal,
            icon: "pic-center"
        },
        {
            path: `${this.parentPath}/tabs`,
            label: 'Tabs',
            component: Tabs,
            icon: "robot"
        }
    ];

    render() {
        return (
            <LeftMenuPage {...this.props} routes={this.routes} parentPath={this.parentPath}/>
        )
    }
}
