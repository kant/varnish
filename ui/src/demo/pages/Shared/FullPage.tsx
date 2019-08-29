import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import {
    Layout,
    PaddedContent,
    Page,
    Footer
} from '../../../lib/components';


interface Props {
    children: React.ReactNode | React.ReactNodeArray
}

export class FullPage extends React.PureComponent<RouteComponentProps & Props> {
    render() {
        return (
            <Layout bgcolor="white">
                <PaddedContent>
                    <Page>
                        {this.props.children}
                    </Page>
                </PaddedContent>
                <Footer />
            </Layout>
        )
    }
}
