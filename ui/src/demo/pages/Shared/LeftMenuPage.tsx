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
    ContentAndFooterLayout,
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
    siderWidthExpanded = '12rem';
    siderWidthCollapsed = '5rem';
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
        return (
            <Layout>
                <LeftSider
                    width={this.siderWidthExpanded}
                    collapsedWidth={this.siderWidthCollapsed}
                    collapsible
                    collapsed={this.state.menuCollapsed}
                    onCollapse={this.handleMenuCollapse}>
                    <LeftMenu
                        defaultSelectedKeys={[this.props.location.pathname]}>
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
                                                <ImgIcon src={iconSrc} /><span>{label}</span>
                                            </React.Fragment>
                                        )
                                    }
                                </InternalLink>
                            </LeftMenuItem>
                        ))}
                    </LeftMenu>
                </LeftSider>
                <ContentAndFooterLayout marginleft={this.state.menuCollapsed ? this.siderWidthCollapsed : this.siderWidthExpanded}>
                    <Content>
                        <Switch>
                            <Redirect from={this.props.parentPath} exact to={this.props.routes[0].path} />
                            {this.props.routes.map(({ path, component }) => (
                                <Route key={path} path={path} component={component} />
                            ))}
                        </Switch>
                    </Content>
                    <Footer />
                </ContentAndFooterLayout>
            </Layout>
        )
    }
}
