import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ExternalLink, Body } from '@allenai/varnish/components';

export class About extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <h2> Welcome </h2>
                <br />
                <Body>
                    <p>
                        This is a demonstration of
                        {' '}<ExternalLink href="https://github.com/allenai/varnish">Varnish</ExternalLink>,
                        a custom theme provider for both
                        {' '}<ExternalLink href="https://ant.design">Ant Design</ExternalLink> and
                        {' '}<ExternalLink href="https://www.styled-components.com/">Styled-Components</ExternalLink>.
                    </p>
                    <p>
                        Varnish provides common AI2 Styled-Components, components, and utilities.
                    </p>
                    <p>
                        Varnish is derived from the
                        {' '}<ExternalLink href="https://github.com/allenai/skiff-template">Skiff Template</ExternalLink>.
                        Skiff provides a <ExternalLink href="https://www.python.org/">Python</ExternalLink>
                        {' '}based API and a UI constructed with
                        {' '}<ExternalLink href="https://www.typescriptlang.org/">TypeScript</ExternalLink>,
                        {' '}<ExternalLink href="https://reactjs.org/">ReactJS</ExternalLink>,
                        and <ExternalLink href="https://ant.design/">Ant Design</ExternalLink>.
                    </p>
                    <p>
                        It is deployed to a Google managed Kubernetes cluster and provides
                        DNS, log aggregation, TLS and other capabilties out of the box,
                        thanks to the
                        {' '}<ExternalLink href="https://github.com/allenai/skiff">Skiff</ExternalLink>
                        {' '}project.
                    </p>
                    <p>
                        If you have any questions, concerns or feedback please don't
                        hesitate to reach out. You can open a
                        {' '}<ExternalLink href="https://github.com/allenai/skiff-template/issues/new">Github Issue</ExternalLink>
                        {' '}or contact us at
                        {' '}<ExternalLink href="mailto:reviz@allenai.org">reviz@allenai.org</ExternalLink>.
                    </p>
                </Body>
            </React.Fragment>
        )
    }
}


