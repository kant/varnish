import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import {
    ResponsiveWindowImage,
    Layout,
    InternalLink,
    LeftMenu,
    LeftSider,
    Footer,
    LeftMenuItem,
    Content,
    Wrapping,
    BodySmall,
    IconMenuItemColumns,
    ImgIcon,
    Header,
    HeaderColumns,
    HeaderSubTitle
} from '@allenai/varnish/components';
import { DefaultLayoutProvider } from '@allenai/varnish/layout';
import { Tag } from 'antd';

import { AppRoute, AppRouteGroup } from './AppRoute';
import { topLevelRoutes, componentGroups } from './ComponentGroups';

import packageJson from '../../package.json';
import logoWithText from './varnishLogo.svg';

const ROUTES: AppRoute[] = [
    ...topLevelRoutes,
    ...componentGroups.reduce((acc: AppRoute[], c: AppRouteGroup) => acc.concat(c.routes), []) // flatmap
];

interface State {
    menuCollapsed: boolean;
}

export default class AppChrome extends React.PureComponent<RouteComponentProps, State> {
    siderWidthExpanded = '225px';
    /**
     * TODO: Figure out why this must be 80px, and no other value, antd
     * sets this explicitly in CSS, so I'm not sure why the collapsedWidth
     * property is provided.
     */
    siderWidthCollapsed = '80px';
    constructor(props: RouteComponentProps) {
        super(props);

        this.state = {
            menuCollapsed: false
        }
    }

    handleMenuCollapse = () => {
        this.setState({ menuCollapsed: !this.state.menuCollapsed });
    }

    render() {
        return (
            <DefaultLayoutProvider layoutVariant="app">
                <Layout bgcolor="white">
                    <Header>
                        <HeaderColumnsWithSpace gridTemplateColumns="auto auto 1fr">
                            <ResponsiveWindowImage
                                src={logoWithText}
                                wideWidth={"194px"}
                                skinnyWidth={"72px"}
                                height={"56px"}
                                alt="Varnish" />
                            <HeaderSubTitle>{packageJson.version}</HeaderSubTitle>
                        </HeaderColumnsWithSpace>
                    </Header>
                    <Layout>
                        <LeftSider
                            collapsible
                            width={this.siderWidthExpanded}
                            collapsedWidth={this.siderWidthCollapsed}
                            collapsed={this.state.menuCollapsed}
                            onCollapse={this.handleMenuCollapse}>
                            <LeftMenu
                                defaultSelectedKeys={[this.props.location.pathname]}
                                defaultOpenKeys={componentGroups.map(c => c.label)}>
                                {topLevelRoutes.map((route) => (
                                    <LeftMenuItem key={route.label} disabled={route.disabled}>
                                        <IconMenuItem route={route} menuCollapsed={this.state.menuCollapsed} />
                                    </LeftMenuItem>
                                ))}
                                <LeftMenu.Divider />
                                {componentGroups.map((group) => (
                                    <LeftMenu.ItemGroup
                                        key={group.label}
                                        title={!this.state.menuCollapsed
                                            ? (
                                                <Wrapping>
                                                    <BodySmall>
                                                        {group.label}
                                                    </BodySmall>
                                                </Wrapping>
                                            )
                                            : <LeftMenu.Divider />
                                        }>
                                        {group.routes.map((route) => (
                                            <LeftMenuItem key={route.label} disabled={route.disabled}>
                                                <IconMenuItem route={route} menuCollapsed={this.state.menuCollapsed} />
                                            </LeftMenuItem>
                                        ))}
                                    </LeftMenu.ItemGroup>
                                ))}
                            </LeftMenu>
                        </LeftSider>
                        <Layout>
                            <Content>
                                <Switch>
                                    {ROUTES.map(({ path, exact, component: Component, componentProps }) => (
                                        <Route exact={exact}
                                            key={path}
                                            path={path}
                                            render={(props: any) => (
                                                <Component {...props} {...componentProps} />
                                            )}
                                        />
                                    ))}
                                </Switch>
                            </Content>
                            <Footer />
                        </Layout>
                    </Layout>
                </Layout>
            </DefaultLayoutProvider>
        )
    }
}

const HeaderColumnsWithSpace = styled(HeaderColumns)`
    padding: 11.5px 0;
`;

const IconMenuItem = ({ route, menuCollapsed }: { route: AppRoute, menuCollapsed: boolean }) => {
    return (
        <InternalLink to={route.path}>
            {!menuCollapsed
                ? (
                    <IconMenuItemColumns>
                        {route.iconSrc ? <ImgIcon src={route.iconSrc} /> : null}
                        <Wrapping>
                            <BodySmall>
                                {route.label}
                                {route.tag
                                    ? <React.Fragment>{`  `}<Tag color={route.tag.color.toString()}>{route.tag.label}</Tag></React.Fragment>
                                    : null}
                            </BodySmall>
                        </Wrapping>
                    </IconMenuItemColumns>
                )
                : (
                    <React.Fragment>
                        {route.iconSrc ? <ImgIcon src={route.iconSrc} /> : null}<span>{route.label}</span>
                    </React.Fragment>
                )
            }
        </InternalLink>
    )
}
