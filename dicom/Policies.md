## Deny Unrestricted Network Access to Storage Accounts
Denies unrestricted network access in your storage account firewall settings. 
Instead, configure network rules so only applications from allowed networks can access the storage account. 
To allow connections from specific internet or on-premise clients, access can be granted to traffic from specific Azure virtual networks or to public internet IP address ranges

## Storage accounts should have the minimal TLS version of 1.2
Setting minimal TLS version to 1.2 improves security by ensuring your Storage accounts can only be accessed from clients using TLS 1.2. Using versions of TLS less than 1.2 is not reccomended since they have well documented security vunerabilities.

## Storage account blob and container public access should be disallowed
Anonymous public read access to containers and blobs in Azure Storage is a convenient way to share data, but might present security risks. To prevent data breaches caused by undesired anonymous access, Microsoft recommends preventing public access to a storage account unless your scenario requires it.