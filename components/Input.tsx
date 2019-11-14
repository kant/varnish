import styled, { StyledComponentBase, css } from 'styled-components';
import * as Antd from 'antd';

// shared css
const sharedStyle = css`
    height: initial;
    font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
`;

// Styled version of statics
const StyledGroup = styled(Antd.Input.Group)``;
const StyledSearch = styled(Antd.Input.Search)`
    && {
        padding: 0;
        input.ant-input {
            ${sharedStyle}
            padding: ${({ theme, prefix }) =>
                `${theme.spacing.xs} ${theme.spacing.xl} ${theme.spacing.xs} ${
                    prefix ? theme.spacing.xl : theme.spacing.md
                } `};

        }
    }
`;
const StyledTextArea = styled(Antd.Input.TextArea)`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.bodySmall.fontSize};
`;
const StyledPassword = styled(Antd.Input.Password)`
    && {
        padding: 0;
        input.ant-input {
            ${sharedStyle}
            padding: ${({ theme, prefix }) =>
                `${theme.spacing.xs} ${theme.spacing.xl} ${theme.spacing.xs} ${
                    prefix ? theme.spacing.xl : theme.spacing.md
                } `};

        }
    }
`;

// Our exported styled component version of Antd will need to have a reference to the styled
// component version.
class VarnishInput extends Antd.Input {
    static Group = StyledGroup as any;
    static Search = StyledSearch as any;
    static TextArea = StyledTextArea as any;
    static Password = StyledPassword as any;
}

// Styled version.
const StyledInput = styled(VarnishInput)<{ allowClear?: boolean; prefix?: any }>`
    && {
        ${sharedStyle}
        padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    }

    &&.ant-input-affix-wrapper {
        padding: 0;
        input.ant-input {
            ${sharedStyle}
            padding: ${({ theme, allowClear, prefix }) =>
                `${theme.spacing.xs} ${allowClear ? theme.spacing.xl : theme.spacing.md} ${
                    theme.spacing.xs
                } ${prefix ? theme.spacing.xl : theme.spacing.md} `};
        }
    }
`;

// Antd has static properties, but they are lost when converting to a styled component.
// This interface tells typescript about the styled component version of the statics.
interface WithStaticProps extends StyledComponentBase<typeof Antd.Input, any, any, any> {
    Group: typeof StyledGroup;
    Search: typeof StyledSearch;
    TextArea: typeof StyledTextArea;
    Password: typeof StyledPassword;
}

// We trick Typescript here by first casting to unknown and then casting to the type we'd like to export.
// We do this so that the exported type includes the static properties, which we lose otherwise.
export const Input = (StyledInput as unknown) as WithStaticProps;
