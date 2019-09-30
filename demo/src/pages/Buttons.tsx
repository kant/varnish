import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import { BodySmall, Body, Button, ButtonVariant, ExternalLink } from '@allenai/varnish/components';
import { DefaultVarnishTheme } from '@allenai/varnish/theme';
import { defaultSpacing, borderColor } from '@allenai/varnish/theme/button';
import {
    PageTitle,
    SectionWithDivider,
    LightPaper,
    DarkPaper,
    DefaultLiveProvider
} from '../shared';

const examples = {
    basic: `
render(
    <Button
        variant='primary'
        icon="form"
        onClick={()=>alert('click')}>
        Primary
    </Button>
)
`.trim(),
    all: `
const Buttons = ({contrast}) =>
    [false, true].map(disabled => {
        return ['primary', 'default', 'link', 'marketing'].map(variant => {
            return (
                <Button
                    variant={variant}
                    disabled={disabled}
                    icon="form"
                    onClick={()=>alert('click')}
                    contrast={contrast}>
                    {variant}
                </Button>
            )
        })
    });

const gridCss = css\`
    display: grid;
    grid-template-columns: repeat(4, min-content);
    grid-gap: \${({theme}) => theme.spacing.sm };
    padding: \${({theme}) => theme.spacing.sm };
    \${Button} {
        height: min-content;
    }
\`;

const LightGrid = styled(Examples.LightPaper)\`
   \${gridCss}
\`;

const DarkGrid = styled(Examples.DarkPaper)\`
    \${gridCss}
\`;

render(
    <div>
        <LightGrid>
            <Buttons contrast={false} />
        </LightGrid>
        <DarkGrid>
            <Buttons contrast={true}/>
        </DarkGrid>
    </div>
)
`.trim()
};

export class Buttons extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Buttons</PageTitle>

                <h3>Appearance and Behavior</h3>
                <BodySmall>
                    Basic buttons come in four style variants: primary, default, link, and
                    marketing.
                    <br />
                    We are extending the Ant Design Button component.
                    <br />
                    For more information see the:{' '}
                    <ExternalLink target="_blank" href="https://ant.design/components/button/">
                        Ant Design Component
                    </ExternalLink>
                </BodySmall>

                <SectionWithDivider>
                    <h5>Basic Button Specs</h5>
                    <BodySmall>
                        <ul>
                            <li>Border radius: {`${DefaultVarnishTheme.shape.borderRadius}px`}</li>
                            <li>
                                Horizontal padding:{' '}
                                {`${defaultSpacing[0].displayName} (${defaultSpacing[0]})`}
                            </li>
                            <li>
                                Vertical padding:{' '}
                                {`${defaultSpacing[1].displayName} (${defaultSpacing[1]})`}
                            </li>
                            <li>Border color: {borderColor.displayName}</li>
                            <li>
                                Dark text:{' '}
                                {DefaultVarnishTheme.button.default.contrastColor.displayName}
                            </li>
                            <li>
                                Light text: {DefaultVarnishTheme.button.default.color.displayName}
                            </li>
                        </ul>
                    </BodySmall>
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Primary-style buttons</h4>
                    <BodySmall>
                        <ul>
                            <li>
                                Use the primary button style for the most prominent call to action
                                on the page.
                            </li>
                            <li>
                                These buttons guide users to and through the main happy path in a
                                task flow.
                            </li>
                            <li>
                                Background Color:{' '}
                                {DefaultVarnishTheme.button.primary.background.displayName}
                            </li>
                        </ul>
                    </BodySmall>
                    <ButtonExample variant={'primary'} />
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Default-style buttons</h4>
                    <BodySmall>
                        <ul>
                            <li>
                                Use the secondary button style for buttons that offer users
                                additional action they can take in their task flow (examples:
                                Cancel, Back).
                            </li>
                            <li>
                                You can have only one primary-styled button on a screen, but you can
                                have more than one secondary-styled button. If you need to offer
                                more than one alternate action, consider using text links instead of
                                multiple secondary buttons.
                            </li>
                        </ul>
                    </BodySmall>
                    <ButtonExample variant={'default'} />
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Link-style buttons</h4>
                    <BodySmall>
                        <ul>
                            <li>
                                If you need to offer more than one alternate action, consider using
                                text links instead of multiple secondary buttons.
                            </li>
                            <li>
                                Bright text: {DefaultVarnishTheme.button.link.color.displayName}
                            </li>
                        </ul>
                    </BodySmall>
                    <ButtonExample variant={'link'} />
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Marketing-style buttons</h4>
                    <BodySmall>
                        <ul>
                            <li>
                                Use only in marketing as an extra-large primary button for an
                                important action.
                            </li>
                            <li>Only one jumbo button can exist on a page or screen.</li>
                            <li>
                                Bright text:{' '}
                                {DefaultVarnishTheme.button.marketing.color.displayName}
                            </li>
                        </ul>
                    </BodySmall>
                    <ButtonExample variant={'marketing'} />
                </SectionWithDivider>

                <SectionWithDivider>
                    <h3>Usage</h3>
                    <h4>Basic button</h4>
                    <DefaultLiveProvider code={examples.basic} />
                    <br />
                    For more information see the:{' '}
                    <ExternalLink target="_blank" href="https://ant.design/components/button/">
                        Ant Design Component
                    </ExternalLink>
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>All button forms</h4>
                    <DefaultLiveProvider code={examples.all} />
                </SectionWithDivider>
            </React.Fragment>
        );
    }
}

interface ButtonExampleProps {
    variant: ButtonVariant;
}
class ButtonExample extends React.PureComponent<ButtonExampleProps> {
    render() {
        return (
            <React.Fragment>
                <ButtonRow variant={this.props.variant} />
                <ButtonRow variant={this.props.variant} contrast />
            </React.Fragment>
        );
    }
}

interface ButtonRowProps {
    variant: ButtonVariant;
    contrast?: boolean;
}
class ButtonRow extends React.PureComponent<ButtonRowProps> {
    render() {
        const Paper = styled(this.props.contrast ? DarkPaper : LightPaper)`
            margin-bottom: ${({ theme }) => theme.spacing.md};
        `;
        const { variant, contrast } = this.props;
        return (
            <React.Fragment>
                <Body>{this.props.contrast ? 'Dark' : 'Light'} background</Body>
                <Paper>
                    <ButtonGrid>
                        <Disabled>
                            <Button disabled variant={variant} contrast={contrast} icon="form">
                                Disabled
                            </Button>
                        </Disabled>
                        <Default>
                            <Button variant={variant} contrast={contrast} icon="form">
                                {variant}
                            </Button>
                        </Default>
                    </ButtonGrid>
                </Paper>
            </React.Fragment>
        );
    }
}

// TODO:  implement the <Columns count={x} /> component as seen in the Incubator project
const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
    grid-gap: ${({ theme }) => theme.spacing.lg};
`;

const ButtonSpace = styled.div``;
const Disabled = styled(ButtonSpace)`
    grid-column: 1;
`;
const Default = styled(ButtonSpace)`
    grid-column: 2;
`;
