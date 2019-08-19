import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import {
    BackgroundLayout,
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
            <BackgroundLayout color="white">
                <PaddedContent>
                    <Page>
                        {this.props.children}
                    </Page>
                </PaddedContent>
                <Footer />
            </BackgroundLayout>
        )
    }
}
