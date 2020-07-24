require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong crawl noble social install force orange team'; 
let testAccounts = [
"0xf633d6af8ae2cadbd49f413c45e57ddc97ec9eccdc5a1c85309d572a84481230",
"0xaa6b780b10f98c15b8dea6d75546e13687b99516ce14c8494534205366c267f7",
"0x77954c5f9d8bbd504efcf73927d3c7458257dd2259d85f9d4520163b38a87ddb",
"0x0dbb3065183511f059904c1da334cc3cb94f3baa556316ad44807a1e1fa6602a",
"0x478500ef493d49c48ba901b8d9c57c1313d5f3e3a22decebde9126ce0bb49438",
"0xe0ee5d2b2234fd648985e150116220b0fdb13ed73abf76962ce10d31b99994af",
"0xa5bf6b3e9f0da06921dc09c2422e0ad7fb6fdc5e232e482335ea9c1df46989b9",
"0xb989a2439d66db53d7312bb9a0c4894a05e2dc957fedca608eecd198c2b32422",
"0x032259b8e4d3981416b8b650adaea108e8ce239a4add7b82f714f24aea0e0190",
"0xb5356d4666536f76ef31c10d0bf619d948578f3e0caf6fb2bd0d78f571eec88d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
