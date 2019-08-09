import { css } from 'styled-components';

export function baseLinkStyles(_:any) {
    return (
        css<{active?: boolean, contrast?: boolean}>`
            color: ${({ theme, active, contrast }) => (
                active
                ? (contrast ? theme.link.contrastActiveColor : theme.link.activeColor)
                : (contrast ? theme.link.contrastColor : theme.link.color)
            )};
            text-decoration: ${({theme}) => theme.link.decoration};

            &:hover {
                color: ${({ theme, contrast }) => (
                    contrast ? theme.link.hover.contrastColor : theme.link.hover.color
                )};
                text-decoration: ${({theme}) => theme.link.hover.decoration};
            }
        `
    );
}
