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
    - send.js - sends messages to the namespace
    - recieve.js read messages from the namespace
    - Add connection string and namespace at the top of both files