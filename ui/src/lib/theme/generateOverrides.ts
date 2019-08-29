
declare var require: any
var fs = require('fs');
var process = require('process');

import { breakpoints } from './breakpoints';
import { color } from './colors';
import { typography } from './typography';
import { link } from './link';
import { spacing } from './spacing';
import { DefaultVarnishTheme } from './DefaultVarnishTheme';
import { fontWeight } from './fontWeight';
import { shape } from './shape';

console.log('Generating less overrides...');

// template
const template =`
    // less overrides to convert antd to ai2 styles
    // and general css for non react users

    // global font import
    @import "https://fonts.googleapis.com/css?family=Raleway:400,600,700|Lato:400,700|Volkhov:400,700|RobotoMono:400,700";

    // start with ant design less
    @import './node_modules/antd/dist/antd.less'; // Import base Ant Design styles

    // global overrides
    html, body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        font-smoothing: antialiased;
        font-family: ${typography.body.fontFamily};
        font-size:  ${typography.body.fontSize};
        line-height:  ${typography.body.lineHeight};
    }
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 100%;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${typography.h1.fontFamily};
        color: ${DefaultVarnishTheme.palette.text.primary};
    }
    h1 {
        font-size: ${typography.h1.fontSize};
        line-height: ${typography.h1.lineHeight};
        font-weight: ${typography.h1.fontWeight};
    }
    h2 {
        font-size: ${typography.h2.fontSize};
        line-height: ${typography.h2.lineHeight};
        font-weight: ${typography.h2.fontWeight};
    }
    h3 {
        font-size: ${typography.h3.fontSize};
        line-height: ${typography.h3.lineHeight};
        font-weight: ${typography.h3.fontWeight};
    }
    h4 {
        font-size: ${typography.h4.fontSize};
        line-height: ${typography.h4.lineHeight};
        font-weight: ${typography.h4.fontWeight};
    }
    h5 {
        font-size: ${typography.h5.fontSize};
        line-height: ${typography.h5.lineHeight};
        font-weight: ${typography.h5.fontWeight};
        text-transform: uppercase;
    }
    h6 {
        font-size: ${typography.h6.fontSize};
        line-height: ${typography.h6.lineHeight};
        font-weight: ${typography.h6.fontWeight};
        text-transform: uppercase;
    }

    p {
        margin-bottom: ${spacing.lg};
    }

    // set default media breakpoint sizes
    @media (max-width: ${breakpoints.lg}) {
        html {
            font-size: ${100 * 14/16}%;
        }
    }

    // general overrides to ant design variables
    @font-family: ${typography.body.fontFamily};
    @code-family: ${typography.code.fontFamily};
    @text-color: ${DefaultVarnishTheme.palette.text.primary};
    @text-color-secondary: ${DefaultVarnishTheme.palette.text.secondary};

    // breakpoint overrides to ant design variables
    @screen-xs: ${breakpoints.xs};
    @screen-sm: ${breakpoints.sm};
    @screen-md: ${breakpoints.md};
    @screen-lg: ${breakpoints.lg};
    @screen-xl: ${breakpoints.xl};
    @screen-xxl: ${breakpoints.xxl};

    // color overrides to ant design variables
    @gold-6: ${color.O6};
    @blue-6: ${color.B6};
    @green-6: ${color.G6};
    @red-6: ${color.R6};
    @cyan-6: ${color.T6};
    @purple-6: ${color.P6};
    @pink-6: ${color.P6};
    @magenta-6: ${color.M6};
    @primary-color: @blue-6; // unchanged values are left in this file for clarity
    @info-color: ${DefaultVarnishTheme.palette.text.info};
    @success-color: ${DefaultVarnishTheme.palette.text.success};
    @processing-color: @blue-6;
    @error-color: ${DefaultVarnishTheme.palette.text.error};
    @highlight-color: @red-6;
    @warning-color: ${DefaultVarnishTheme.palette.text.warning};
    @primary-1: ${color.B1};
    @primary-2: ${color.B2};
    @primary-3: ${color.B3};
    @primary-4: ${color.B4};
    @primary-5: ${DefaultVarnishTheme.palette.primary.light}; // color used to control the text color in many active and hover states
    @primary-6: ${DefaultVarnishTheme.palette.primary.main}; // color used to control the text color of active buttons
    @primary-7: ${color.B7};
    @primary-8: ${color.B8};
    @primary-9: ${color.B9};
    @primary-10: ${color.B10};

    // alert overrides to ant design variables
    @alert-success-border-color: ${DefaultVarnishTheme.palette.border.success};
    @alert-success-bg-color: ${DefaultVarnishTheme.palette.background.success};
    @alert-success-icon-color: @success-color;
    @alert-info-border-color: ${DefaultVarnishTheme.palette.border.info};
    @alert-info-bg-color: ${DefaultVarnishTheme.palette.background.info};
    @alert-info-icon-color: @info-color;
    @alert-warning-border-color: ${DefaultVarnishTheme.palette.border.warning};
    @alert-warning-bg-color: ${DefaultVarnishTheme.palette.background.warning};
    @alert-warning-icon-color: @warning-color;
    @alert-error-border-color: ${DefaultVarnishTheme.palette.border.error};
    @alert-error-bg-color: ${DefaultVarnishTheme.palette.background.error};
    @alert-error-icon-color: @error-color;

    // link overrides to ant design variables
    @link-color: ${link.color};
    @link-hover-color: ${link.hover.color};
    @link-active-color: ${link.activeColor};
    @link-decoration: ${link.decoration};
    @link-hover-decoration: ${link.hover.decoration};

    // override vertical paddings
    @padding-lg: ${spacing.lg}; // containers
    @padding-md: ${spacing.md}; // small containers and buttons
    @padding-sm: ${spacing.sm}; // Form controls and items
    @padding-xs: ${spacing.xs}; // small items

    // overrise buttons
    @btn-font-weight: ${fontWeight.regular};
    @btn-border-radius-base: ${shape.borderRadius}px;
`;

// All paths are relative to package.json.
const outputFile = './public/theme.less';

// Then generate
console.log('Generating pages...');
try {
    fs.writeFileSync(outputFile, template);
}
catch (err){
    console.log('Error during generation: ' + err);
    process.exit(1);
}

// Process complete.
console.log('Done!');
