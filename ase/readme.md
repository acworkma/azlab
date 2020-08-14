# ASE
App Service Enviroment

## Objective
Create an App Service Enviroment for testing Chat Bot on private VNET

## Files
variables.azcli - defines variables to be included in other scripts
resourcegroup.azcli - creates the resource group
network.azcli - create the network for the vm's
ase.azcli - create the Application Service Enviroment
appregisration.azcli - create the app registration in AAD
appserviceplan.azcli - create the app service plan

bot.azcli - build the bot

vm.azcli - since private vm will be used to test

dns.azcli - create the private dns and link to vnets

bluecat.azcli - create the bluecat appliance

build.azcli - build everything
cleanup.azcli - delete the resource group