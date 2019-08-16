import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';

import { AppRoute } from '../../AppRoute';
import {
    TransparentLayout,
    LeftMenu,
    LeftSider,
    PaddedContent,
    Page,
    Footer,
    InternalLink,
    LeftMenuItem,
    ContentAndFooterLayout,
    Wrapping,
    BodySmall,
    IconMenuItemColumns,
    Icon
} from '../../../lib/components';

interface Props {
    parentPath: string;
    routes: AppRoute[]
}

interface State {
    menuCollapsed: boolean;
}

export class LeftMenuPage extends React.PureComponent<RouteComponentProps & Props, State> {
    siderWidthExpanded = '14rem';
    siderWidthCollapsed = '5rem';
    constructor(props: RouteComponentProps & Props){
        super(props);

        this.state = {
            menuCollapsed: false
        }
    }

    handleMenuCollapse = () => {
        this.setState({menuCollapsed: !this.state.menuCollapsed});
    }

    render() {
        return (
            <TransparentLayout>
                <LeftSider
                    width={this.siderWidthExpanded}
                    collapsedWidth={this.siderWidthCollapsed}
                    collapsible
                    collapsed={this.state.menuCollapsed}
                    onCollapse={this.handleMenuCollapse}>
                    <LeftMenu
                        defaultSelectedKeys={[this.props.location.pathname]}>
                        {this.props.routes.map(({ path, label, icon }) => (
                            <LeftMenuItem spacing={'lg'} key={path}>
                                <InternalLink to={path}>
                                    {!this.state.menuCollapsed
                                       ? (
                                        <IconMenuItemColumns>
                                            <Icon type={icon} />
                                            <Wrapping>
                                                <BodySmall>
                                                    {label}
                                                </BodySmall>
                                            </Wrapping>
                                        </IconMenuItemColumns>
                                    )
                                    : (
                                        <React.Fragment>
                                             <Icon type={icon} /><span>{label}</span>
                                        </React.Fragment>
                                    )
                                    }
                                </InternalLink>
                            </LeftMenuItem>
                        ))}
                    </LeftMenu>
                </LeftSider>
                <ContentAndFooterLayout marginleft={this.state.menuCollapsed ? this.siderWidthCollapsed : this.siderWidthExpanded}>
                    <PaddedContent variant={'app'}>
                        <Page>
                            <Switch>
                                <Redirect from={this.props.parentPath} exact to={this.props.routes[0].path} />
                                {this.props.routes.map(({ path, component }) => (
                                    <Route key={path} path={path} component={component} />
                                ))}
                            </Switch>
                        </Page>
                    </PaddedContent>
                    <Footer />
                </ContentAndFooterLayout>
            </TransparentLayout>
        )
    }
}
