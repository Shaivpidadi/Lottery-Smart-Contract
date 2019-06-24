const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const {interface, bytecode} = require('../compile');

let lottery;
let accounts;

beforeEach(async() => {
    accounts = await web3.eth.getAccounts();
    console.log(await new web3.eth.Contract(JSON.parse(interface)));
    lottery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode})
        .send({from: accounts[0], gas: '4000000'})
    });

describe('Lottery Contract', () => {

    it('deploys a contract',() => {
        assert.ok(lottery.options.address);
    });
});