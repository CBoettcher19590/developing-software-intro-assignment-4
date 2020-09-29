# Focus College ACSD Assignment 4

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---

### Version: 7.1.0
Minor Version Changes: Added Modules to the project, and integrated testing for the functions

## How to Use The Scripts
------------------------------
In this version of the assignment, our application can run six npm scripts. `compile`,  `start` ,  `build` ,  `build:notest` , `build:format` , `build:lint`, and `test`. 

* `compile`, runs the tsc command and compiles the project

    ```
    npm run compile
    ```

* `start`, runs index.js file in the dist folder (which is created with the compile command.

    ```
    npm run start
    ```

*  *Updated* `build`, runs four commands at once, it will lint, format,  then compile and run

    ```
    npm run build
    ```
* `build:notest`, this will run build, without prettier, or eslint.

    ```
    npm run build:notest
    ```
* `build:format`, runs prettier, and formats your code.

    ```
    npm run build:format
    ```

* `build:lint`, runs eslint within our program  (formally named `lint`)

    ```
    npm run build:lint
    ```
 * `test`, runs our tests in the "tests" folder that was added

    ```
    npm run build:lint
    ```
* `test:coverage`, this will run our tests, and use nyc to print out a nice chart in our console. 
    ```
    npm run test:coverage
    ```

  
## How to use Yargs
-------------------
In this Version, Yargs has been added to the project. Using the `assign-name` command you will be able to enter a name in the command line, and the program will return a console.log that states Hello [name]. 

* To use `assign-name`, you need to pass in one parameter:

    * The name of the who you want to say Hello to(preceeded by the `-n flag`)

Example:

```
node dist/index.js assign-name -n Colby
```


## Developing Instrucions 
-------------------------
Download this application from Github:
```
git clone https://github.com/CBoettcher19590/developing-software-intro-assignment-4
```

If already downloaded:
```
git pull origin master
```

To install the dependencies:
```
npm install
```

To build and run the program:
```
npm run build
```
