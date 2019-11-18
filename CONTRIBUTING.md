# Contributing the Varnish

## Requirements

The only thing you need to install before getting started is [Docker 🐳](https://www.docker.com/).

## Getting Started

To get your development environment setup, follow these instructions:

1. Clone the repository:

     ```bash
    git clone git@github.com:allenai/varnish.git
    ```

1. Start an instance of the demo:

   ```bash
   docker-compose up --build
   ```

1. Visit [http://localhost:3000](http://localhost:3000) and use the demo to
   verify the changes you're making.

1. Once you're complete, open a pull-request with your changes.

1. Before merging into master, make sure that your changes are properly formatted:

   ```bash
   yarn run lint:fix
   ```

## Releasing a new Version

To release a new version, you'll need to install [NodeJs](https://nodejs.org/en/)
and [yarn](https://yarnpkg.com/lang/en/).

Then, follow these steps:

1. Make sure you're in a clean state, with the latest changes:

    ```bash
    git fetch origin
    git reset --hard origin/master
    ```

2. Review you'll be releasing:

    ```bash
    # Replace `v0.5.8` with the latest version
    git log v0.5.8...HEAD
    ```

   If there's something there that you're not positive is ready to be released,
   ask the person responsible for that commit. You'll also use this information
   to inform the version you choose to release in step #4.

3. Login to `npm`:

    ```bash
    npm login
    ```

   Note, if you haven't been added to the `@allenai` NPM organization you'll
   get a permissions error when you attempt the `publish` command below. If
   this occurs ask someone from [REVIZ](mailto:reviz@allenai.org) to add you.

4. Create a new version, we intend to follow [semantic versioning](https://semver.org/),
   though at the moment we're pre-1.0, and accordingly increase the `minor` version
   for significant changes, and the `patch` version for small ones.

   ```bash
   # Replace `0.5.8` with the version you're releasing.
   npm version 0.5.8
   ```

5. Commit and push the change, and make sure to include tags:

   ```bash
   git push --tags origin master
   ```

6. Publish the version to `npm`:

   ```bash
   npm publish --access public
   ```

7. Draft and publish a new [Github Release](https://github.com/allenai/varnish/releases).
   To get a list of changes since the last tag, run this command:

   ```bash
   ~ git log vX.X.X...vY.Y.Y
   ```

   Where `vX.X.X` is the previous version, and `vY.Y.Y` is the new one. Try to
   base the description of the release off of previous ones. The idea is to
   give users a clear idea of what changed in the release.

8. Announce the new version by linking to the Github release in the
   `#varnish-releases` Slack channel.
