const ldap = require('ldapjs');

//create the client
const client = ldap.createClient({
  url: ['ldap://127.0.0.1:1389', 'ldap://127.0.0.2:1389']
});

//bind the client
client.bind('cn=root', 'secret', (err) => {
    //assert.ifError(err);
  });

//perform the search

const opts = {
    filter: '(cn=root)',
    scope: 'sub',
    attributes: ['dn', 'sn', 'cn']
  };

client.search('o=myhost', opts, (err, res) => {
    //assert.ifError(err);
  
    res.on('searchRequest', (searchRequest) => {
      console.log('searchRequest: ', searchRequest.messageID);
    });
    res.on('searchEntry', (entry) => {
      console.log('entry: ' + JSON.stringify(entry.object));
    });
    res.on('searchReference', (referral) => {
      console.log('referral: ' + referral.uris.join());
    });
    res.on('error', (err) => {
      console.error('error: ' + err.message);
    });
    res.on('end', (result) => {
      console.log('status: ' + result.status);
    });
  });

//error  
client.on('error', (err) => {
  // handle connection error
  console.log(err);
})