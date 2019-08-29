import { useEffect } from 'react';

/**
 * Use this component inside a top-level <Route /> handler when you'd like
 * the page to be scrolled to the top after a URL change.
 *
 * See https://github.com/allenai/varnish/issues/119
 *     https://reacttraining.com/react-router/web/guides/scroll-restoration
 */
export const ScrollToTopOnPageChange = () => {
    useEffect(() => window.scrollTo(0, 0))
    return null;
};
