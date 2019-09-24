import React from 'react';
import styled, { css } from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { DefaultVarnishTheme } from '@allenai/varnish/theme';
import * as components from '@allenai/varnish/components';
import { strIncludes } from '@allenai/varnish/utils/base';

import { DarkPaper, LightPaper, WhitePaper } from './Paper';
import logoWithText from '../varnishLogo.svg';
import svgSrc from './other-14px.svg';

const InlineSvg = () => (
    <svg
        fill="currentColor"
        height="14"
        viewBox="0 0 14 14"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            clip-rule="evenodd"
            d="m0 0h6v6h-6zm2 2h2v2h-2zm-2 6h6v6h-6zm2 2h2v2h-2zm12-2h-6v6h6zm-2 2h-2v2h2zm-4-10h6v6h-6zm2 2h2v2h-2z"
            fill-rule="evenodd"
        />
    </svg>
);

const globalScope = {
    styled,
    css,
    Examples: {
        DarkPaper,
        LightPaper,
        WhitePaper
    },
    DefaultVarnishTheme,
    InlineSvg,
    logoWithText,
    strIncludes,
    svgSrc,
    ...components
};

const StyledProvider = styled(LiveProvider)`
    border-radius: ${({theme}) => `${theme.shape.borderRadius}px`};
    overflow: hidden;
    margin-bottom: ${({theme}) => theme.spacing.md};
`;

const LiveWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    border: 1px solid ${({theme}) => theme.palette.border.main};

    @media (max-width: ${({theme}) => theme.breakpoints.md}) {
        flex-direction: column;
    }
`;

const column = css`
    flex-basis: 50%;
    width: 50%;
    max-width: 50%;

    @media (max-width: ${({theme}) => theme.breakpoints.md}) {
        flex-basis: auto;
        width: 100%;
        max-width: 100%;
    }
`;

const StyledEditor = styled.div<{maxHeight?: string}>`
    color: ${({theme}) => theme.palette.common.white};
    background: ${({theme}) => theme.palette.background.dark};
    max-height: ${({maxHeight})=> maxHeight};
    overflow: auto;
    ${column};

    * > textarea {
        font-family: ${({theme}) => theme.typography.code.fontFamily};
        font-size: ${({theme}) => theme.typography.code.fontSize};
        line-height: ${({theme}) => theme.typography.code.lineHeight};

        &:focus {
            outline: none;
        }
    }
`;

const StyledPreview = styled(LivePreview)<{maxHeight?: string}>`
    background: ${({theme}) => theme.palette.background.light};
    position: relative;
    padding: ${({theme}) => theme.spacing.xs};
    overflow: auto;
    max-height: ${({maxHeight})=> maxHeight};
    ${column};
`;

const StyledError = styled(LiveError)`
    display: block;
    padding: ${({theme}) => theme.spacing.sm};
    background: ${({theme}) => theme.palette.text.error};
    color: ${({theme}) => theme.palette.text.contrast};
    white-space: pre-wrap;
    text-align: left;
    font-family: ${({theme}) => theme.typography.code.fontFamily};
    font-size: ${({theme}) => theme.typography.code.fontSize};
    line-height: ${({theme}) => theme.typography.code.lineHeight};
`;

interface Props {
    code?: string;
    scope?: any;
    noInline?: boolean;
    maxHeight?: string;
}
const DefaultLiveProvider = (props: Props) => {
    // setup defaults
    const maxHeight = props.maxHeight || "15rem";
    const noInline = props.noInline !== undefined ? props.noInline : true;

    // add shared scope to all
    const scope = {...props.scope, ...globalScope}

    return (
        <StyledProvider {...props} noInline={noInline} scope={scope}>
            <LiveWrapper>
            <StyledEditor maxHeight={maxHeight}>
                <LiveEditor />
            </StyledEditor>
            <StyledPreview maxHeight={maxHeight}/>
            </LiveWrapper>
            <StyledError />
        </StyledProvider>
    )
};

export { DefaultLiveProvider };
