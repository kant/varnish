import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { ResponsiveWindowImage,
    Layout,
    Header,
    TopMenu,
    InternalLink,
    Spacer,
    HeaderSubTitle,
    TopMenuItem,
    HeaderColumns
} from '@allenai/varnish/components';
import { DefaultLayoutProvider } from '@allenai/varnish/layout';

import packageJson from '../../package.json';
import logoWithText from './varnishLogo.svg';
import { About, Design } from './pages';
import { AppRoute } from './AppRoute';

export default class Home extends React.PureComponent<RouteComponentProps> {
    routes: AppRoute[] = [
        {
            path: '/',
            exact: true,
            label: 'Welcome',
            component: About
        },
        {
            path: '/design',
            label: 'Design',
            component: Design
        }
    ];
    render() {
        return (
            <DefaultLayoutProvider layoutVariant="app">
                <Layout bgcolor="white">
                    <Header>
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
                                defaultSelectedKeys={[`/${this.props.location.pathname.split('/')[1]}`]}>
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
                </Layout>
            </DefaultLayoutProvider>
        );
    }
}
