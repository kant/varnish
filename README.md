# Varnish

Varnish makes it easy to build AI2 branded demos, websites, and  applications.

For a preview of what your application will look like by using Varnish, visit
the [demo](https://varnish.staging.apps.allenai.org).

## What do I get by using Varnish?

* CSS that updates the default presentation of  HTML elements so that they
  follow general AI2 branding conventions.
* A custom theme provider for both [Ant Design](https://ant.design) and
  [Styled-Components](https://www.styled-components.com/) that can be used in
  React applications.
* A collection of prestyled React components.

## Some sites that use Varnish:

* [Varnish Demo](https://varnish.staging.apps.allenai.org/)
* [Skiff Template](https://skiff-template.apps.allenai.org/)
* [Grover](https://grover.apps.allenai.org/)
* [Aristo Demo](https://aristo-demo-2019.apps.allenai.org/)

## Getting Started

Varnish can be used in one of three ways:

1. ### By starting from the [Skiff Template](https://github.com/allenai/skiff-template/):

    The skiff-tamplate takes care of all the setup needed to use Varnish.
    To get started with the skiff template, follow the instructions in
    the [README](https://github.com/allenai/skiff-template/blob/master/README.md).

1. ### By embedding the CSS file into an HTML page (sans React):

    Simply add `<link rel=stylesheet href="https://cdn.jsdelivr.net/npm/@allenai/varnish@0.5.7/dist/theme.min.css" />`
    in the `<head>` tag of your HTML:

    ```html
    <html lang="en">
        <head>
            <title>️⛵</title>
            <link rel=stylesheet href="https://cdn.jsdelivr.net/npm/@allenai/varnish@0.5.7/dist/theme.min.css" />
        </head>
        <body>
            🎨
        </body>
    </html>
    ```

    | Without Varnish                                    | With Varnish Applied                              |
    | -------------------------------------------------- | ------------------------------------------------- |
    | <img src="./before.png" alt="without varnish"> | <img src="./after.png" alt="without varnish"> |

1. ### Using NPM:

    1. Add `<link rel=stylesheet href="https://cdn.jsdelivr.net/npm/@allenai/varnish@0.5.7/dist/theme.min.css" />`
       to the `<head>` of your html file, as described above.

    1. Install Varnish (you can use either `npm` or `yarn`):

        ```bash
        yarn add @allenai/varnish
        ```

    1. Install Varnish's peer depencies:

        ```bash
        yarn add antd react react-dom react-router-dom styled-components
        ```

    1. Add [TypeScript](https://www.typescriptlang.org/), if you'd like
       (we'd highly recommend you do so):

        ```bash
        yarn add typescript @types/react @types/react-dom @types/react-router-dom @types/styled-components
        ```

    1. Integrate Varnish into your application:

        ```typescript
        import React from 'react';
        import ReactDOM from 'react-dom';
        // Import the parts of Varnish you want. At minimum, you need to import
        // the ThemeProvider
        import { ThemeProvider } from '@allenai/varnish/theme';

        // Wrap your App with the Varnish ThemeProvider
        const VarnishApp = () => (
            <ThemeProvider>
                <App />
            </ThemeProvider>
        );

        // Render
       ReactDOM.render(<VarnishApp />, document.getElementById('root'));
        ```

    1. Use Varnish components:

        ```typescript
        import {
            Button
        } from '@allenai/varnish/components';

        // use as any other React component
        const MyComponent = () => (
            <div>
                <h1>👋 Hello World</h1>
                <Button>Click Me</Button>
            </div>
        );
        ```

## Components

Varnish is built on top of [Ant Design](https://ant.design/). To see a full
list of the Varnish specific components visit the [demo](https://varnish.staging.apps.allenai.org/design/colors).

If you don't find what you're looking for, you can use one of the
[Ant components](https://ant.design/docs/react/introduce) instead.


If you end up using an Ant Design component, but feel the output could be
improved, [let us know](mailto:reviz@allenai.org).

## Staying Up to Date

Varnish is changing quickly. To stay up to date as we release new versions,
join the `#varnish-releases` Slack channel.

## Helpful Links

Here's a list of resources that might be helpful as you get started:

* [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [ReactJS Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [Ant Design](https://ant.design)

## Getting Help

If you're stuck don't hesitate to reach out:

* Sending an email to [reviz@allenai.org](mailto:reviz@allenai.org)
* Opening a [Github Issue](https://github.com/allenai/varnish/issues/new/choose)
* Asking a question in the `#skiff-users` slack channel.

We're eager to improve Varnish and need your feedback to do so!

## Contributing

We welcome and encourage contributions. For more information on how to get
your development environment setup, review [this document](./CONTRIBUTING.md).
