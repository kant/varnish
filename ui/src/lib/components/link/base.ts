import { css } from 'styled-components';

interface BaseLinkProps {
    active?: boolean;
    contrast?: boolean;
}

export function baseLinkStyles(_: BaseLinkProps) {
    return (
        css<BaseLinkProps>`
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
