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

## Releasing a new Version

To release a new version, you'll need to install [NodeJs](https://nodejs.org/en/)
and [yarn](https://yarnpkg.com/lang/en/).

Then, follow these steps:

1. Create a new version, we follow [semantic versioning](https://semver.org/):

   ```bash
   npm version major|minor|patch
   ```

1. Commit and push the change, and make sure to include tags:

   ```bash
   git push --tags origin master
   ```

1. Publish the version to `npm`:

   ```bash
   npm publish --access public
   ```

1. Draft and publish a new [Github Release](https://github.com/allenai/varnish/releases).
   To get a list of changes since the last tag, run this command:

   ```bash
   ~ git log vX.X.X...vY.Y.Y
   ```

   Where `vX.X.X` is the previous version, and `vY.Y.Y` is the new one.

1. Announce the new version by linking to the Github release in the
   `#varnish-releases` Slack channel.
