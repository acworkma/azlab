# DNS
DNStesting project

## Objective
Create an Azure enviroment that allows for the testing of private DNS and VNET
- Spoke VNET - will host private DNS
- HUB VNET - will need to be able to resolve spoke vnet private DNS

## Files
variables.azcli - defines variables to be included in other scripts
resourcegroup.azcli - creates the resource group
network.azcli - create the network for the vm's
dns.azcli - create the private dns and link to vnets
vm.azcli - create the vm's
bluecat.azcli - create the bluecat appliance

build.azcli - build everything
cleanup.azcli - delete the resource group