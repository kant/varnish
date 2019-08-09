import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import {
    TransparentLayout,
    PaddedContent,
    WhiteBackground,
    Page,
    Footer
} from '../../../lib/components';


interface Props {
    children: React.ReactNode | React.ReactNodeArray
}

export class FullPage extends React.PureComponent<RouteComponentProps & Props> {
    render() {
        return (
            <TransparentLayout>
                <WhiteBackground>
                    <PaddedContent>
                        <Page>
                            {this.props.children}
                        </Page>
                    </PaddedContent>
                </WhiteBackground>
                <Footer />
            </TransparentLayout>
        )
    }
}
