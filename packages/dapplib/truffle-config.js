require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remain essay hope clog tackle topple'; 
let testAccounts = [
"0x5e73088d80753c4eaee0e0c9a2eec9db5ddb6d28183088823e39aa440d4af82a",
"0x9b2dd31a27691d73fb4e3b275d0b72f25f81f8d0cbe2b515ccf984d18152639f",
"0x9724732442d5b0b0bba645b87d3e733d39a020c3b44cc6b5737dafe15ca6cee6",
"0xf79c1407a2336977e91cac19ea882a42e8f9bac613a6ed84b2fcf86b38ccd72f",
"0x4dc0ef8aea5f932dd3a23664ac5f031ddd91db6ec3ef2bcb0196b3952e1d1ea2",
"0x577511a158bf9216f1b913fe1c874f696f3066b94ed8d8ebe4299e8a913e6e34",
"0xcb26f0ff59fb741ad290e9dd37b8258e952cc4ead2fbe654e371cc358ed75cf3",
"0x82dbf83bbcf42c43fbad777f537835c45c5f6b386fbc0a1383769d0f070a534b",
"0x436beca1cd2754a47a8dde71fdc22c9df3211ac396d3f398da32cfa5bbcd3ce8",
"0x5780f9bf783b73cdb992f0a862304c2b933e4007504fecb1473b359ae84ad9b4"
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
