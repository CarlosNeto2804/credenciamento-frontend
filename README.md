# democredenciamentofront



### Project Setup and Compiles and hot-reloads for development
```
docker-compose up -d
```

### Creates docker image for production deploy
```
docker build -f docker/dockerfile.prod  -t $USER/credenciamento-front .
```

### Lints and fixes files
```
docker-compose exec app npm run lint
```


