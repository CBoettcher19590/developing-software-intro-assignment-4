# Focus College ACSD Assignment 4

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---

### Version: 6.0.0
Major Version Changes, nyc, and @istanbuljs/nyc-config-typescript into dependancies. Will need to re-run ```npm install```

## How to Use This Application
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
