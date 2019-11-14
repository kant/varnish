import React from 'react';
import styled, { StyledComponentBase } from 'styled-components';
import * as Antd from 'antd';

import dropdownIconSrc from './icons/form-dropdown.svg';

// Styled version of statics
const StyledOption = styled(Antd.Select.Option)``;
const StyledOptGroup = styled(Antd.Select.OptGroup)``;

// Our exported styled component version of Antd will need to have a reference to the styled
// component version.
class VarnishSelect extends Antd.Select {
    static Option = StyledOption as any;
    static OptGroup = StyledOptGroup as any;
}

// Styled version.
const StyledSelect = styled(VarnishSelect).attrs(() => ({
    suffixIcon: <img src={dropdownIconSrc} />
}))`
    font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
    width: 100%;

    /* todo: figure out why ant is not doing this */
    .ant-select-selection__rendered,
    .ant-select-arrow {
        margin-right: ${({ theme }) => theme.spacing.xs};
        margin-left: ${({ theme }) => theme.spacing.xs};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        margin: ${({ theme }) => `0 0 ${theme.spacing.md}`};
    }
`;

// Antd has static properties, but they are lost when converting to a styled component.
// This interface tells typescript about the styled component version of the statics.
interface WithStaticProps extends StyledComponentBase<typeof Antd.Select, any, any, any> {
    Option: typeof StyledOption;
    OptGroup: typeof StyledOptGroup;
}

// We trick Typescript here by first casting to unknown and then casting to the type we'd like to export.
// We do this so that the exported type includes the static properties, which we lose otherwise.
export const Select = (StyledSelect as unknown) as WithStaticProps;
