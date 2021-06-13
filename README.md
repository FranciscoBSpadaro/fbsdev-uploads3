# UploadImagesS3
Upload  images s3 + mongodb

install all modules with npm install

install docker for local development with mongodb

1. Pull mongo image from docker hub: docker pull mongo
2. Run image: docker run --name my_mongo -p 27017:27017 -d mongo

start script: ' yarn dev'   - for dev environment

'yarn start' for production

install dotenv for local development

configuration example for  .env  local mode if s3 storage_type should be ' s3 '
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


credits : https://www.youtube.com/watch?v=MkkbUfcZUZM&t=50s
