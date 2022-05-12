# HC LAB

## Objective

Create an Azure enviroment that allows for the testing of different HC components

## General Resources

- variables.azcli - defines variables to be included in other scripts
- resourcegroup.azcli - creates the resource group
- cleanup.azcli - deletes the resource group and all resources in it

### Azure Service Bus

- sb_namespace.azcli - creates a service bus namespace
- sb_queue.azcli - creates a queue in the service bus namespace
- sb_connectionstring.azcli - returns the connections string
- sb_node - directory for sample read/write node app for ServiceBus
  - install node components
    - npm install @azure/service-bus
    - npm install dotenv --save
  - rename .env.sample to .env
    - add in connection string and queue name
  - send.js - sends messages to the namespace
  - recieve.js read messages from the namespace

### Azure Event Grid

- eg_topic.azcli - creates an event grib topic
- eg_webapp.azcli - deploy a sample app to view the event grid
- eg_subscribe.azcli - subscribe to the topic 
- eg_event.azcli - send an event