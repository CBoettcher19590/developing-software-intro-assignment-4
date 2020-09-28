import { Arguments, Argv } from "yargs";

export default function sayHello(yargs: Argv): void {
  yargs.command(
    "assign-name",

    "Take a name, print it out the the screen and say hello",
    {
      name: {
        type: "string",
        alias: "n",
        description: "The name of who we are saying hello to",
      },
    },

    function (args) {
      const helloName = args.name;
      const message = console.log("Hello " + helloName);
      return message;
    }
  );
}
