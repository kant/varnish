import React from 'react';
import styled, { StyledComponentBase } from 'styled-components';
import * as Antd from 'antd';

// Styled version of statics
const StyledGroup = styled(Antd.Radio.Group)<{ vertical?: boolean }>`
    .ant-radio-wrapper, .ant-radio-button-wrapper {
        display: ${({ vertical }) => (vertical ? 'block' : 'inline-block')};
    }
    .ant-radio-button-wrapper {
        padding: ${({ theme }) => `0 ${theme.spacing.md}`};
    }
`;
const StyledButton = styled(Antd.Radio.Button)``;

// Our exported styled component version of Antd will need to have a reference to the styled
// component version.
class VarnishRadio extends Antd.Radio {
    static Group = StyledGroup as any;
    static Button = StyledButton as any;
}

// Styled version.
const StyledRadio = styled(VarnishRadio)`
    font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
`;

// Antd has static properties, but they are lost when converting to a styled component.
// This interface tells typescript about the styled component version of the statics.
interface WithStaticProps extends StyledComponentBase<typeof Antd.Radio, any, any, any> {
    Group: typeof StyledGroup;
    Button: typeof StyledButton;
}

// We trick Typescript here by first casting to unknown and then casting to the type we'd like to export.
// We do this so that the exported type includes the static properties, which we lose otherwise.
export const Radio = (StyledRadio as unknown) as WithStaticProps;
