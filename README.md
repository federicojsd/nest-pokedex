<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repo
2. Ejecutar
```
npm i
```

3. Tener Nest Cli instalado
```
npm i -g @nestjs/cli
```

4. Clonar __.env.template__ y renombrarlo __.env__

5. Llenar las variables en el nuevo __.env__

6. Ejecutar la aplicacion en dev
```
npm run start:dev
```

7. Levantar la base de datos
```
docker-compose up -d
```

8. Cargar datos
```
http://localhost:3000/api/v2/seed
```

## Build de produccion
1. Crear archivo __.env.prod__
2. Llenar las variables de entorno
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
4. Para correrlo luego del build
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

## Notas
Heroku redeply sin cambios
```
git commit --allow-empty -m "Trigger Heroku deply"
git push heroku master
```

## Stack usado
* MongoDB
* Nest