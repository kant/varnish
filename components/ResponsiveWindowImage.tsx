import * as React from 'react';
import styled from 'styled-components';

interface Props {
    src: string;
    wideWidth: string;
    skinnyWidth: string;
    height: string;
    alt?: string;
    breakWidth?: string;
}

/**
 * Outputs the Image. The component is responsive, and the
 * text portion of the image is hidden at smaller resolutions.
 */
export const ResponsiveWindowImage = (props: Props) => {
    return (
        <ResponsiveImageContainer
            breakWidth={props.breakWidth}
            width={props.skinnyWidth}
            height={props.height}>
            <img src={props.src} width={props.wideWidth} height={props.height} alt={props.alt} />
        </ResponsiveImageContainer>
    );
};

const ResponsiveImageContainer = styled.div<{ width: string; height: string; breakWidth?: string }>`
    img {
        display: block;
    }
    @media (max-width: ${({ theme, breakWidth }) => breakWidth || theme.breakpoints.sm}) {
        width: ${({ width }) => width};
        height: ${({ height }) => height};
        overflow: hidden;
    }
`;
