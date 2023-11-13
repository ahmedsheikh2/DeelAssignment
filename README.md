# Introduction

This is the Repo for maintaining the code-base for DEEL Automated Tests using Playwright Automation Framework build using JavaScript. In order to setup the framework and execute the scripts, follow the steps mentioned below. 
             
# Prerequisites
* Download latest Visual Studio Code 
* Download Nodejs 

# Build and Test
* Clone the repo:

    ```git clone your-repo-link```

* Dependencies: You need to install node modules and playwright using the following command.

    ```npm init playwright@latest --yes -- --quiet --browser=chromium --browser=firefox --browser=webkit --gha```

* How to run tests : You can run test by giving command.

    ```npx playwright test your-test-name```

# Report

* To check Report, you can give the following command.

   ```npx playwright show-report```

