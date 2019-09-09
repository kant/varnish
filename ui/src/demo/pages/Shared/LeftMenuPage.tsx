import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';

import { AppRoute } from '../../AppRoute';
import {
    Layout,
    LeftMenu,
    LeftSider,
    Footer,
    InternalLink,
    LeftMenuItem,
    Content,
    Wrapping,
    BodySmall,
    IconMenuItemColumns,
    ImgIcon
} from '../../../lib/components';

interface Props {
    parentPath: string;
    routes: AppRoute[];
}

interface State {
    menuCollapsed: boolean;
}

export class LeftMenuPage extends React.PureComponent<RouteComponentProps & Props, State> {
    siderWidthExpanded = '200px';
    /**
     * TODO: Figure out why this must be 80px, and no other value, antd
     * sets this explicitly in CSS, so I'm not sure why the collapsedWidth
     * property is provided.
     */
    siderWidthCollapsed = '80px';
    constructor(props: RouteComponentProps & Props){
        super(props);

        this.state = {
            menuCollapsed: false
        }
    }

    handleMenuCollapse = () => {
        this.setState({ menuCollapsed: !this.state.menuCollapsed });
    }

    render() {
        // If the user navigates directly to the parent path, we "redirect". For
        // some reason the redirect doesn't update the location, so we need to
        // explicitly handle this when setting the active navigation.
        const activePath =
            this.props.location.pathname === this.props.parentPath
                ? this.props.routes[0].path
                : this.props.location.pathname;
        return (
            <Layout>
                <LeftSider
                    collapsible
                    width={this.siderWidthExpanded}
                    collapsedWidth={this.siderWidthCollapsed}
                    collapsed={this.state.menuCollapsed}
                    onCollapse={this.handleMenuCollapse}>
                    <LeftMenu
                        defaultSelectedKeys={[ activePath ]}>
                        {this.props.routes.map(({ path, label, iconSrc }) => (
                            <LeftMenuItem spacing={'md'} key={path}>
                                <InternalLink to={path}>
                                    {!this.state.menuCollapsed
                                        ? (
                                            <IconMenuItemColumns>
                                                <ImgIcon src={iconSrc} />
                                                <Wrapping>
                                                    <BodySmall>
                                                        {label}
                                                    </BodySmall>
                                                </Wrapping>
                                            </IconMenuItemColumns>
                                        )
                                        : (
                                            <React.Fragment>
                                                <ImgIcon src={iconSrc} />
                                                <span>{label}</span>
                                            </React.Fragment>
                                        )
                                    }
                                </InternalLink>
                            </LeftMenuItem>
                        ))}
                    </LeftMenu>
                </LeftSider>
                <Layout>
                    <Content>
                        <Switch>
                            <Redirect from={this.props.parentPath} exact to={this.props.routes[0].path} />
                            {this.props.routes.map(({ path, component }) => (
                                <Route key={path} path={path} component={component} />
                            ))}
                        </Switch>
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        )
    }
}
