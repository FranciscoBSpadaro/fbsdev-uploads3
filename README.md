# UploadImagesS3
Upload  images s3 + mongodb

install all modules with npm install

install docker for local development with mongodb

1. Pull mongo image from docker hub: docker pull mongo
2. Run image: docker run --name my_mongo -p 27017:27017 -d mongo
#### or use mongodb atlas
https://account.mongodb.com/account/login
and use this variable
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
AWS_ACESS_KEY_ID=
AWS_SECRET_ACESS_KEY=
AWS_DEFAULT_REGION=us-east-1
````
this is configuration example for  .env  local dev mode if prod use s3 with  STORAGE_TYPE=s3
and add bucket name and aws credentials 

use insonmmia for upload images , list , and delete 

### get route = http://localhost:3000/posts

### post route = http://localhost:3000/posts  with multpart mode  in name field put ' file '  and next select you image for upload

### delete route = http://localhost:3000/posts/ ' id of image ' will delete using image id  and it will be removed from storage and mongodb

### for production this project i will use heroku
Procfile add to project.
in heroku dashboar go to settings / config vars and add environment variables
APP_URL=  heroku app url
and all other variables like .env local file



tutorial heroku para uso do bucket s3  https://devcenter.heroku.com/articles/s3-upload-node