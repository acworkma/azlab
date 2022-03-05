# LDAP
Steps for a simple LDAP test


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
```
sudo apt install ldap-utils
````

## Simple ldap server
- Install ldapjs
- Add ldapserver.js to your Ubuntu host
```
mkdir ldap
cd ldap
npm install ldapjs
vi ldapserver.js
```
- in one terminal window run ldapserver.js
```
node ldapserver.js
```
- in a second terminal window run ldapsearch 
```
ldapsearch -H ldap://localhost:1389 -x -D cn=root -w secret -LLL -b "o=myhost" cn=root
```
- In the server window: Notice the service is running
- In the ldapsaerch window: You will bind and get a the root record

## Simple LDAP Client
- Add ldapclient.js to your Ubuntu host
```
vi ldapclient.js
```
-  run ldapclient.js
```
node ldclient.js
```
- You will bind and see the search result

Based on Joyent example
http://ldapjs.org/examples.html 



## Prep for APIM test
- change client.js, const url, from local host to actual url of your host
- make sure you have nsg rule to let 8080 in

## APIM test
- Follow the official docs to create a websocket API in APIM
- https://docs.microsoft.com/en-us/azure/api-management/websocket-api
- Test the API in APIM. You should receive the same success message: Hello! Message from Server 

