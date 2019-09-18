import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { BodySmall, Body, ExternalLink } from '@allenai/varnish/components';
import { DefaultVarnishTheme } from '@allenai/varnish/theme';

import { PageTitle, SectionWithDivider, LightPaper, DarkPaper, DefaultLiveProvider } from '../shared';

const examples = {
basic: `
render(
    <ExternalLink href="http://google.com" target="_blank">Go to Google (External)</ExternalLink>
)
`.trim(),
contrast: `
const Links = () => (
    <React.Fragment>
        <ExternalLink href="http://google.com" target="_blank">Go to Google (External)</ExternalLink>
        <br /><InternalLink to="../design/buttons">Go to Buttons (Internal)</InternalLink>
    </React.Fragment>);

render(
    <div>
        <Examples.LightPaper>
           <Links />
        </Examples.LightPaper>
        <Examples.DarkPaper>
            <Links />
        </Examples.DarkPaper>
    </div>
)


`.trim()
}

export class Links extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Links</PageTitle>

                <h3>Appearance and Behavior</h3>
                <BodySmall>
                    Basic links come in two styles: light background and dark background.
                </BodySmall>

                <SectionWithDivider>
                    <LinkExample />
                </SectionWithDivider>

                <SectionWithDivider>
                    <LinkExample contrast />
                </SectionWithDivider>

                <SectionWithDivider>
                    <h3>Usage</h3>
                    <h4>Basic</h4>
                    <DefaultLiveProvider code={examples.basic} />
                </SectionWithDivider>
                <SectionWithDivider>
                    <h4>On dark backgrounds we have slight variation in colors</h4>
                    <DefaultLiveProvider code={examples.contrast} />
                </SectionWithDivider>
            </React.Fragment>
        )
    }
}

interface LinkExampleProps{
    contrast?: boolean;
}
class LinkExample extends React.PureComponent<LinkExampleProps> {
    render() {
        const color = this.props.contrast
            ? DefaultVarnishTheme.link.contrastColor
            : DefaultVarnishTheme.link.color;
        const Paper = this.props.contrast ? DarkPaper : LightPaper;
        return (
            <React.Fragment>
                <h4>{this.props.contrast ? 'Dark' : 'Light'} background</h4>
                <BodySmall>
                    <ul>
                        <li>Basic links are defined with the color {color.displayName}.</li>
                        <li>On hover, they do not change color, but show an underline.</li>
                        <li>Visited sites do not change color from {color.displayName}.</li>
                    </ul>
                </BodySmall>
                <Body>Example</Body>
                <Paper>
                    <BodySmall>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a molestic
                        metus. <ExternalLink contrast={this.props.contrast}>Suspendisse pharetra</ExternalLink>
                        {' '}lobortis varius. Cras vulputate felis et mauris tincidunt, elementum
                        volutpat <ExternalLink contrast={this.props.contrast}>urna euismod</ExternalLink>.
                        Phasellus lacinia fringilla sapien. Quisque ac convallis elit, eget fringilla
                        metus.
                    </BodySmall>
                </Paper>
            </React.Fragment>
        )
    }
}
