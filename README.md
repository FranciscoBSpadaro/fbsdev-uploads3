# UploadImagesS3
Upload  images s3 + mongodb
online :   https://fbs-dev-uploads3.herokuapp.com/
frontend repo : https://github.com/FranciscoBSpadaro/fbsdev-reacts3

### Caso de uso
- Objetivo desse mini projeto é elaborar uma aplicação web de upload de imagens
- Utilizar principios de CDN e ter escabilidade e distribuição ,  armazenar arquivos estáticos de imagens no bucket AWS S3 , visando redução de custos de armazendo e não armazenar no proprio servidor ou app.
- Mongdb Atlas, vai armazenar endereços das imagens para o Aws s3 e gerenciar o CRUD.  " Ambiente Produção" . 
- Docker para ambiente de desenvolvomento porem opcional.

#### Iniciando o Projeto.

install docker for local development with mongodb if you want

1. Pull mongo image from docker hub: docker pull mongo
2. Run image: docker run --name my_mongo -p 27017:27017 -d mongo
#### or use mongodb atlas
https://account.mongodb.com/account/login
and use this variable  example:
mongo_url  = mongodb+srv://user:password@cluster0.ian5y.mongodb.net/RepoName?retryWrites=true&w=majority
change user and password...

start script: ' yarn dev  or npm run dev'   - for dev environment

'yarn start or npm start' for production

#### dotenv.
create .env file in root of project and add the follow lines

````
APP_URL=http://localhost:3000
MONGO_URL=mongodb://localhost:27017/   
STORAGE_TYPE=local
BUCKET_NAME=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
NODE_ENV=development

production example
APP_URL=https://heroku.app...
MONGO_URL=mongodb+srv://user:pass@cluster0.ian5y.mongodb.net/databasename?retryWrites=true&w=majority
STORAGE_TYPE=s3
BUCKET_NAME=bucketname
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
NODE_ENV=production
````
  
use aws credential for api calls !!


using insonmmia for upload images , list , and delete 

### get route = http://localhost:3000/posts

### post route = http://localhost:3000/posts  with multpart mode  in name field put ' file '  and next select you image for upload

### delete route = http://localhost:3000/posts/ ' id of image ' will delete using image id  and it will be removed from storage and mongodb

### for production this project i will use heroku
Procfile add to project.
in heroku dashboad go to settings / config vars and add environment variables




tutorial heroku para uso do bucket s3  https://devcenter.heroku.com/articles/s3-upload-node
não necessario para esse app
