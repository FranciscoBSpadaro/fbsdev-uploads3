# UploadImagesS3
### WebApp Integrado com AWS ElasticBeanStalk + AWS S3 + MONGODB
online :   http://fbs-dev-uploads3.us-east-1.elasticbeanstalk.com


### Caso de uso
- Objetivo desse mini projeto é elaborar uma aplicação web de upload de imagens exemplo, IMGUR
- Utilizando Node.js + React , Mongodb, AWS S3 , AWS Elastic BeanStalk.
- Utilizar princípios de CDN 'Content Delivery Network' e ter escalabilidade e distribuição ,  armazenar arquivos estáticos de imagens no bucket AWS S3 , visando redução de custos de armazendo e não armazenar no proprio servidor ou app.
- Mongdb Atlas, vai armazenar endereços das imagens para o Aws s3 e gerenciar o CRUD.  " Ambiente Produção" .
- Dependências do backend : express ' framework para criação de API, Cors ' Cross-Origin Resource Sharing, Middleware que se integra com express para Requisiçoes HTTP' , Mongoose ' Mongoose é uma biblioteca de programação orientada a objetos que cria a modelagem de 
 dados para o mongodb' , aws-sdk 'ferramenta de desenvolvido para integrações com serviços AWS' , morgan'registrar logs de requisição HTTP no terminal', Multer ' Middleware para tratar os multipart/form-data que são arquivos de uploading ' , multers3
- Dependências de Desenvolvimento : dotenv, nodemon
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
create .env file in root of project and add the follow lines   env dev or production

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
in elastic Beans stalk variables, add the same .env vars...
Procfile add to project for Elastic Beanstalk

using insonmmia for upload images , list , and delete 
local development routes:
### get route = http://localhost:3000/posts

### post route = http://localhost:3000/posts  with multpart mode  in name field put ' file '  and next select you image for upload

### delete route = http://localhost:3000/posts/ ' id of image ' will delete using image id  and it will be removed from storage and mongodb

Esse projeto foi inicialmente desenvolvindo apartir da aula da ' RocketSeat' inicialmente projetado para funcionar no Heroku
para evitar custos no heroku fiz a mudança para AWS.
e com isso o Procfile foi alterado, mais detalhes nos historicos de commit.
para fazer o upload do app pelo ElasticBeanStalk  deve ser compactado no formato zip , para isso baixar o projeto via git clone , e dentro da pasta do projeto abrir o git bash e digitar ' git archive --format=zip HEAD > myapp.zip '   e ira compactar o app no padrão aceito pelo ElasticBeanStalk.
####ElasticBeanStalk Environments
- Node.js  18
- 64bit Amazon Linux 2/5.8.5
- copy elastic beanstalk url domain,   add it to ' APP_URL' env


tutorial heroku para uso do bucket s3  https://devcenter.heroku.com/articles/s3-upload-node
não necessario para esse app

### frontend repo : https://github.com/FranciscoBSpadaro/fbsdev-reacts3
