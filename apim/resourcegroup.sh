#! /usr/bin/zsh
#variables
source variables.azcli
#
#create the resource group
echo "Resource Group"

az group create --location $loc --name $rg --output none