# LDAP
Steps for a simple LDAP test

Based on Joyent example
http://ldapjs.org/examples.html 

## Ubuntu VM
- Build an Ubuntu VM on the same VNet as APIM
- Install node 

```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

## LDAP Search
- Install ldapsearch for testing
- Install ldapjs
```
sudo apt install ldap-utils
npm install ldapjs
````

## Simple ldap server
- Add ldapserver.js to your Ubuntu host
```
mkdir ldap
cd ldap
vi server.js
vi client.js
```
- in one terminal window run server.js
```
node server.js
```
- in a second run cleint.js 
```
node client.js
```
- In the server window: Received message => Message From Client
- In the client window: Hello! Message From Server!!

https://www.js-tutorials.com/nodejs-tutorial/simple-websocket-example-with-nodejs/

## Prep for APIM test
- change client.js, const url, from local host to actual url of your host
- make sure you have nsg rule to let 8080 in

## APIM test
- Follow the official docs to create a websocket API in APIM
- https://docs.microsoft.com/en-us/azure/api-management/websocket-api
- Test the API in APIM. You should receive the same success message: Hello! Message from Server 

