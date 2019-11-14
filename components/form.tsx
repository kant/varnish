import React from 'react';
import styled from 'styled-components';
import * as Antd from 'antd';

import calenderIronSrc from './icons/form-calendar.svg';
import dropdownIconSrc from './icons/form-dropdown.svg';

export const TextArea = styled(Antd.Input.TextArea)`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
`;

export const Input = styled(Antd.Input)<{ allowClear?: boolean }>`
    &&& {
        padding: ${({ theme, allowClear }) =>
            allowClear ? undefined : `${theme.spacing.xs} ${theme.spacing.md}`};
        height: initial;
        font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};

        /* when the user uses allowClear attribute, the control swaps from an input to a span with
        an input in it.  so we need specific crappy css for this case */
        input {
            padding: ${({ theme }) =>
                `${theme.spacing.xs} ${theme.spacing.lg} ${theme.spacing.xs} ${theme.spacing.md}`};
            height: initial;
            font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
        }
    }
`;

export const DatePicker = styled(Antd.DatePicker).attrs(() => ({
    suffixIcon: <img src={calenderIronSrc} />
}))`
    width: 100%;

    input {
        padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
        height: initial;
        font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
    }
`;

export const Select = styled(Antd.Select).attrs(() => ({
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

export const SelectOption = styled(Antd.Select.Option)``;

export const SelectOptGroup = styled(Antd.Select.OptGroup)``;

export const Radio = styled(Antd.Radio)`
    font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
`;

export const RadioGroup = styled(Antd.Radio.Group)<{ vertical: boolean }>`
    ${Radio} {
        display: ${({ vertical }) => (vertical ? 'block' : 'inline-block')};
    }
    .ant-radio-button-wrapper {
        padding: ${({ theme }) => `0 ${theme.spacing.md}`};
    }
`;
