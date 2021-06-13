# UploadImagesS3
Upload de imagens s3+ mongodb
install docker

1. Pull mongo image from docker hub: docker pull mongo
2. Run image: docker run --name my_mongo -p 27017:27017 -d mongo


arquivo .env


APP_URL=http://localhost:3000
MONGO_URL=mongodb://localhost:27017/   
STORAGE_TYPE=local  or s3
BUCKET_NAME=
AWS_ACESS_KEY_ID=
AWS_SECRET_ACESS_KEY=
AWS_DEFAULT_REGION=us-east-1

