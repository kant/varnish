## Contributing the Varnish

 1. Clone the repository

     ```bash
    git clone git@github.com:allenai/varnish.git
    cd varnish
    cd ui
    yarn install
    ```

 1. Running the demo

     ```bash
    yarn start
    ```

 1. For contributors external to AI2, make a fork and request a pr from that fork

 1. For contributors internal to AI2, please request access rights by contacting REVIZ, then make a pr for your updated branch

 1. Build and publish NPM (will be done via google soon, but for now)

     1. Update the package.json version field appropriately and create a git commit and tag for the version

         ```bash
        npm version major|minor|patch
        ```

     1. Publish the tag to github

         ```bash
        git push --tags
        ```

         **If the above command does not push anything to the repo, that is because our project has the package.json in a different root as out .git file.
        To solve, you need to add an empty file './ui/.git' [see here](https://github.com/npm/npm/issues/9111)
        Then, revert the change to packages.json and re-run npm version**

     1. Build the lib (from ui dir)

        ```bash
        yarn build
        ```

     1. Move lib files to dist folder (from ui dir)

         ```bash
        yarn prepare-npm
        ```

     1. Publish to npm from the dist folder

         ```bash
        npm publish --access public ./dist
        ```
