import { createContext } from 'react';

/**
 * Different variants represent different application level layouts:
 *
 *  - The "app" variant is a layout with a left aligned navigation menu. This
 *    is traditionally used for applications with several levels of navigation.
 *
 *  - The "default" variant is a standard, horizontally centered application. This
 *    is a fairly conventional layout used for content  rich websites.
 */
export type LayoutVariant = 'app' | 'default';

/**
 * Information captured about the current layout.
 */
interface LayoutSettings {
    /* The current, active variant. */
    layoutVariant: LayoutVariant;
}

/**
 * This context is intended to allow information about the current, active
 * layout to be shared across various components at different levels of the tree.
 *
 * Generally speaking a single `<LayoutContext.Provider />` should be used
 * per page. More complex scenarios, however, might necessitate using multiple.
 */
export const LayoutContext = createContext<LayoutSettings>({
    layoutVariant: 'default'
});
