
import yargs = require('yargs');

yargs.command(
  'assign-name',

    'Take a name, print it out the the screen and say hello',
    {
      name: {
        type: 'string',
        alias: 'n',
        description: 'The name of who we are saying hello to'
      }
    },
    
    function( args ){
      let helloName = args.name;
      console.log("Hello " + helloName);
    }
);

//This tells yargs to include the --help flag
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
