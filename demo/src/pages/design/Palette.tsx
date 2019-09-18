import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { BodyMicro, Body }from '@allenai/varnish/components';
import { palette }from '@allenai/varnish/theme/palette';
import { Color } from '@allenai/varnish/theme';
import { convertPixelsToRem } from '@allenai/varnish/utils/base';

import { PageTitle, SectionWithDivider, DefaultLiveProvider } from '../shared';

const examples = {
basic: `
const Info = styled.div\`
    width: 100%;
    text-align: center;
    margin-bottom: \${({theme}) => theme.spacing.xxs };
    color: \${(props) => props.theme.palette.text.info};
    background: \${(props) => props.theme.palette.background.info};
    border: \${(props) => \`1px solid \${props.theme.palette.border.info}\`};
\`;
const Error = styled.div\`
    width: 100%;
    text-align: center;
    margin-bottom: \${({theme}) => theme.spacing.xxs };
    color: \${(props) => props.theme.palette.text.error};
    background: \${(props) => props.theme.palette.background.error};
    border: \${(props) => \`1px solid \${props.theme.palette.border.error}\`};
\`;

render(
    <div>
        <Info>I can do that Dave.</Info>
        <Error>I cant do that Dave.</Error>
    </div>
)
`.trim()
}

export class Palette extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Palette</PageTitle>

                <h3> Appearance and Behavior </h3>
                Commonly used colors in Varnish.

                <ColorGrid>
                    <ColorGroup keyName="primary"/>
                    <ColorGroup keyName="secondary"/>
                    <ColorGroup keyName="text"/>
                    <ColorGroup keyName="background"/>
                    <ColorGroup keyName="border"/>
                    <ColorGroup keyName="common"/>
                </ColorGrid>

                <SectionWithDivider>
                    <h3>Usage</h3>
                    <DefaultLiveProvider code={examples.basic} />
                </SectionWithDivider>

            </React.Fragment>
        )
    }
}

interface ColorGroupProps {
    keyName: string;
}

class ColorGroup extends React.PureComponent<ColorGroupProps> {
    render() {
        return (
            <React.Fragment>
                <Label>
                    <h4>{this.props.keyName.charAt(0).toUpperCase()}{this.props.keyName.slice(1)}</h4>
                    <BodyMicro>theme.palette.{this.props.keyName}.</BodyMicro>
                </Label>
                {Object.keys(palette[this.props.keyName]).map((key: string) => {
                    const color = palette[this.props.keyName][key];
                    return <ColorRow keyName={key} color={color}/>
                })}
            </React.Fragment>
        )
    }
}

const ColorGrid = styled.div`
    display: grid;
    grid-template-columns: auto max-content repeat(4, auto);
    align-items: center;
    margin-top: ${({theme}) => theme.spacing.xs};
    margin-bottom: ${({theme}) => theme.spacing.xl};
`;

interface ColorRowProps {
    keyName: string;
    color: Color;
}

class ColorRow extends React.PureComponent<ColorRowProps> {
    render() {
        return (
            <React.Fragment>
                <PaletteName>{this.props.keyName}</PaletteName>
                <ColorBoxWrapper><ColorBox color={this.props.color.hex} /></ColorBoxWrapper>
                <ColorName>{this.props.color.displayName}</ColorName>
                <ColorHex>{this.props.color.hex}</ColorHex>
                {this.props.color.rgb
                ? <ColorRgb>
                    {this.props.color.rgb.r}, {this.props.color.rgb.g}, {this.props.color.rgb.b}
                </ColorRgb>
                : null}
            </React.Fragment>
        )
    }
}

const Col = styled(Body)`
    padding: ${({theme}) => `${theme.spacing.md} 0`};
    display: inline-block;
    border-top: 1px solid ${({theme}) => theme.palette.border.main};
`;

const PaletteName = styled(Col)`
    grid-column: 1;
    padding-left: ${({theme}) => theme.spacing.md};
`;

const ColorBox = styled.div`
    background: ${(props) => props.color};
    width: ${props => convertPixelsToRem(40)};
    height: ${props => convertPixelsToRem(40)};
    border-radius: ${({theme}) => `${theme.shape.borderRadius}px`};
`;

const ColorBoxWrapper = styled(Col)`
    padding: ${({theme}) => convertPixelsToRem(7)};
    grid-column: 2;
`;

const ColorName = styled(Col)`
    padding-left: ${({theme}) => theme.spacing.xs};
    grid-column: 3;
`;

const ColorHex = styled(Col)`
    grid-column: 4;
`;

const ColorRgb = styled(Col)`
    grid-column: 5;
`;

const Label = styled(Col)`
    grid-column: 1 / span 5;
    padding: ${({theme}) => `${theme.spacing.xl} 0 ${theme.spacing.sm} 0`};
`;
