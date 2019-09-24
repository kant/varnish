import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Spacing } from '@allenai/varnish/theme/spacing';
import { breakpoints } from '@allenai/varnish/theme/breakpoints';
import { dictionaryToArray } from '@allenai/varnish/utils/base';

import { PageTitle, SectionWithDivider, DefaultLiveProvider } from '../shared';

const examples = {
basic: `
const BreakpointDiv = styled.div\`
    width: 9rem;
    height: 1.5rem;
    margin: 1rem;
    padding: 0 0.5rem;
    background: \${({theme}) => theme.color.N6};

    ::after {
        content: '> breakpoints.xxl'
    }

    @media (max-width: \${({theme}) => theme.breakpoints.xxl}) {
        background: \${({theme}) => theme.color.R6};
        ::after {
            content: '< breakpoints.xxl'
        }
    }
    @media (max-width: \${({theme}) => theme.breakpoints.xl}) {
        background: \${({theme}) => theme.color.O6};
        ::after {
            content: '< breakpoints.xl'
        }
    }
    @media (max-width: \${({theme}) => theme.breakpoints.lg}) {
        background: \${({theme}) => theme.color.G6};
        ::after {
            content: '< breakpoints.lg'
        }
    }
    @media (max-width: \${({theme}) => theme.breakpoints.md}) {
        background: \${({theme}) => theme.color.B6};
        ::after {
            content: '< breakpoints.md'
        }
    }
    @media (max-width: \${({theme}) => theme.breakpoints.sm}) {
        background: \${({theme}) => theme.color.P6};
        ::after {
            content: '< breakpoints.sm'
        }
    }
\`;

render(
    <div>
        Change the screen width to see the color change based on breakpoints.
        <BreakpointDiv />
    </div>
)
`.trim()
}

export class Breakpoints extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Breakpoints</PageTitle>

                <h3> Appearance and Behavior </h3>
                Standard breakpoints values.

                <SectionWithDivider>
                    <h4>Breakpoints</h4>
                    <BreakpointGrid>
                        {dictionaryToArray(breakpoints).map((breakpoint) => {
                            return <React.Fragment>
                                <BreakpointRow breakpoint={breakpoint} key={breakpoint.displayName} />
                                <Example width={breakpoint.rem} key={breakpoint.displayName} />
                            </React.Fragment>
                        })}
                    </BreakpointGrid>
                </ SectionWithDivider>

                <SectionWithDivider>
                    <h3>Usage</h3>
                    <DefaultLiveProvider code={examples.basic} />
                </SectionWithDivider>

            </React.Fragment>
        )
    }
}

interface BreakpointRowProps {
    breakpoint: Spacing;
}
class BreakpointRow extends React.PureComponent<BreakpointRowProps> {
    render() {
        return (
            <React.Fragment>
                <Key>{this.props.breakpoint.displayName}</Key>
                <Px>{this.props.breakpoint.px}</Px>
                <Rem>{this.props.breakpoint.rem}</Rem>
            </React.Fragment>
        )
    }
}

const BreakpointGrid = styled.div`
    display: grid;
    align-items: center;
    grid-column-gap: ${({theme}) => theme.spacing.lg};
`;

const Key = styled.div`
    grid-column: 1;
`;

const Px = styled.div`
    grid-column: 2;
`;

const Rem = styled.div`
    grid-column: 3;
`;

const Example = styled.div<{width: string}>`
    grid-column: 1 / span 4;
    width: ${({width}) => width};
    margin-bottom: ${({theme}) => theme.spacing.xs};
    height: ${({theme}) => theme.spacing.xs};
    background: ${({theme}) => theme.palette.border.main};
`;
