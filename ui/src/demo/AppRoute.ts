import { ComponentType } from 'react';

export interface AppRoute {
    path: string;
    exact?: boolean;
    label: string;
    component: ComponentType<any>;
    iconSrc: string;
}
