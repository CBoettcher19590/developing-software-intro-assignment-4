import sayHello from './modules/yargs';
import yargs = require('yargs');

sayHello( yargs );

yargs.help();

//This tells yargs to parse the parameters
yargs.parse();



//This function was for Versions before 7.0.0

// //This functuion is only used for testing purposes
// export default function hiTerminal() {
//   const firstPart = "Hello";
//   const secondPart = " Terminal!";

//   const wholePart: string = firstPart + secondPart;

//   return wholePart;
// }

// hiTerminal();
