import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@allenai/varnish/theme';
import { ScrollToTopOnPageChange } from '@allenai/varnish/components';

import '@allenai/varnish/theme/theme.less';

import AppChrome from './AppChrome';

export default class App extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <ScrollToTopOnPageChange />
                    <ThemeProvider>
                        <Route path="/" component={AppChrome} />
                    </ThemeProvider>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}
