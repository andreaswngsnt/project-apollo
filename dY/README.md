# Installation
## Software Requirements
- [Node.js](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/download-center#community)

## Setting Up Database
1. [Download](https://drive.google.com/open?id=1Ngx9eI4FyEf8sABAd99J_aMkDkPUTurw) the database data
2. Unzip the file
3. Open `C:/Program Files/MongoDB/Server/<MongoDB Version>/bin` (Path relative to where you installed MongoDB)
4. Run `mongorestore -d <path to the database in step 1> apollo` via command line

# Running the web in local host
## Run the database
1. Open `C:/Program Files/MongoDB/Server/<MongoDB Version>/bin` (Path relative to where you installed MongoDB)
2. Run `mongod` via command line

## Run the server
1. Open this folder via command line
2. Run `node server.js`

## Preview the website
1. Open `localhost:3000` in your web browser
