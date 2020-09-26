# Focus College ACSD Assignment 4

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---

### Version: 4.0.0
Major Version Changes, Added prettier into dependancies. Will need to re-run ```npm install```

## How to Use This Application
------------------------------
In this version of the assignment, our application can run six npm scripts. `compile`,  `start` ,  `build` ,  `build:notest` , `build:format` , and `build:lint`. 

* `compile`, runs the tsc command and compiles the project

    ```
    npm run compile
    ```

* `start`, runs index.js file in the dist folder (which is created with the compile command)

    Example: 

    ```
    npm run start
    ```

* `build`, runs three commands at once, it will lint, format,  then compile and run

    Example: 

    ```
    npm run build
    ```
* `build:notest`, this will run build, without prettier, or eslint.

    Example: 

    ```
    npm run build:notest
    ```
* `build:format`, runs prettier, and formats your code.

    Example: 

    ```
    npm run build:format
    ```s

* `build:lint`, runs eslint within our program  (formally named `lint`)

    Example: 

    ```
    npm run build:lint
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
