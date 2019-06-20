import * as React from 'react';
import styled from 'styled-components';

// body
export const BodyJumbo = styled.span`
    font-family: ${({theme}) => theme.typography.bodyJumbo.fontFamily};
    font-size: ${({theme}) => theme.typography.bodyJumbo.fontSize};
    line-height: ${({theme}) => theme.typography.bodyJumbo.lineHeight};
    font-weight: ${({theme}) => theme.typography.bodyJumbo.fontWeight};
`;

export const Body = styled.span`
    font-family: ${({theme}) => theme.typography.body.fontFamily};
    font-size: ${({theme}) => theme.typography.body.fontSize};
    line-height: ${({theme}) => theme.typography.body.lineHeight};
    font-weight: ${({theme}) => theme.typography.body.fontWeight};
`;
export const BodyBold = styled.span`
    font-family: ${({theme}) => theme.typography.bodyBold.fontFamily};
    font-size: ${({theme}) => theme.typography.bodyBold.fontSize};
    line-height: ${({theme}) => theme.typography.bodyBold.lineHeight};
    font-weight: ${({theme}) => theme.typography.bodyBold.fontWeight};
`;

export const BodySmall = styled.span`
    font-family: ${({theme}) => theme.typography.bodySmall.fontFamily};
    font-size: ${({theme}) => theme.typography.bodySmall.fontSize};
    line-height: ${({theme}) => theme.typography.bodySmall.lineHeight};
    font-weight: ${({theme}) => theme.typography.bodySmall.fontWeight};
`;
export const BodySmallBold = styled.span`
    font-family: ${({theme}) => theme.typography.bodySmallBold.fontFamily};
    font-size: ${({theme}) => theme.typography.bodySmallBold.fontSize};
    line-height: ${({theme}) => theme.typography.bodySmallBold.lineHeight};
    font-weight: ${({theme}) => theme.typography.bodySmallBold.fontWeight};
`;

export const BodyMicro = styled.span`
    font-family: ${({theme}) => theme.typography.bodyMicro.fontFamily};
    font-size: ${({theme}) => theme.typography.bodyMicro.fontSize};
    line-height: ${({theme}) => theme.typography.bodyMicro.lineHeight};
    font-weight: ${({theme}) => theme.typography.bodyMicro.fontWeight};
`;

export const Notification = styled.span`
    font-family: ${({theme}) => theme.typography.notification.fontFamily};
    font-size: ${({theme}) => theme.typography.notification.fontSize};
    line-height: ${({theme}) => theme.typography.notification.lineHeight};
    font-weight: ${({theme}) => theme.typography.notification.fontWeight};
`;
export const NotificationBold = styled.span`
    font-family: ${({theme}) => theme.typography.notificationBold.fontFamily};
    font-size: ${({theme}) => theme.typography.notificationBold.fontSize};
    line-height: ${({theme}) => theme.typography.notificationBold.lineHeight};
    font-weight: ${({theme}) => theme.typography.notificationBold.fontWeight};
`;

// attribution
export const Quote = styled.span`
    font-family: ${({theme}) => theme.typography.quote.fontFamily};
    font-size: ${({theme}) => theme.typography.quote.fontSize};
    line-height: ${({theme}) => theme.typography.quote.lineHeight};
    font-weight: ${({theme}) => theme.typography.quote.fontWeight};
`;

export const Author = styled.span`
    font-family: ${({theme}) => theme.typography.author.fontFamily};
    font-size: ${({theme}) => theme.typography.author.fontSize};
    line-height: ${({theme}) => theme.typography.author.lineHeight};
    font-weight: ${({theme}) => theme.typography.author.fontWeight};
`;

// code
export const Code = styled.pre`
    font-family: ${({theme}) => theme.typography.code.fontFamily};
    font-size: ${({theme}) => theme.typography.code.fontSize};
    line-height: ${({theme}) => theme.typography.code.lineHeight};
    font-weight: ${({theme}) => theme.typography.code.fontWeight};
`;

export const CodeDark = styled.pre`
    font-family: ${({theme}) => theme.typography.codeDark.fontFamily};
    font-size: ${({theme}) => theme.typography.codeDark.fontSize};
    line-height: ${({theme}) => theme.typography.codeDark.lineHeight};
    font-weight: ${({theme}) => theme.typography.codeDark.fontWeight};
    background-color: ${({theme}) => theme.color[theme.typography.codeDark.backgroundColorKey]};
    color: ${({theme}) => theme.color[theme.typography.codeDark.colorKey]};
    padding: ${({theme}) => theme.typography.codeDark.padding};
`;
