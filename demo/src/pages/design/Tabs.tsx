import React from 'react';
import { RouteComponentProps } from 'react-router';
import { BodySmall, ExternalLink } from '@allenai/varnish/components';

import { PageTitle, SectionWithDivider, DefaultLiveProvider } from '../shared';

export const Tabs = (_: RouteComponentProps) => (
    <React.Fragment>
        <PageTitle>Tabs</PageTitle>

        <h3>Appearance and Behavior</h3>
        <BodySmall>
            Varnish extends the
            {' '}<ExternalLink target="_blank" href="https://ant.design/components/tabs/">
                Ant Design Tab component
            </ExternalLink>, by overriding several default settings
            as to adjust the default presentation to conform to AI2 brand standards.
        </BodySmall>

        <SectionWithDivider>
            <h3>Usage</h3>
            <DefaultLiveProvider code={basicUsage} />
        </SectionWithDivider>
    </React.Fragment>
);

const basicUsage = `
/* Uncomment for usage:
import { Tabs } from '@allenai/varnish/components';
*/
render(
    <Tabs>
        <Tabs.TabPane tab="Tab 1" key="tab-1">
            First tab.
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="tab-2">
            Second tab.
        </Tabs.TabPane>
    </Tabs>
)
`.trim();
