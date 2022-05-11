# HC LAB

## Objective

Create an Azure enviroment that allows for the testing of different HC components

## General Resources

- variables.azcli - defines variables to be included in other scripts
- resourcegroup.azcli - creates the resource group

### Azure Service Bus

- namespace.azcli - creates a service bus namespace
- queue.azcli - creates a queue in the service bus namespace
- connectionstring.azcli - returns the connections string
- node-sb - directory for sample read/write node app for ServiceBus
  - install node components
    - npm install @azure/service-bus
    - npm install dotenv --save
  - rename .env.sample to .env
    - add in connection string and queue name
  - send.js - sends messages to the namespace
  - recieve.js read messages from the namespace
