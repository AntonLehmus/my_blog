FROM node:9


RUN usermod -u 1010 node\
  groupmod --gid 1010 node\
  useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@5.6.0\
  usermod -u 1000 app\
  groupmod -g 1000 app


ENV HOME=/home/app

USER app
WORKDIR $HOME/blog