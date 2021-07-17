#### How to run this application

This is a React JS app which consumes the backend service.

###Pre-requisites
1. Node installed
2. Docker installed

1. To build this project run the following
```bash
$ npm install
``` 
2. In order to build the docker image run the following
```bash
$ docker built -t nayan2512/stakater-frontend:latest .
```

3. Push the docker build to repositories
```bash
$ docker push nayan2512/stakater-frontend:latest
```
```bash
REPOSITORY                                 TAG                 IMAGE ID            CREATED             SIZE
nayan2512/stakater-frontend                localhost           d4dec9584aeb        2 hours ago         558MB
```

4. To run it locally
```bash
$ docker run -p 3000:3000 d4dec9584aeb
```
