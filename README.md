BurningPig-encryption
=====================

A pure javascript module for the RSA functionality for [BurningPig](https://github.com/JoeDoyle23/BurningPig) &amp; Minecraft encryption

#### What does it do?
This module can generate an RSA public/private key pair in pure JavaScript. It can also generate the ASN.1 for the key.

#### Is it cryptographically safe?
I have no idea. I only use it for implimenting the encryption for the Minecraft protcol. I don't use it for any important encryption scenarios.

#### What is it based on?
This module is adapated for Node.js from the following libraries:

 * [rsasign.js](https://github.com/kjur/jsrsasign) library written by Kenji Urushima 
 * [Javascript BigNumber & RSA library](http://www-cs-students.stanford.edu/~tjw/jsbn/) written by Tom Wu 
 * [node-bignumber](https://github.com/eschnou/node-bignumber) written by Laurent Eschenauer

#### Example:
You can run this example by running `node example` 
 
    var rsa = require("./src/rsa.js");
    var key = new rsa.Key();
    
    var message = "All your bases are belong to us.";
    console.log("Message:\n"+message+"\n");
    
    // Generate a key
    key.generate(1024, "10001");
    console.log("Key:\n");
    console.log("n:" + key.n.toString(16));
    console.log("e:" + key.e.toString(16));
    console.log("d:" + key.d.toString(16));
    console.log("\n");
    
    // Encrypt
    var encrypted = key.encrypt(message);
    console.log("Encrypted:\n" + rsa.linebrk(encrypted, 64) + "\n" );
    
    // Decrypt
    var decrypted = key.decrypt(encrypted);
    console.log("Decrypted:" + rsa.linebrk(decrypted, 64) + "\n");
    
    var sig = key.signString(message, "sha256");
    console.log("String signature: \n" + rsa.linebrk(sig, 64));
    
    var pubkey = new rsa.Key();
    pubkey.n = key.n;
    pubkey.e = key.e;
    
    var verified = pubkey.verifyString(message, sig);
    
    console.log("Verfied: " + verified);

#### License
BurningPig-encryption & the base libraries are MIT licensed.

See the LICENSE file for the list of specific licenses for each library
