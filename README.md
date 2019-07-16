# carnatic-api
API's for carnatic music

# Running as a docker container
docker run -d -p 80:3000 carnatic-api

# Running as a compose
docker-compose up -d

# Getting a JWT token
This API uses Auth0 to geenerate a JWT token. Following the below instructions to get a JWT token

Request
```
curl --request POST \
  --url https://carnatic.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"<<CLIENTID>>","client_secret":"<<CLIENT_SECRET>>","audience":"https://carnatic-auth","grant_type":"client_credentials"}'
```
Contact the git owner for a valid client_id and client_secret

Response
```
{
  "access_token": "<<BEARER_TOKEN>>",
  "token_type": "Bearer"
}
```
Sending an API request

```
curl --request GET \
  --url http://path_to_your_api/ \
  --header 'authorization: Bearer <<BEARER_TOKEN>>'
```
Note that POST, PATCH, DELETE APIs will require a JWT token
