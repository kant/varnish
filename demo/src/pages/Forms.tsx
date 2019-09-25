import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { ExternalLink } from '@allenai/varnish/components';

import { PageTitle, SectionWithDivider, DefaultLiveProvider } from '../shared';

const examples = {
select: `
render(
    <div>
        Standard:
        <Select placeholder="select item">
            <SelectOption key="1" value="1">test 1a</SelectOption>
            <SelectOption key="2" value="2">test 2a</SelectOption>
            <SelectOption key="3" value="3">test 3a</SelectOption>
            <SelectOption key="4" value="4">test 4a</SelectOption>
        </Select>

        With Groups:
        <Select placeholder="select item">
            <SelectOptGroup label="group 1">
                <SelectOption key="1" value="1">test 1a</SelectOption>
                <SelectOption key="2" value="2">test 2a</SelectOption>
                <SelectOption key="3" value="3">test 3a</SelectOption>
                <SelectOption key="4" value="4">test 4a</SelectOption>
            </SelectOptGroup>
            <SelectOptGroup label="group 2">
                <SelectOption key="5" value="5">test 1b</SelectOption>
                <SelectOption key="6" value="6">test 2b</SelectOption>
                <SelectOption key="7" value="7">test 3b</SelectOption>
                <SelectOption key="8" value="8">test 4b</SelectOption>
            </SelectOptGroup>
        </Select>
    </div>
)
`.trim(),

input: `
render(
    <Input
        placeholder="type here"/>
)
`.trim(),

textArea: `
render(
    <TextArea
        autosize={{minRows:2, maxRows:7}}
        placeholder="type here" />
)
`.trim(),

datePicker: `
render(
    <DatePicker />
)
`.trim(),

radio: `
render(
    <div>
        Horizontal
        <div>
            <RadioGroup defaultValue="1">
                <Radio value="1">Option 1</Radio>
                <Radio value="2">Option 2</Radio>
                <Radio value="3">Option 2</Radio>
            </RadioGroup>
        </div>
        Vertical
        <div>
            <RadioGroup defaultValue="1" vertical={true}>
                <Radio value="1">Option 1</Radio>
                <Radio value="2">Option 2</Radio>
                <Radio value="3">Option 2</Radio>
            </RadioGroup>
        </div>
    </div>
)
`
}

export class Forms extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Forms</PageTitle>

                <h3> Appearance and Behavior </h3>
                We are extending the Ant Design Form components such as Select, Input, TextArea, and DatePicker.
                <br/>For more information see the: <ExternalLink target="_blank" href="https://ant.design/components/">Ant Design Component</ExternalLink>

                <SectionWithDivider>
                    <h3>Usage</h3>
                    <h4>Select</h4>
                    <DefaultLiveProvider code={examples.select} />
                    <br/>For more information see the: <ExternalLink target="_blank" href="https://ant.design/components/select/">Ant Design Component</ExternalLink>
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Input</h4>
                    <DefaultLiveProvider code={examples.input} />
                    <br/>For more information see the: <ExternalLink target="_blank" href="https://ant.design/components/input/">Ant Design Component</ExternalLink>
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>TextArea</h4>
                    <DefaultLiveProvider code={examples.textArea} />
                    <br/>For more information see the: <ExternalLink target="_blank" href="https://ant.design/components/input/">Ant Design Component</ExternalLink>
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Input</h4>
                    <DefaultLiveProvider code={examples.input} />
                    <br/>For more information see the: <ExternalLink target="_blank" href="https://ant.design/components/input/#Input.TextArea">Ant Design Component</ExternalLink>
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>DatePicker</h4>
                    <DefaultLiveProvider code={examples.datePicker} />
                    <br/>For more information see the: <ExternalLink target="_blank" href="https://ant.design/components/date-picker/">Ant Design Component</ExternalLink>
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Radio</h4>
                    <DefaultLiveProvider code={examples.radio} />
                    <br/>For more information see the: <ExternalLink target="_blank" href="https://ant.design/components/radio/">Ant Design Component</ExternalLink>
                </SectionWithDivider>
            </React.Fragment>
        )
    }
}

const MaxWidth = styled.div`
  max-width: ${({theme}) => theme.breakpoints.xs};
`;
