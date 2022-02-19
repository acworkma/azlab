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
npm install ws
```

## Simple websocket 
- Add server.js and client.js to your Ubuntu host
- in one terminal window run server.js
- in a second run cleint.js 

A succesful test will show hello world 
