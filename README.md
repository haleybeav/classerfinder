# classerfinder
*A More Better-er Approach to Class Finder*
View your class selections in real-time as you build your schedule. Easily.  

https://docs.google.com/presentation/d/1C9pMLzcSUKrX50lk4QppdfBLUpw60CBqhuPULdcLhB8/edit?usp=sharing


# Features

### Technologies
* [ReactJS] - 
* [node.js] - 
* [ElasticSearch] -
 
### Installation

ClasserFinder requires [Node.js](https://nodejs.org/) v4+ to run. Now, let's install the dependencies and start her up!

Starting the client:
```sh
$ cd classerfinder/client
$ npm install -d
$ npm start
```

Starting the server:
```sh
$ cd classerfinder/server
$ npm install
$ node app.js
```

Starting Elastic Search:
```sh
$ cd elasticsearch-6.6.1
$ bin/elasticsearch
```

### Elastic Search Setup
Find it [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/zip-targz.html) or [here](https://www.elastic.co/start).

### Populating Elastic Search
Using our *Bash* script:
```sh
$ cd classerfinder/webscraper
$ ./push.sh
```
