/**
 * Configure `postcss`, which we use to prepare an optimized CSS file
 * for distribution.
 */
module.exports = {
    plugins: [
        require('cssnano')({ preset: 'default' })
    ]
};
