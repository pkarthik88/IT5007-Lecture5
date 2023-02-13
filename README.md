# IT5007-Lecture5

* Download the docker image from https://mynbox.nus.edu.sg/u/sME3cqVBN0aiwTdW/ac7a0cb7-3c49-4b0d-91c1-8deaf0244862?l
* For Windows, navigate to the download folder, and launch powershell and import the image as follows
```docker load -i docker_image_mongo.tar```
* Launch a container from this image using
```docker run -p 3000:3000 -p 5000:5000 -p 8000:8000 --name it5007-2220 -dit it5007_tutorial:t4 bash```
* Use VSCode (with Docker plugin installed) to i) start the container and ii) attach shell to the container.
* Download the skeleton code for the tutorial
  * Using Git clone: 
    - ```cd /home```
    - $ ```git clone https://github.com/pkarthik88/IT5007-Lecture5.git```

# Working on the project
* ```cd /home/It5007-Lecture5/``` from VSCode shell and work on the problem. You can also use the File navigation to browse to the file location and open the files inside the container.
* As usual, the first step in any newly downloaded repository is to run ```npm install``` to install dependencies.
* Compilation: ```npm run compile```
* Execution: As usual, you can run the code using ```npm start```. This will start the express server that serves webpages to users.

# Copying Files between Container and your laptop/desktop

* Copy the files over from your laptop to the docker container using the windows powershell command:
```docker cp <windows path where the file is present> it5007-2220:/home/```
* For copying files in reverse direction, switch the file order in above command.
