# Focus College ACSD Assignment 4

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---

### Version: 3.0.0

## How to Use This Application
------------------------------
In this version of the assignment, our application can run five npm scripts. `compile`, `start`, `build`, `lint`, and `build:lint`.  
* `compile`, runs the tsc command and compiles the project

    ```
    npm run compile
    ```

* `start`, runs index.js file in the dist folder (which is created with the compile command)

    Example: 

    ```
    npm run start
    ```

* `build`, runs both the start, and compile commands together:

    Example: 

    ```
    npm run build
    ```
* `lint`, runs eslint within our program

    Example: 

    ```
    npm run lint
    ```
    * `build:lint`, runs all of the build commands, as well as linting.

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
