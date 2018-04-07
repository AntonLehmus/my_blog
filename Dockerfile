FROM node:9

ARG workdir

USER node

USER root
# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
COPY package.json /tmp/package.json
RUN cd /tmp && npm install --quiet
RUN mkdir -p $workdir && cp -r /tmp/node_modules $workdir && chown -R node:node $workdir

COPY . $workdir

USER node
WORKDIR $workdir