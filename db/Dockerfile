FROM node:9-alpine

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@5.6.0

ENV HOME=/home/app

USER app
WORKDIR $HOME/blog