import { useEffect } from 'react';
import { withRouter } from 'react-router';
import { History } from 'history';

/**
 * Use this component inside a top-level <Route /> handler when you'd like
 * the page to be scrolled to the top after a URL change.
 *
 * This component requires a router.
 *
 * See https://github.com/allenai/varnish/issues/119
 *     https://reacttraining.com/react-router/web/guides/scroll-restoration
 */
const ScrollToTopOnPageChangeImpl = ({ history }: { history: History }) => {
    useEffect(() => history.listen(() => { window.scrollTo(0, 0); }));
    return null;
};

export const ScrollToTopOnPageChange = withRouter(ScrollToTopOnPageChangeImpl);
