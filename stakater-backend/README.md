### How to build and create docker image

This App acts as a backend service to give response to frontend
### Pre-requisites
1. Java 8 and above
2. Maven installed
3. Docker installed



1) Our backend project is in Spring boot POM based Following are the commands to build this
 ```bash
$ mvn clean
```
```bash
$ mvn compile
```
2)  To create the jar file and docker image
```bash
$ mvn install
````
The above command would create a docker image automatically once completed
```bash
REPOSITORY                                 TAG                 IMAGE ID            CREATED             SIZE
stakater-backend                           latest      c759f8392084        2 minutes ago       122MB
```
3) Re-tag and push the same to docker repository
```bash
$ docker tag stakater-backend:latest nayan2512/stakater-backend:latest
$ docker push nayan2512/stakater-backend:latest
```` 
4) To run it locally in docker
```bash
$ docker run -e NAME=nayan -p 8080:8080 c759f8392084
````

