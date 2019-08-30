# usage: bash ./scripts/buildOverrides.sh
tsc ./src/lib/theme/generateOverrides.ts --module commonjs
node ./src/lib/theme/generateOverrides.js
yarn less-watch-compiler ./public ./public theme.less --enable-js --run-once
# cleanup
paths=(
    "./src/lib/theme/breakpoints.js"
    "./src/lib/theme/button.js"
    "./src/lib/theme/colors.js"
    "./src/lib/theme/DefaultVarnishTheme.js"
    "./src/lib/theme/fontWeight.js"
    "./src/lib/theme/generateOverrides.js"
    "./src/lib/theme/link.js"
    "./src/lib/theme/palette.js"
    "./src/lib/theme/shape.js"
    "./src/lib/theme/spacing.js"
    "./src/lib/theme/typography.js"
    "./src/lib/utils/base.js"
    "./src/lib/components/index.js"
    "./src/lib/components/link/base.js"
    "./src/lib/components/link/index.js"
    "./src/lib/theme/zIndex.js"
)
for path in "${paths[@]}"
do
    rm "$path"
done
