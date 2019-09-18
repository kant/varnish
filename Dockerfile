FROM node:10.15.2

# Setup a spot for our code
WORKDIR /usr/local/src/varnish

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Install demo dependencies
COPY demo/package.json demo/yarn.lock ./demo/
WORKDIR /usr/local/src/varnish/demo
RUN yarn install
WORKDIR /usr/local/src/varnish

# Copy in the source code
COPY . .

# This tells build scripts and libraries that we're in development, so they
# can include stuff that's helpful for debugging even if it's a tad slower.
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
ARG BABEL_ENV=development
ENV BABEL_ENV $BABEL_ENV

# Build the UI
RUN yarn build
RUN yarn link

# Link React
# TODO: Link to Github Issue
WORKDIR /usr/local/src/varnish/node_modules/react
RUN yarn link

# Build the demo
WORKDIR /usr/local/src/varnish/demo
RUN yarn link @allenai/varnish
RUN yarn link react
RUN yarn build

# By default we start the demo
ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
