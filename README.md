# UploadImagesS3
Upload  images s3 + mongodb
online :   https://fbs-dev-uploads3.herokuapp.com/

frontend repo : https://github.com/FranciscoBSpadaro/fbsdev-reacts3

install docker for local development with mongodb if you want

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
![alt text](https://fbsdevuploads.s3.us-east-1.amazonaws.com/awscredentialapicalls.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXNhLWVhc3QtMSJHMEUCIQC6MU7uLGpw5pxihvrPFShKNT%2Fzpj%2FrIG7KN9aIUu0riAIgU1hVHAjQMndd5ZxFQVIlUue%2FfSmEbydS9dvrJQ8BYWwq%2BgIIMBABGgw2MzUxOTYzMTcxMTciDPbmCbWhtaxPyG29FirXAuLUx9jrTjvNxiuhFKtMrEVOJN%2Fhb%2FafrgWDcClmr6T9xr9uT95W%2Bf0WryWvIdlN1VaLWtAjsj4D9upsIhDouhAXHJvXKP1T0fQkMbs95Q85f0A1CVQ6NY32wSPDV4XgvGlvl4Cv9gczGadmV0DkvLmSXaxl7FcYd1e6GSMPu6yyXZG8IWWJOk9Ir0d8W8%2BpBlgqgFQbiYHcZGaUY5FzytbrpY85sly4hLh0hFALH7kW6I08no1JufqAMltovqcAyQcI1B6ntQY%2FW%2FPCzPvWQeoyezQfF3PoOIeNY7FSd8%2FS9ZtFiJTWiPnjMGtBnwRYfrX3IWSvlT29VFb4WIF%2B8mSkir8U0mrFhIF3ApbSL%2FPaaTiT7%2BcDYsUUiUtf4H4vRP%2BfPXw%2B%2BsmAHXZfLY9Xp38DEH5T4NerTUM%2FxR9Cl4nwIvK7suTWuWdA%2Fd9KZ7NAnUPY7oMINxow%2BOz1hwY6swI0hhWsEbJNFppVeZKMbWYiJINtmRdzLqhzYKBQqablx2TmN%2B1IGex5qJ2yTdp2%2BMyEk2pn4zRMNS86TSSixmejVBattbUxnCYoH%2BpiT9h4vKF7z6EMNSa4%2BRLPNq6UvjrApD%2BqFZdFqubP2jX25cyQVtvQWyDTKD6dIbabfPAO10NoObC4NHeHP0wVOe9W7epUqD3MnKGykLnihlstre%2FSk%2FRGR4wmCZg%2F1LCcfmWeOQ7Je0UWxtHfPbjgvAZ2Bn%2FKnXoJKT%2FcWIP25tW23nss896uSgM1yucmKRzaPZim9h5CG%2FWgfxaf7mkxPqEOHtFbrkcrftxdPHoZvuyxJiVIXSx2Iv5fC8FqkIDv1yOcpEPYZPifl8h4sV3%2FAZ7rKOfl%2F%2Bn89m2EHP9qcDFF8Ag%2BHJfQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210725T163440Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZHZFGTW6XVKWQ5YE%2F20210725%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8ef17e1a7d29cd14d033d62611a3425e6b31622fa58c87f3717645ffc2f7ea25)

using insonmmia for upload images , list , and delete 

### get route = http://localhost:3000/posts

### post route = http://localhost:3000/posts  with multpart mode  in name field put ' file '  and next select you image for upload

### delete route = http://localhost:3000/posts/ ' id of image ' will delete using image id  and it will be removed from storage and mongodb

### for production this project i will use heroku
Procfile add to project.
in heroku dashboad go to settings / config vars and add environment variables




tutorial heroku para uso do bucket s3  https://devcenter.heroku.com/articles/s3-upload-node
não necessario para esse app
