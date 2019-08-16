import styled from "styled-components";

export const Columns = styled.ul<{count: number}>`
    display: grid;
    grid-template-columns: repeat(${({count}) => count}, 1fr);
    grid-column-gap: ${({theme}) => theme.spacing.md};
    grid-row-gap: ${({theme}) => theme.spacing.md};
    list-style-type: none;
    margin: 0;
    padding: 0;
    @media (max-width: ${({theme}) => theme.breakpoints.md}) {
        justify-items: center;
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: ${({theme}) => theme.spacing.sm};
    }
`;

const Col = styled.div``;
export const Col1 = styled(Col)`
    grid-column: 1;
`;
export const Col2 = styled(Col)`
    grid-column: 2;
`;
export const Col3 = styled(Col)`
    grid-column: 3;
`;
export const Col4 = styled(Col)`
    grid-column: 4;
`;
export const Col5 = styled(Col)`
    grid-column: 5;
`;
export const Col6 = styled(Col)`
    grid-column: 6;
`;
export const Col7 = styled(Col)`
    grid-column: 7;
`;
export const Col8 = styled(Col)`
    grid-column: 8;
`;
export const Col9 = styled(Col)`
    grid-column: 9;
`;
export const Col10 = styled(Col)`
    grid-column: 10;
`;
