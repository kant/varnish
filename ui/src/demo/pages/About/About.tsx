import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { ParagraphWithSpace, ExternalLink, BodyBig, Headline2 } from '../../../lib/components';
import { FullPage } from '../Shared/FullPage'

export class About extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <FullPage {...this.props}>
                <Headline2>
                    Welcome
                </Headline2>
                <br />
                <BodyBig>
                    <div>
                        This is a demonstration of
                        {' '}<ExternalLink href="https://github.com/allenai/varnish">Varnish</ExternalLink>,
                        a custom theme provider for both
                        {' '}<ExternalLink href="https://ant.design">Ant Design</ExternalLink>
                        and
                        {' '}<ExternalLink href="https://www.styled-components.com/">Styled-Components</ExternalLink>.
                    </div>
                    <ParagraphWithSpace>
                        Varnish provides common AI2 Styled-Components, components, and utilities.
                    </ParagraphWithSpace>
                    <div>
                        Varnish is derived from the
                        {' '}<ExternalLink href="https://github.com/allenai/skiff-template">Skiff Template</ExternalLink>.
                        Skiff provides a <ExternalLink href="https://www.python.org/">Python</ExternalLink>
                        {' '}based API and a UI constructed with
                        {' '}<ExternalLink href="https://www.typescriptlang.org/">TypeScript</ExternalLink>,
                        {' '}<ExternalLink href="https://reactjs.org/">ReactJS</ExternalLink>,
                        and <ExternalLink href="https://ant.design/">Ant Design</ExternalLink>.
                    </div>
                    <ParagraphWithSpace>
                        It is deployed to a Google managed Kubernetes cluster and provides
                        DNS, log aggregation, TLS and other capabilties out of the box,
                        thanks to the
                        {' '}<ExternalLink href="https://github.com/allenai/skiff">Skiff</ExternalLink>
                        {' '}project.
                    </ParagraphWithSpace>
                    <ParagraphWithSpace>
                        If you have any questions, concerns or feedback please don't
                        hesitate to reach out. You can open a
                        {' '}<ExternalLink href="https://github.com/allenai/skiff-template/issues/new">Github Issue</ExternalLink>
                        {' '}or contact us at
                        {' '}<ExternalLink href="mailto:reviz@allenai.org">reviz@allenai.org</ExternalLink>.
                    </ParagraphWithSpace>
                </BodyBig>
            </FullPage>
        )
    }
}


