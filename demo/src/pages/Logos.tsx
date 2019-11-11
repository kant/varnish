import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { PageTitle, SectionWithDivider, DefaultLiveProvider } from '../shared';

const examples = {
    default: `
render(
    <Examples.WhitePaper>
        <AI2Logo />
    </Examples.WhitePaper>
)
`.trim(),
    sizes: `
render(
    <div>
        <Examples.WhitePaper>
            <AI2Logo size="micro" />
        </Examples.WhitePaper>

        <Examples.WhitePaper>
            {/* For default size, no need to set <AI2Logo size="default" />
            since "default" is the default value of the size property. */}
            <AI2Logo />
        </Examples.WhitePaper>

        <Examples.WhitePaper>
            <AI2Logo size="lg" />
        </Examples.WhitePaper>
    </div>
)
`.trim(),
    customSize: `
render(
    <Examples.WhitePaper>
        <AI2Logo size={45} />
    </Examples.WhitePaper>
)
`.trim(),
    text: `
render(
    <div>
        {/* To show full org name text, there is no need to set
        <AI2Logo includeText={true} since the default value of
        the includeText property is true. */}
        <Examples.WhitePaper>
            <AI2Logo />
        </Examples.WhitePaper>

        <Examples.WhitePaper>
            <AI2Logo includeText={false} />
        </Examples.WhitePaper>

        <Examples.WhitePaper>
            <AI2Logo includeText={false} size="lg" />
        </Examples.WhitePaper>
    </div>
)
`.trim(),
    white: `
render(
    <div>
        <Examples.DarkPaper>
            <AI2Logo color="white" size="micro" />
        </Examples.DarkPaper>

        <Examples.DarkPaper>
            <AI2Logo color="white" />
        </Examples.DarkPaper>

        <Examples.DarkPaper>
            <AI2Logo includeText={false} color="white" size="lg" />
        </Examples.DarkPaper>
    </div>
)
`.trim()
};

export class Logos extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>AI2 Logos</PageTitle>
                <h3> Appearance and Behavior </h3>
                Official organization logos for web use.
                <SectionWithDivider>
                    <h3>Usage</h3>
                    <h4>Default</h4>
                    <DefaultLiveProvider code={examples.default} />
                </SectionWithDivider>
                <SectionWithDivider>
                    <h4>Sizes</h4>
                    This component includes a <code>size</code> property that supports the following
                    values:
                    <ul>
                        <li>
                            <code>"micro"</code> (16px tall)
                        </li>
                        <li>
                            <code>"default"</code> (30px tall)
                        </li>
                        <li>
                            <code>"large"</code> (37px tall)
                        </li>
                    </ul>
                    <DefaultLiveProvider code={examples.sizes} />
                </SectionWithDivider>
                <SectionWithDivider>
                    <h4>Custom size</h4>
                    It is highly encouraged to use one of the predetermined sizes listed above, but
                    if necessary, it is possible to set a custom height by assigning a number to the{' '}
                    <code>size</code> property:
                    <DefaultLiveProvider code={examples.customSize} />
                </SectionWithDivider>
                <SectionWithDivider>
                    <h4>Inclusion of Organization Name Text</h4>
                    Depending on the context, you may or may not want to display the full
                    organization name text. This component includes a boolean{' '}
                    <code>includeText</code> property with a default value of <code>true</code>.
                    <DefaultLiveProvider code={examples.text} />
                </SectionWithDivider>
                <SectionWithDivider>
                    <h4>White logos</h4>
                    If you're using the logo against a dark background, you will want to set the
                    component's <code>color</code> value to <code>"white"</code>. The default value
                    for this property is <code>"default"</code> which renders in full color.
                    <DefaultLiveProvider code={examples.white} />
                </SectionWithDivider>
            </React.Fragment>
        );
    }
}
