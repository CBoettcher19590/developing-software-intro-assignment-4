import sayHello from './modules/yargs';
import yargs = require('yargs');

//Here we pass in our say hello function from our modules folder
sayHello( yargs );

yargs.help();

//This tells yargs to parse the parameters
yargs.parse();

