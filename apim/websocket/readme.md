# Websocket
Steps for a simple websocket test 
<!--- insert websocket doc page --> 

## Ubuntu VM
- Build an Ubuntu VM on the same VNet as APIM
- Install node 

```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

## Simple websocket 
- Add server.js and client.js to your Ubuntu host
```
mkdir websocket
cd websocket
npm install ws
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

