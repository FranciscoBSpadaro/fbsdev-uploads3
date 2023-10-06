# UploadImagesS3
### WebApp Integrado com AWS ElasticBeanStalk + AWS S3 + MONGODB
online :   http://fbs-dev-uploads3.us-east-1.elasticbeanstalk.com


### Caso de uso
- Objetivo desse mini projeto é elaborar uma aplicação web de upload de imagens exemplo, IMGUR
- Utilizando Node.js + React , Mongodb, AWS S3 , AWS Elastic BeanStalk.
- Utilizar princípios de CDN 'Content Delivery Network' e ter escalabilidade e distribuição ,  armazenar arquivos estáticos de imagens no bucket AWS S3 , visando redução de custos de armazendo e não armazenar no proprio servidor ou app.
- Mongdb Atlas, vai armazenar endereços das imagens para o Aws s3 e gerenciar o CRUD.
- Dependências do backend : 
 - Express : framework para criação de API.
 - Cors : Cross-Origin Resource Sharing, Middleware que se integra com express para Requisiçoes HTTP.
 - Mongoose :  é uma biblioteca de programação orientada a objetos que cria a modelagem de dados para o mongodb.
 - aws-sdk ferramenta de desenvolvido para integrações com serviços AWS.
 - Morgan : registrar logs de requisição HTTP no terminal'.
 - Multer : Middleware para tratar os multipart/form-data que são arquivos de uploading.
 - multers3 : versão do multer para o AWS S3
 - Dependências de Desenvolvimento : dotenv, nodemon
 - Docker para ambiente de desenvolvomento 'opcional'.

#### Iniciando o Projeto.

- Instalar o docker para o desenvolvimento local com o mongdb  ' opcional '
  - Pull mongo image from docker hub: docker pull mongo
  - Run image: docker run --name my_mongo -p 27017:27017 -d mongo

ou use o mongodb atlas

- Criar conta no MongoDb Atlas
  - https://account.mongodb.com/account/login
  - crie um ambiente de desenvolvimento para seus projetos
  - crie um cluster M0 que é gratuito , AWS N.Virginia
  - crie uma database com o nome que preferir e  em collections coloque o nome ' posts ' 
  - em Cluster clique em connect para ter a url que será usada na variavel de ambiente
  - exemplo : mongo_url  = mongodb+srv://user:password@cluster0.ian5y.mongodb.net/RepoName?retryWrites=true&w=majority
  - Criar um usuário e senha com acesso adm e com ip liberado , o usuario e senha tem que colocar na url mongo_url , substituir o ' user ' pelo seu usuário e password pela sua senha.

#### dotenv.
dote env é necessario para o ambiente de desenvolvimento ,  npm install dotenv.

abaixo as variáveis de ambiente usando o exemplo de modo dev e produção

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
  
Na aws crie um user e crie as credênciais de acesso para chamadas de api e adicione uma permissão para o usuario com politicas de acesso full ao bucketS3
' AmazonS3FullAccess ' 

- Iniciar a API :
  - no terminal digite : ' yarn dev  or npm run dev'   -  para usar os modulos de ambiente de desenvolvimento como ' nodemon ' 
  - 'yarn start or npm start' para produção


no ambiente de desenvolviemento pode testar as rotas usando insomnia ou postman com as rotas abaixo:
### get route = http://localhost:3000/posts

### post route = http://localhost:3000/posts  with multpart mode  in name field put ' file '  and next select you image for upload

### delete route = http://localhost:3000/posts/ ' id of image ' will delete using image id  and it will be removed from storage and mongodb


- Esse projeto foi  inicialmente projetado para funcionar no Heroku mas devido a mudanças de cobrança pelos serviços e evitar custos , fiz a mudança para AWS.
 -  Procfile foi adicionado para executar o script ' start ' definido no package.json , ' web: node src/index.js '.
 -  ElasticBeanStalk : O upload do app para o ElasticBeanStalk , deve ser compactado no formato zip , para isso baixar o projeto via git clone , e dentro da pasta do projeto abrir o git bash e digitar ' git archive --format=zip HEAD > myapp.zip '   e ira compactar o app no padrão aceito pelo ElasticBeanStalk.
    
#### ElasticBeanStalk Environments
- Node.js  18
- 64bit Amazon Linux 2/5.8.5
- Single instance ' free tier elegible .

- Observações
  - Não atualizar os modulos para a ultima versão ' @latest'  , está dando conflitos e causa erros para fazer uploads
  - copiar o endereço do domain do ElasticBeanStalk e adicionar na variável, ' APP_URL'
  - ElasticBeanStalk usa porta 80 e faz requições http , para https tem que  comprar um domínio da aws.


### frontend repo : https://github.com/FranciscoBSpadaro/fbsdev-reacts3
