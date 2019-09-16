# Contributing the Varnish

## Requirements

The only thing you need to install before getting started is [Docker 🐳](https://www.docker.com/).

## Getting Started

To get your development environment setup, follow these instructions:

1. Clone the repository:

     ```bash
    git clone git@github.com:allenai/varnish.git
    cd varnish
    cd ui
    yarn install
    ```

1. Start an instance of the demo:

   ```bash
   docker-compose up --build
   ```

1. Visit [http://localhost:8080](http://localhost:8080) and use the demo to
   verify the change syou're making.

1. Once you're complete, open a pull-request with your changes.

Of note, if you edit any of the files in the `./theme` directory, run the
following command to update a few static files that are committed to the
repository:

```bash
bash ui/scripts/buildOverrides.sh
```

## Releasing a new Version

To release a new version, follow these steps:

1. Create a new version, we follow [semantic versioning](https://semver.org/):

   ```bash
   npm version major|minor|patch
   ```

1. Commit and push the change, and make sure to include tags:

   ```bash
   git push --tags origin master
   git push origin master
   ```

1. Build the required artifacts:

   ```
   yarn build
   yarn prepare-npm
   ```

1. Publish the version to `npm`:

   ```bash
   npm publish --access public ./dist
   ```
