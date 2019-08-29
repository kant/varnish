import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import { GlobalStyles, ThemeProvider } from '../lib/theme';
import { ScrollToTopOnPageChange } from '../lib/components/ScrollToTopOnPageChange';


export default class App extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <GlobalStyles />
                    <ScrollToTopOnPageChange />
                    <ThemeProvider>
                        <Route path="/" component={Home} />
                    </ThemeProvider>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}
