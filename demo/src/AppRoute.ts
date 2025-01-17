import { ComponentType } from 'react';
import { Color } from '@allenai/varnish/theme';

export interface AppRoute {
    /* The url path, i.e. in the url `http://localhost/about`, `/about` is the path. */
    path: string;

    exact?: boolean;

    /* The name of the route that's displayed in the navigation. */
    label: string;

    /* The component that's rendered when that route is active. */
    component: ComponentType<any>;

    /* props to pass to component */
    componentProps?: any;

    /* gray out in menu */
    disabled?: boolean;

    /* an optional tag we can display next to the link, eg. NEW */
    tag?: { label: string; color: Color };

    /* icon to display */
    iconSrc?: string;
}

export interface AppRouteGroup {
    /* The name of the route that's displayed in the navigation. */
    label: string;

    /* icon to display */
    iconSrc?: string;

    /* routes that are in this group */
    routes: AppRoute[];
}
