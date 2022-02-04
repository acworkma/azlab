Testing ARM deployment templates for Logic Apps

#create the resource group
az group create --name 20220204logicapp --location westus3

#run the deployment
az deployment group create --resource-group 20220204logicapp --template-file template.json --parameters parameters.json







#clean up
az group delete --name 20220202logicapp