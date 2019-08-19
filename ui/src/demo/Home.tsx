import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import packageJson from '../../package.json';
import logoWithText from './varnishLogo.svg';
import { About, Design } from './pages';
import { AppRoute } from './AppRoute';
import { ResponsiveWindowImage,
    BackgroundLayout,
    Header,
    TopMenu,
    InternalLink,
    Spacer,
    HeaderSubTitle,
    TopMenuItem,
    HeaderColumns
} from '../lib/components';

export default class Home extends React.PureComponent<RouteComponentProps> {
    routes: AppRoute[] = [
        {
            path: '/',
            exact: true,
            label: 'Welcome',
            component: About,
            icon: "home"
        },
        {
            path: '/design',
            label: 'Design',
            component: Design,
            icon: "ant-design"
        }
    ];

    render() {
        return (
            <BackgroundLayout color="white">
                <Header layout={'app'}>
                    <HeaderColumns gridTemplateColumns="auto auto 1fr auto">
                        <ResponsiveWindowImage
                            src={logoWithText}
                            wideWidth={"194px"}
                            skinnyWidth={"72px"}
                            height={"56px"}
                            alt="Varnish" />
                        <HeaderSubTitle>{packageJson.version}</HeaderSubTitle>
                        <Spacer />
                        <TopMenu
                            defaultSelectedKeys={[this.props.location.pathname]}>
                            {this.routes.map(({ path, label }) => (
                                <TopMenuItem key={path}>
                                    <InternalLink to={path}>{label}</InternalLink>
                                </TopMenuItem>
                            ))}
                        </TopMenu>
                    </HeaderColumns>
                </Header>
                <Switch>
                    {this.routes.map(({ path, exact, component }) => (
                        <Route key={path} path={path} exact={exact} component={component} />
                    ))}
                </Switch>
            </BackgroundLayout>
        );
    }
}
