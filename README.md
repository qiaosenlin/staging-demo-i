### 0. Summary
It's a Online-Peer-Learning-for-Intro-Stats project, Our project’s goal is to build an interactive web app for Intro Stats using R-shiny. We use reactJS as our frontend and implement convergence and rshiny to help build some tutorials which shares live data. Login authentication and search function are also added.

### 1. Getting started
##### 1.1 Prerequisites
Convengence, a javascript library is needed, so please first follow the guide in [convergence website](https://docs.convergence.io/guide/) to download some required software. 

Rstudio, a platform for rshiny file development, follow the guide in [R studio](https://www.rstudio.com/) to download and install.
Node.js
for macOS
```
brew install node
```
for windows
```
choco install nvs
```

Remember to initialize in the repo file
```
npm init
```

##### 1.2 Installing
download the [docker](https://docs.docker.com/), add the convergence container and then click run in docker dashboard. 
Contact us to get the updated AWS server which holds convergence service to get the live data from tutorials. **email: qiuyang@email.unc.edu**

##### 1.3 Running locally
After connecting to our AWS server, double click index.html to play around the radarchart.js example.
To run locally run on the tutorial rshiny file, open up the rshiny file in the repo and click run in Rstudio. The generated output will be a HTML file and can share live-data after connect to the AWS convergence server we provide.

##### 1.4 
Contact us and connect to AWS server which holds convergence service before testing/developing.

### 2. Testing
##### 2.1 
Jest is used to test our project.
Install Jest using yarn:
```
yarn add --dev jest
```
Or npm:
```
npm install --save-dev jest
```

add following configuration in the package.json
```
"scripts": {
      "test": "jest"
  }
```

Finally, ```run yarn test``` or ```npm run test``` and Jest will print the message.
Further use of Jest can be find [here](https://jestjs.io/docs/getting-started).

##### 2.2 
Since we are using Rshiny and convergence here which are both hard to test by static analysis, user beta test can be done by local testing.

### 3. Deployment
We deploy our convergence service on AWS and dashboard on Heroku. Further details or access permission please contact qiaosenl@live.unc.edu.

Heroku is recommended for the staging development. Current staging site can be find [here](https://teami-staging.herokuapp.com/).

No addons needed for the heroku deployment. We don't provide continuous integration or continuous deployment now but will provide it very soon.


