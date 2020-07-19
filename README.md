# democredenciamentofront

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
docker-compose up
```

### Creates docker image for production deploy
```
docker build -f docker/dockerfile.prod  -t $USER/credenciamento-front
```

### Lints and fixes files
```
docker-compose exec app npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
