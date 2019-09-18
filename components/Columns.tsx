import styled from "styled-components";

export interface Props {
    count?: number;
    gridTemplateColumns?: string;
    breakpoint?: string;
}

export const Columns = styled.ul<Props>`
    display: grid;
    grid-template-columns: ${({gridTemplateColumns, count}) => gridTemplateColumns
        ? gridTemplateColumns
        : (count
            ? `repeat(${count}, 1fr)`
            : undefined)};
    grid-column-gap: ${({theme}) => theme.spacing.md};
    grid-row-gap: ${({theme}) => theme.spacing.md};
    list-style-type: none;
    margin: 0;
    padding: 0;
    @media (max-width: ${({theme, breakpoint}) => breakpoint ? theme.breakpoints[breakpoint] : undefined}) {
        justify-items: center;
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: ${({theme}) => theme.spacing.sm};
    }
`;
