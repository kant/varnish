import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {
    Layout,
    Content,
    Footer
} from '@allenai/varnish/components';

interface Props {
    children: React.ReactNode | React.ReactNodeArray
}

export class FullPage extends React.PureComponent<RouteComponentProps & Props> {
    render() {
        return (
            <Layout bgcolor="white">
                <Content>
                    {this.props.children}
                </Content>
                <Footer />
            </Layout>
        )
    }
}
