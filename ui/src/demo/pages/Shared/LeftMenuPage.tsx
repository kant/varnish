import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Menu } from 'antd';

import { AppRoute } from '../../AppRoute';
import {
    WhiteBackground,
    TransparentLayout,
    LeftMenu,
    LeftSider,
    PaddedContent,
    Page,
    Footer,
    InternalLink
} from '../../../lib/components';

interface Props {
    parentPath: string;
    routes: AppRoute[]
}

export class LeftMenuPage extends React.PureComponent<RouteComponentProps & Props> {
    render() {
        return (
            <TransparentLayout>
                <LeftSider>
                    <LeftMenu selectedKeys={[this.props.location.pathname]}>
                        {this.props.routes.map(({ path, label }) => (
                            <Menu.Item key={path}>
                                <InternalLink to={path}>{label}</InternalLink>
                            </Menu.Item>
                        ))}
                    </LeftMenu>
                </LeftSider>
                <ContentAndFooterArea>
                    <WhiteBackground>
                        <PaddedContent>
                            <Page>
                                <Switch>
                                    <Redirect from={this.props.parentPath} exact to={this.props.routes[0].path} />
                                    {this.props.routes.map(({ path, component }) => (
                                        <Route key={path} path={path} component={component} />
                                    ))}
                                </Switch>
                            </Page>
                        </PaddedContent>
                    </WhiteBackground>
                    <Footer />
                </ContentAndFooterArea>
            </TransparentLayout>
        )
    }
}

const ContentAndFooterArea = styled(TransparentLayout)`
    margin-left: 200px;
`;
